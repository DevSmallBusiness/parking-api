import { IChangeHistory } from "../../../core/interfaces/change-history.interface";
import { IResponse } from "../../../core/interfaces/response.interface";
import { messages } from "../../../core/utils/messages";
import { ChangeHistoryMapper } from "../../mappers/changes-history.mapper";
import { ResponseMapper } from "../../mappers/response.mapper";
import { ChangesHistoryRepository } from "../../repositories/changes-history.repository";

export class UpdateChangeHistoryUseCase {
  private repository: ChangesHistoryRepository;
  private changeHistoryMapper: ChangeHistoryMapper;
  private responseMapper: ResponseMapper<IChangeHistory>;

  constructor(
    repository: ChangesHistoryRepository,
    changeHistoryMapper: ChangeHistoryMapper,
    responseMapper: ResponseMapper<IChangeHistory>
  ) {
    this.repository = repository;
    this.changeHistoryMapper = changeHistoryMapper;
    this.responseMapper = responseMapper;
  }

  public async execute(data: any): Promise<IResponse<IChangeHistory>> {
    const request = this.changeHistoryMapper.toChangeHistory(data);
    const changeHistoryUpdated = await this.repository.updateChangeHistory(request);
    return this.responseMapper.toResponse(changeHistoryUpdated, messages.updateSuccess("change history"));
  }
}
