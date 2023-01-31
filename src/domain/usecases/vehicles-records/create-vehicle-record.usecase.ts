import { ServiceStatesEnum } from "./../../../core/constants/service-states.enum";
import { IVehicleRecord } from "../../../core/interfaces/vehicle-record.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { VehicleRecordMapper } from "../../mappers/vehicles-records.mapper";
import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";

export class CreateVehicleRecordUseCase {
  private repository: VehiclesRecordsRepository;
  private responseMapper: ResponseMapper<IVehicleRecord>;
  private vehicleRecordMapper: VehicleRecordMapper;

  constructor(
    repository: VehiclesRecordsRepository,
    responseMapper: ResponseMapper<IVehicleRecord>,
    vehicleRecordMapper: VehicleRecordMapper
  ) {
    this.repository = repository;
    this.responseMapper = responseMapper;
    this.vehicleRecordMapper = vehicleRecordMapper;
  }

  public async execute(data: any): Promise<IResponse<IVehicleRecord>> {
    const request = this.vehicleRecordMapper.toVehicleRecord(data);
    const vehicleRecordCreated = await this.repository.createVehicleRecord(request);

    if (vehicleRecordCreated?.serviceState === "PAGADO" && vehicleRecordCreated?.typeService === "Por Mes") {
      const newDepartureDate = new Date(vehicleRecordCreated?.departureDate);
      newDepartureDate.setMonth(newDepartureDate.getMonth() + 1);

      const newVehicleRecord: IVehicleRecord = {
        typeService: vehicleRecordCreated?.typeService,
        typeVehicle: vehicleRecordCreated?.typeVehicle,
        plate: vehicleRecordCreated?.plate,
        ownerName: vehicleRecordCreated?.ownerName,
        ownerNumber: vehicleRecordCreated?.ownerNumber,
        entryDate: vehicleRecordCreated?.departureDate,
        departureDate: newDepartureDate,
        serviceState: ServiceStatesEnum.outstanding,
      };

      await this.repository.createVehicleRecord(newVehicleRecord);
    }
    return this.responseMapper.toResponse(vehicleRecordCreated, messages.createSuccess("vehicle record"));
  }
}
