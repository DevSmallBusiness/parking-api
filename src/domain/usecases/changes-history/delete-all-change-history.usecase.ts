import { IDeleteResult } from "../../../core/interfaces/change-history.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { ChangesHistoryRepository } from "../../repositories/changes-history.repository";

export class DeleteAllChangesHistoryUseCase {
  private repository: ChangesHistoryRepository;
  private responseMapper: ResponseMapper<IDeleteResult>;

  constructor(repository: ChangesHistoryRepository, responseMapper: ResponseMapper<IDeleteResult>) {
    this.repository = repository;
    this.responseMapper = responseMapper;
  }

  public async execute(): Promise<IResponse<IDeleteResult>> {
    const deleteResult = await this.repository.deleteAllChangesHistory();
    return this.responseMapper.toResponse(deleteResult, messages.deleteSuccess("changes history"));
  }
}
