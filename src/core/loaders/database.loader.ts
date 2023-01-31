import { connect, Mongoose, set } from "mongoose";
import { environment } from "../config/environment";

export default class Database {
  public async connect(): Promise<Mongoose> {
    set("strictQuery", false);
    return connect(environment.isProduction ? environment.databaseUrl.prod : environment.databaseUrl.dev);
  }
}
