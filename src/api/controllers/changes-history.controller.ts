import { NextFunction, Request, Response } from "express";
import { CreateChangeHistoryUseCase } from "../../domain/usecases/changes-history/create-change-history.usecase";
import { DeleteChangeHistoryUseCase } from "../../domain/usecases/changes-history/delete-change-history.usecase";
import { DeleteAllChangesHistoryUseCase } from "../../domain/usecases/changes-history/delete-all-change-history.usecase";
import { GetChangeHistoryByIdUseCase } from "../../domain/usecases/changes-history/get-change-history-by-id.usecase";
import { GetChangesHistoryUseCase } from "../../domain/usecases/changes-history/get-changes-history.usecase";
import { UpdateChangeHistoryUseCase } from "../../domain/usecases/changes-history/update-change-history.usecase";
import { ChangesHistoryController } from "./interfaces/changes-history-controller.interface";

export const changesHistoryController = (
  createChangeHistoryUseCase: CreateChangeHistoryUseCase,
  getChangesHistoryUseCase: GetChangesHistoryUseCase,
  getChangeHistoryByIdUseCase: GetChangeHistoryByIdUseCase,
  updateChangeHistoryUseCase: UpdateChangeHistoryUseCase,
  deleteChangeHistoryUseCase: DeleteChangeHistoryUseCase,
  deleteAllChangesHistoryUseCase: DeleteAllChangesHistoryUseCase
): ChangesHistoryController => ({
  handleCreateChangeHistory: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await createChangeHistoryUseCase.execute(req.body);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleGetChangesHistory: async (_req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await getChangesHistoryUseCase.execute();
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleGetChangeHistoryById: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await getChangeHistoryByIdUseCase.execute(req.params.id);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleUpdateChangeHistory: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await updateChangeHistoryUseCase.execute(req.body);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleDeleteChangeHistory: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await deleteChangeHistoryUseCase.execute(req.params.id);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleDeleteAllChangesHistory: async (_req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await deleteAllChangesHistoryUseCase.execute();
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
});
