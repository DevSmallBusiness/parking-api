import { IChangeHistory } from "../../../core/interfaces/change-history.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ResponseMapper } from "../../mappers/response.mapper";
import { ChangeHistoryMapper } from "../../mappers/changes-history.mapper";
import { ChangesHistoryRepository } from "../../repositories/changes-history.repository";

export class CreateChangeHistoryUseCase {
  private repository: ChangesHistoryRepository;
  private responseMapper: ResponseMapper<IChangeHistory>;
  private changeHistoryMapper: ChangeHistoryMapper;

  constructor(
    repository: ChangesHistoryRepository,
    responseMapper: ResponseMapper<IChangeHistory>,
    changeHistoryMapper: ChangeHistoryMapper
  ) {
    this.repository = repository;
    this.responseMapper = responseMapper;
    this.changeHistoryMapper = changeHistoryMapper;
  }

  public async execute(data: any): Promise<IResponse<IChangeHistory>> {
    const request = this.changeHistoryMapper.toChangeHistory(data);
    const changeHistoryCreated = await this.repository.createChangeHistory(request);
    return this.responseMapper.toResponse(changeHistoryCreated, messages.createSuccess("change history"));
  }
}
