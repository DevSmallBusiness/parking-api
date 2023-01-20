import { NextFunction, Request, Response } from "express";

export interface VehicleRecordController {
  handleCreateVehicleRecord: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleGetVehiclesRecords: (_req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleGetVehicleRecordById: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleUpdateVehicleRecord: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
  handleDeleteVehicleRecord: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
}
