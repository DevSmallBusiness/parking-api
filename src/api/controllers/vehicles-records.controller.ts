import { NextFunction, Request, Response } from "express";
import { CreateVehicleRecordUseCase } from "../../domain/usecases/vehicles-records/create-vehicle-record.usecase";
import { CreateChangeHistoryUseCase } from "../../domain/usecases/changes-history/create-change-history.usecase";
import { DeleteVehicleRecordUseCase } from "../../domain/usecases/vehicles-records/delete-vehicle-record.usecase";
import { GetVehicleRecordByIdUseCase } from "../../domain/usecases/vehicles-records/get-vehicle-record-by-id.usecase";
import { GetVehiclesRecordsUseCase } from "../../domain/usecases/vehicles-records/get-vehicles-records.usecase";
import { SetStateExpiredToVehiclesUseCase } from "../../domain/usecases/vehicles-records/set-state-expired.usecase";
import { UpdateVehicleRecordUseCase } from "../../domain/usecases/vehicles-records/update-vehicle-record.usecase";
import { VehiclesRecordsController } from "./interfaces/vehicles-records-controller.interface";

export const vehiclesRecordsController = (
  createVehicleRecordUseCase: CreateVehicleRecordUseCase,
  getVehiclesRecordsUseCase: GetVehiclesRecordsUseCase,
  getVehicleRecordByIdUseCase: GetVehicleRecordByIdUseCase,
  updateVehicleRecordUseCase: UpdateVehicleRecordUseCase,
  deleteVehicleRecordUseCase: DeleteVehicleRecordUseCase,
  createChangeHistoryUseCase: CreateChangeHistoryUseCase,
  setStateExpiredToVehiclesUseCase: SetStateExpiredToVehiclesUseCase
): VehiclesRecordsController => ({
  handleCreateVehicleRecord: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await createVehicleRecordUseCase.execute(req.body);

      if (execution.result?.serviceState === "PAGADO") {
        await createChangeHistoryUseCase.execute(req.body);
      }

      return res.status(200).json(execution);
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
  handleGetVehiclesRecords: async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const execution = await getVehiclesRecordsUseCase.execute(req.body);
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

      if (execution.result?.serviceState === "PAGADO") {
        await createChangeHistoryUseCase.execute(req.body);
      }

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
  handleSetStateExpiredToVehicle: async (res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      await setStateExpiredToVehiclesUseCase.execute();
      return res.status(200).json("state of vehicles to expired ok!");
    } catch (err) {
      res.status(500).send({ error: err, message: "Internal server error" });
      next(err);
    }
  },
});
