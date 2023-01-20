import { Application } from "express";
import { VehiclesRecordsRouter } from "../../api/routes/vehicles-records.routes";
import { VehiclesRecordsRouterInitializer } from "./routes/vehicles-records-router.initializer";

export default class Router {
  private routes: VehiclesRecordsRouter[];

  constructor(app: Application) {
    this.routes = [VehiclesRecordsRouterInitializer(app)];
  }

  public async init(): Promise<void> {
    return this.routes.forEach((route) => route.init());
  }
}
