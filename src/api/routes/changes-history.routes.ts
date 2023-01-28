import { Application, Router } from "express";
import { ChangesHistoryController } from "../controllers/interfaces/changes-history-controller.interface";

export class ChangesHistoryRouter {
  private app: Application;
  private changesHistoryController: ChangesHistoryController;

  constructor(changesHistoryController: ChangesHistoryController, app: Application) {
    this.changesHistoryController = changesHistoryController;
    this.app = app;
  }

  init() {
    const router = Router();
    this.app.use("/api/history", router);

    router.post("/", this.changesHistoryController.handleCreateChangeHistory);

    router.get("/", this.changesHistoryController.handleGetChangesHistory);

    router.get("/:id", this.changesHistoryController.handleGetChangeHistoryById);

    router.put("/", this.changesHistoryController.handleUpdateChangeHistory);

    router.delete("/:id", this.changesHistoryController.handleDeleteChangeHistory);

    router.delete("/", this.changesHistoryController.handleDeleteAllChangesHistory);
  }
}
