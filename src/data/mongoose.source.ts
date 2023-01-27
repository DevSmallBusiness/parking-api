import { HydratedDocument, Model } from "mongoose";
import { IFilter } from "../core/interfaces/response.interface";
import { DeleteResult } from "mongodb";

export class MongooseSource<T> {
  private model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  public async create(data: T): Promise<T> {
    return await this.model.create(data);
  }

  public async update(id: string, data: any): Promise<Awaited<T> | null> {
    return await this.model.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
  }

  public async delete(id: string): Promise<Awaited<T> | null> {
    return await this.model.findByIdAndDelete(id);
  }

  public async deleteAll(): Promise<DeleteResult> {
    return await this.model.deleteMany({});
  }

  public async findOne(data: any): Promise<Awaited<T> | null> {
    return await this.model.findOne(data).lean();
  }

  public async findById(id: string): Promise<Awaited<T> | null> {
    return await this.model.findById(id);
  }

  public async findAll(filter: any, sorter: any): Promise<HydratedDocument<T>[]> {
    return await this.model.find(filter).sort(sorter);
  }

  public async findPaginated(filter: IFilter): Promise<HydratedDocument<T>[]> {
    return await this.model.find(filter.term).skip(filter.from).limit(filter.limit).sort(filter.sort);
  }

  public async count(filter: { [key: string]: string }): Promise<number> {
    return await this.model.countDocuments(filter);
  }

  public async setStateExpiredToVehicles(): Promise<null> {
    await this.model.updateMany({$lte: {departureDate: new Date()}, $ne: {serviceState:"PAGADO"} }, {$set: {serviceState:"VENCIDO"}});
    return null
  }
}
