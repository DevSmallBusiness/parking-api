import { NextFunction, Request, Response } from "express";
import { CreateVehicleRecordUseCase } from "../../domain/usecases/vehicles-records/create-vehicle-record.usecase";
import { DeleteVehicleRecordUseCase } from "../../domain/usecases/vehicles-records/delete-vehicle-record.usecase";
import { GetVehicleRecordByIdUseCase } from "../../domain/usecases/vehicles-records/get-vehicle-record-by-id.usecase";
import { GetVehiclesRecordsUseCase } from "../../domain/usecases/vehicles-records/get-vehicles-records.usecase";
import { UpdateVehicleRecordUseCase } from "../../domain/usecases/vehicles-records/update-vehicle-record.usecase";
import { VehiclesRecordsController } from "./interfaces/vehicles-records-controller.interface";

export const vehiclesRecordsController = (
  createVehicleRecordUseCase: CreateVehicleRecordUseCase,
  getVehiclesRecordsUseCase: GetVehiclesRecordsUseCase,
  getVehicleRecordByIdUseCase: GetVehicleRecordByIdUseCase,
  updateVehicleRecordUseCase: UpdateVehicleRecordUseCase,
  deleteVehicleRecordUseCase: DeleteVehicleRecordUseCase
): VehiclesRecordsController => ({
  handleCreateVehicleRecord: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await createVehicleRecordUseCase.execute(req.body);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleGetVehiclesRecords: async (_req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await getVehiclesRecordsUseCase.execute();
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleGetVehicleRecordById: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await getVehicleRecordByIdUseCase.execute(req.params.id);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleUpdateVehicleRecord: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await updateVehicleRecordUseCase.execute(req.body);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleDeleteVehicleRecord: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await deleteVehicleRecordUseCase.execute(req.params.id);
      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
});
