import { IVehicleRecord } from "../../core/interfaces/vehicle-record.interface";
import { MongooseSource } from "../../data/mongoose.source";

export class VehiclesRecordsRepository {
  private db: MongooseSource<IVehicleRecord>;

  constructor(db: MongooseSource<IVehicleRecord>) {
    this.db = db;
  }

  public async getVehiclesRecords(): Promise<IVehicleRecord[]> {
    return await this.db.findAll({}, {});
  }

  public async getVehicleRecordById(id: string): Promise<IVehicleRecord | null> {
    return await this.db.findById(id);
  }

  public async createVehicleRecord(vehicleRecord: IVehicleRecord): Promise<IVehicleRecord> {
    return await this.db.create(vehicleRecord);
  }

  public async updateVehicleRecord(vehicleRecord: IVehicleRecord): Promise<IVehicleRecord | null> {
    return await this.db.update(vehicleRecord.id, vehicleRecord);
  }

  public async deleteVehicleRecord(id: string): Promise<IVehicleRecord | null> {
    return await this.db.delete(id);
  }
}
