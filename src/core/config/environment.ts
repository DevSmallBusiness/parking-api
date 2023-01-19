import { resolve } from "path";
import { config } from "dotenv";
import { IEnvironment } from "../interfaces/environment.interface";

config({ path: resolve(__dirname, "../../../.env") });

export const environment = <IEnvironment>{
  isProduction: process.env.NODE_ENV === "production",
  port: process.env.PORT,
  jwtPassword: process.env.JWT_PSW,
  databaseUrl: {
    dev: process.env.DATABASE_URI_DEV,
    prod: process.env.DATABASE_URI_PROD,
  },
};
