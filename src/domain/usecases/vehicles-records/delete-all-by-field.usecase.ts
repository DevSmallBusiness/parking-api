import { IDeleteResult } from "../../../core/interfaces/change-history.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";

export class DeleteAllByFieldUseCase {
  private repository: VehiclesRecordsRepository;
  private responseMapper: ResponseMapper<IDeleteResult>;

  constructor(repository: VehiclesRecordsRepository, responseMapper: ResponseMapper<IDeleteResult>) {
    this.repository = repository;
    this.responseMapper = responseMapper;
  }

  public async execute(filter: any): Promise<IResponse<IDeleteResult>> {
    const deleteResult = await this.repository.deleteAllByFiled(filter);
    return this.responseMapper.toResponse(deleteResult, messages.deleteSuccess("vehicles records"));
  }
}
