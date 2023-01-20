import { IVehicleRecord } from "../../../core/interfaces/vehicle-record.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";

export class DeleteVehicleRecordUseCase {
  private repository: VehiclesRecordsRepository;
  private responseMapper: ResponseMapper<IVehicleRecord>;

  constructor(repository: VehiclesRecordsRepository, responseMapper: ResponseMapper<IVehicleRecord>) {
    this.repository = repository;
    this.responseMapper = responseMapper;
  }

  public async execute(id: string): Promise<IResponse<IVehicleRecord>> {
    const vehicleRecord = await this.repository.deleteVehicleRecord(id);

    if (!vehicleRecord) {
      return this.responseMapper.toResponse(null, messages.deleteFailure("vehicle record"));
    }

    return this.responseMapper.toResponse(vehicleRecord, messages.deleteSuccess("vehicle record"));
  }
}
