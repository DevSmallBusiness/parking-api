import { IVehicleRecord } from "../../../core/interfaces/vehicle-record.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { VehicleRecordMapper } from "../../mappers/vehicles-records.mapper";
import { ResponseMapper } from "../../mappers/response.mapper";
import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";
import { ServiceStatesEnum } from "../../../core/constants/service-states.enum";

export class UpdateVehicleRecordUseCase {
  private repository: VehiclesRecordsRepository;
  private vehicleRecordMapper: VehicleRecordMapper;
  private responseMapper: ResponseMapper<IVehicleRecord>;

  constructor(
    repository: VehiclesRecordsRepository,
    vehicleRecordMapper: VehicleRecordMapper,
    responseMapper: ResponseMapper<IVehicleRecord>
  ) {
    this.repository = repository;
    this.vehicleRecordMapper = vehicleRecordMapper;
    this.responseMapper = responseMapper;
  }

  public async execute(data: any): Promise<IResponse<IVehicleRecord>> {
    const request = this.vehicleRecordMapper.toVehicleRecord(data);
    const vehicleRecordUpdated = await this.repository.updateVehicleRecord(request);

    if (vehicleRecordUpdated?.serviceState === "PAGADO" && vehicleRecordUpdated?.typeService === "Por Mes") {
      const newDepartureDate = new Date(vehicleRecordUpdated?.departureDate);
      newDepartureDate.setMonth(newDepartureDate.getMonth() + 1);

      const newVehicleRecord: IVehicleRecord = {
        typeService: vehicleRecordUpdated?.typeService,
        typeVehicle: vehicleRecordUpdated?.typeVehicle,
        plate: vehicleRecordUpdated?.plate,
        ownerName: vehicleRecordUpdated?.ownerName,
        ownerNumber: vehicleRecordUpdated?.ownerNumber,
        entryDate: vehicleRecordUpdated?.departureDate,
        departureDate: newDepartureDate,
        serviceState: ServiceStatesEnum.outstanding,
      };

      await this.repository.createVehicleRecord(newVehicleRecord);
    }

    return this.responseMapper.toResponse(vehicleRecordUpdated, messages.updateSuccess("vehicle record"));
  }
}
