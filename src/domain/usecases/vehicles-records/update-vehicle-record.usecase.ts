import { IVehicleRecord } from "../../../core/interfaces/vehicle-record.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { VehicleRecordMapper } from "../../mappers/vehicles-records.mapper";
import { ResponseMapper } from "../../mappers/response.mapper";
import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";

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
    return this.responseMapper.toResponse(vehicleRecordUpdated, messages.updateSuccess("vehicle record"));
  }
}
