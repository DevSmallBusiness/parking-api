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
    return this.responseMapper.toResponse(vehicleRecordCreated, messages.createSuccess("vehicle record"));
  }
}
