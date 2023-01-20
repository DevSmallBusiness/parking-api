import { Application, Router } from "express";
import { VehicleRecordController } from "../controllers/interfaces/vehicles-records-controller.interface";

export class VehiclesRecordsRouter {
  private app: Application;
  private vehicleRecordController: VehicleRecordController;

  constructor(vehicleRecordController: VehicleRecordController, app: Application) {
    this.vehicleRecordController = vehicleRecordController;
    this.app = app;
  }

  init() {
    const router = Router();
    this.app.use("/api/vehicles", router);

    router.post("/", this.vehicleRecordController.handleCreateVehicleRecord);

    router.get("/", this.vehicleRecordController.handleGetVehiclesRecords);

    router.get("/:id", this.vehicleRecordController.handleGetVehicleRecordById);

    router.put("/", this.vehicleRecordController.handleUpdateVehicleRecord);

    router.delete("/:id", this.vehicleRecordController.handleDeleteVehicleRecord);
  }
}
