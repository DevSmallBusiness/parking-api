import { Application, Router } from "express";
import { VehiclesRecordsController } from "../controllers/interfaces/vehicles-records-controller.interface";

export class VehiclesRecordsRouter {
  private app: Application;
  private vehiclesRecordsController: VehiclesRecordsController;

  constructor(vehiclesRecordsController: VehiclesRecordsController, app: Application) {
    this.vehiclesRecordsController = vehiclesRecordsController;
    this.app = app;
  }

  init() {
    const router = Router();
    this.app.use("/api/vehicles", router);

    router.post("/", this.vehiclesRecordsController.handleCreateVehicleRecord);

    router.post("/paginated", this.vehiclesRecordsController.handleGetVehiclesRecords);

    router.post("/set-state-expired", this.vehiclesRecordsController.handleSetStateExpiredToVehicle);

    router.get("/:id", this.vehiclesRecordsController.handleGetVehicleRecordById);

    router.put("/", this.vehiclesRecordsController.handleUpdateVehicleRecord);

    router.delete("/:id", this.vehiclesRecordsController.handleDeleteVehicleRecord);

    router.delete("/", this.vehiclesRecordsController.handleDeleteAllByField);
  }
}
