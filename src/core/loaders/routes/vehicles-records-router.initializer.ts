import { Application } from "express";
import { vehicleRecordController } from "../../../api/controllers/vehicles-records.controller";
import { VehiclesRecordsRouter } from "../../../api/routes/vehicles-records.routes";
import { vehicleRecordModel } from "../../../data/models/vehicle-record.model";
import { MongooseSource } from "../../../data/mongoose.source";
import { VehicleRecordMapper } from "../../../domain/mappers/vehicles-records.mapper";
import { ResponseMapper } from "../../../domain/mappers/response.mapper";
import { VehiclesRecordsRepository } from "../../../domain/repositories/vehicles-records.repository";
import { CreateVehicleRecordUseCase } from "../../../domain/usecases/vehicles-records/create-vehicle-record.usecase";
import { DeleteVehicleRecordUseCase } from "../../../domain/usecases/vehicles-records/delete-vehicle-record.usecase";
import { GetVehicleRecordByIdUseCase } from "../../../domain/usecases/vehicles-records/get-vehicle-record-by-id.usecase";
import { GetVehiclesRecordsUseCase } from "../../../domain/usecases/vehicles-records/get-vehicles-records.usecase";
import { UpdateVehicleRecordUseCase } from "../../../domain/usecases/vehicles-records/update-vehicle-record.usecase";

export const VehiclesRecordsRouterInitializer = (app: Application): VehiclesRecordsRouter => {
  const createVehicleRecordUseCase = new CreateVehicleRecordUseCase(
    new VehiclesRecordsRepository(new MongooseSource(vehicleRecordModel)),
    new ResponseMapper(),
    new VehicleRecordMapper()
  );

  const updateVehicleRecordUseCase = new UpdateVehicleRecordUseCase(
    new VehiclesRecordsRepository(new MongooseSource(vehicleRecordModel)),
    new VehicleRecordMapper(),
    new ResponseMapper()
  );

  const getVehiclesRecordsUseCase = new GetVehiclesRecordsUseCase(
    new VehiclesRecordsRepository(new MongooseSource(vehicleRecordModel)),
    new ResponseMapper()
  );

  const getVehicleRecordByIdUseCase = new GetVehicleRecordByIdUseCase(
    new VehiclesRecordsRepository(new MongooseSource(vehicleRecordModel)),
    new ResponseMapper()
  );

  const deleteVehicleRecordUseCase = new DeleteVehicleRecordUseCase(
    new VehiclesRecordsRepository(new MongooseSource(vehicleRecordModel)),
    new ResponseMapper()
  );

  const controller = vehicleRecordController(
    createVehicleRecordUseCase,
    getVehiclesRecordsUseCase,
    getVehicleRecordByIdUseCase,
    updateVehicleRecordUseCase,
    deleteVehicleRecordUseCase
  );

  return new VehiclesRecordsRouter(controller, app);
};
