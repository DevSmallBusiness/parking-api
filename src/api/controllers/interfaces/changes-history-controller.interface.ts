import { NextFunction, Request, Response } from "express";

export interface ChangesHistoryController {
  handleCreateChangeHistory: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleGetChangesHistory: (_req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleGetChangeHistoryById: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleUpdateChangeHistory: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleDeleteChangeHistory: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleDeleteAllChangesHistory: (_req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
}
