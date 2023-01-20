import { IChangeHistory, IDeleteResult } from "../../core/interfaces/change-history.interface";
import { MongooseSource } from "../../data/mongoose.source";

export class ChangesHistoryRepository {
  private db: MongooseSource<IChangeHistory>;

  constructor(db: MongooseSource<IChangeHistory>) {
    this.db = db;
  }

  public async getChangesHistory(): Promise<IChangeHistory[]> {
    return await this.db.findAll({}, {});
  }

  public async getChangeHistoryById(id: string): Promise<IChangeHistory | null> {
    return await this.db.findById(id);
  }

  public async createChangeHistory(changeHistory: IChangeHistory): Promise<IChangeHistory> {
    return await this.db.create(changeHistory);
  }

  public async updateChangeHistory(changeHistory: IChangeHistory): Promise<IChangeHistory | null> {
    return await this.db.update(changeHistory.id, changeHistory);
  }

  public async deleteChangeHistory(id: string): Promise<IChangeHistory | null> {
    return await this.db.delete(id);
  }

  public async deleteAllChangesHistory(): Promise<IDeleteResult> {
    return await this.db.deleteAll();
  }
}
