import { IVehicleRecord } from "../../../core/interfaces/vehicle-record.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";
import { FilterMapper } from "../../mappers/filter.mapper";

export class GetVehiclesRecordsUseCase {
  private repository: VehiclesRecordsRepository;
  private filterMapper: FilterMapper;
  private responseMapper: ResponseMapper<IVehicleRecord[]>;

  constructor(repository: VehiclesRecordsRepository, filterMapper: FilterMapper, responseMapper: ResponseMapper<IVehicleRecord[]>) {
    this.repository = repository;
    this.filterMapper = filterMapper;
    this.responseMapper = responseMapper;
  }

  public async execute(data: any): Promise<IResponse<IVehicleRecord[]>> {
    const filter = this.filterMapper.toFilter(data);
    const total = await this.repository.getTotalVehiclesRecords(filter.term);
    const vehiclesRecords = await this.repository.getVehiclesRecords(filter);

    const response = this.responseMapper.toResponse(null, messages.getAllFailure("vehicles records"), undefined, {
      ...filter,
      total: total,
      term: this.filterMapper.toTerm(filter.term),
    });

    if (!vehiclesRecords?.length) {
      return response;
    }

    return {
      ...response,
      result: vehiclesRecords,
      message: messages.getAll("vehicles records"),
    };
  }
}
