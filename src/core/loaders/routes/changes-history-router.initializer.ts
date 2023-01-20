import { Application } from "express";
import { changesHistoryController } from "../../../api/controllers/changes-history.controller";
import { ChangesHistoryRouter } from "../../../api/routes/changes-history.routes";
import { changeHistoryModel } from "../../../data/models/change-history.model";
import { MongooseSource } from "../../../data/mongoose.source";
import { ChangeHistoryMapper } from "../../../domain/mappers/changes-history.mapper";
import { ResponseMapper } from "../../../domain/mappers/response.mapper";
import { ChangesHistoryRepository } from "../../../domain/repositories/changes-history.repository";
import { CreateChangeHistoryUseCase } from "../../../domain/usecases/changes-history/create-change-history.usecase";
import { DeleteChangeHistoryUseCase } from "../../../domain/usecases/changes-history/delete-change-history.usecase";
import { DeleteAllChangesHistoryUseCase } from "../../../domain/usecases/changes-history/delete-all-change-history.usecase";
import { GetChangeHistoryByIdUseCase } from "../../../domain/usecases/changes-history/get-change-history-by-id.usecase";
import { GetChangesHistoryUseCase } from "../../../domain/usecases/changes-history/get-changes-history.usecase";
import { UpdateChangeHistoryUseCase } from "../../../domain/usecases/changes-history/update-change-history.usecase";

export const ChangesHistoryRouterInitializer = (app: Application): ChangesHistoryRouter => {
  const createChangeHistoryUseCase = new CreateChangeHistoryUseCase(
    new ChangesHistoryRepository(new MongooseSource(changeHistoryModel)),
    new ResponseMapper(),
    new ChangeHistoryMapper()
  );

  const updateChangeHistoryUseCase = new UpdateChangeHistoryUseCase(
    new ChangesHistoryRepository(new MongooseSource(changeHistoryModel)),
    new ChangeHistoryMapper(),
    new ResponseMapper()
  );

  const getChangesHistoryUseCase = new GetChangesHistoryUseCase(
    new ChangesHistoryRepository(new MongooseSource(changeHistoryModel)),
    new ResponseMapper()
  );

  const getChangeHistoryByIdUseCase = new GetChangeHistoryByIdUseCase(
    new ChangesHistoryRepository(new MongooseSource(changeHistoryModel)),
    new ResponseMapper()
  );

  const deleteChangeHistoryUseCase = new DeleteChangeHistoryUseCase(
    new ChangesHistoryRepository(new MongooseSource(changeHistoryModel)),
    new ResponseMapper()
  );

  const deleteAllChangeHistoryUseCase = new DeleteAllChangesHistoryUseCase(
    new ChangesHistoryRepository(new MongooseSource(changeHistoryModel)),
    new ResponseMapper()
  );

  const controller = changesHistoryController(
    createChangeHistoryUseCase,
    getChangesHistoryUseCase,
    getChangeHistoryByIdUseCase,
    updateChangeHistoryUseCase,
    deleteChangeHistoryUseCase,
    deleteAllChangeHistoryUseCase
  );

  return new ChangesHistoryRouter(controller, app);
};
