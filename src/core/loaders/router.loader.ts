import { Application } from "express";

import { ChangesHistoryRouter } from "../../api/routes/changes-history.routes";
import { VehiclesRecordsRouter } from "../../api/routes/vehicles-records.routes";
import { ChangesHistoryRouterInitializer } from "./routes/changes-history-router.initializer";
import { VehiclesRecordsRouterInitializer } from "./routes/vehicles-records-router.initializer";

export default class Router {
  private routes: (VehiclesRecordsRouter | ChangesHistoryRouter)[];

  constructor(app: Application) {
    this.routes = [VehiclesRecordsRouterInitializer(app), ChangesHistoryRouterInitializer(app)];
  }

  public async init(): Promise<void> {
    return this.routes.forEach((route) => route.init());
  }
}
