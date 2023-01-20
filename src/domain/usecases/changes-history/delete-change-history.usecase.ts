import { IChangeHistory } from "../../../core/interfaces/change-history.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { ChangesHistoryRepository } from "../../repositories/changes-history.repository";

export class DeleteChangeHistoryUseCase {
  private repository: ChangesHistoryRepository;
  private responseMapper: ResponseMapper<IChangeHistory>;

  constructor(repository: ChangesHistoryRepository, responseMapper: ResponseMapper<IChangeHistory>) {
    this.repository = repository;
    this.responseMapper = responseMapper;
  }

  public async execute(id: string): Promise<IResponse<IChangeHistory>> {
    const changeHistory = await this.repository.deleteChangeHistory(id);

    if (!changeHistory) {
      return this.responseMapper.toResponse(null, messages.deleteFailure("change history"));
    }

    return this.responseMapper.toResponse(changeHistory, messages.deleteSuccess("change history"));
  }
}
