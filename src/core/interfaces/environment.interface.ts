export interface IEnvironment {
  isProduction: boolean;
  port: string;
  jwtPassword: string;
  databaseUrl: {
    dev: string;
    prod: string;
  };
}
