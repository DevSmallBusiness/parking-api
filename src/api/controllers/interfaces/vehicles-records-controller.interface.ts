import { NextFunction, Request, Response } from "express";

export interface VehiclesRecordsController {
  handleCreateVehicleRecord: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleGetVehiclesRecords: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleGetVehicleRecordById: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleUpdateVehicleRecord: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleDeleteVehicleRecord: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleDeleteAllByField: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleSetStateExpiredToVehicle: (_req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
}
