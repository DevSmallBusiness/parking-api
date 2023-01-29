import { IDeleteResult } from "../../core/interfaces/change-history.interface";
import { IFilter } from "../../core/interfaces/response.interface";
import { IVehicleRecord } from "../../core/interfaces/vehicle-record.interface";
import { MongooseSource } from "../../data/mongoose.source";

export class VehiclesRecordsRepository {
  private db: MongooseSource<IVehicleRecord>;

  constructor(db: MongooseSource<IVehicleRecord>) {
    this.db = db;
  }

  public async getVehiclesRecords(filter: IFilter): Promise<IVehicleRecord[]> {
    return await this.db.findPaginated(filter);
  }

  public async getTotalVehiclesRecords(filter: { [key: string]: string }): Promise<number> {
    return await this.db.count(filter);
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

  public async deleteAllByFiled(filter: any): Promise<IDeleteResult> {
    return await this.db.deleteAllByFiled(filter);
  }

  public async setStateExpiredToVehicles(): Promise<null> {
    return await this.db.setStateExpiredToVehicles();
  }
}
