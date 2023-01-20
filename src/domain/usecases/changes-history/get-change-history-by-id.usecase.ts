import { IChangeHistory } from "../../../core/interfaces/change-history.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { ChangesHistoryRepository } from "../../repositories/changes-history.repository";

export class GetChangeHistoryByIdUseCase {
  private repository: ChangesHistoryRepository;
  private responseMapper: ResponseMapper<IChangeHistory>;

  constructor(repository: ChangesHistoryRepository, responseMapper: ResponseMapper<IChangeHistory>) {
    this.repository = repository;
    this.responseMapper = responseMapper;
  }

  public async execute(id: string): Promise<IResponse<IChangeHistory>> {
    const changeHistory = await this.repository.getChangeHistoryById(id);

    if (!changeHistory) {
      return this.responseMapper.toResponse(null, messages.getByIdFailure("change history"));
    }

    return this.responseMapper.toResponse(changeHistory, messages.getById("change history"));
  }
}
