import { IChangeHistory } from "../../../core/interfaces/change-history.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { ChangesHistoryRepository } from "../../repositories/changes-history.repository";

export class GetChangesHistoryUseCase {
  private repository: ChangesHistoryRepository;
  private responseMapper: ResponseMapper<IChangeHistory[]>;

  constructor(repository: ChangesHistoryRepository, responseMapper: ResponseMapper<IChangeHistory[]>) {
    this.repository = repository;
    this.responseMapper = responseMapper;
  }

  public async execute(): Promise<IResponse<IChangeHistory[]>> {
    const changesHistory = await this.repository.getChangesHistory();

    if (!changesHistory?.length) {
      return this.responseMapper.toResponse(null, messages.getAllFailure("changes history"));
    }

    return this.responseMapper.toResponse(changesHistory, messages.getAll("changes history"));
  }
}
