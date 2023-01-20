import { IVehicleRecord } from "../../../core/interfaces/vehicle-record.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";

export class GetVehiclesRecordsUseCase {
  private repository: VehiclesRecordsRepository;
  private responseMapper: ResponseMapper<IVehicleRecord[]>;

  constructor(repository: VehiclesRecordsRepository, responseMapper: ResponseMapper<IVehicleRecord[]>) {
    this.repository = repository;
    this.responseMapper = responseMapper;
  }

  public async execute(): Promise<IResponse<IVehicleRecord[]>> {
    const vehiclesRecords = await this.repository.getVehiclesRecords();

    if (!vehiclesRecords?.length) {
      return this.responseMapper.toResponse(null, messages.getAllFailure("vehicles records"));
    }

    return this.responseMapper.toResponse(vehiclesRecords, messages.getAll("vehicles records"));
  }
}
