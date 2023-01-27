import { VehiclesRecordsRepository } from "../../repositories/vehicles-records.repository";

export class SetStateExpiredToVehiclesUseCase {
  private repository: VehiclesRecordsRepository;

  constructor(repository: VehiclesRecordsRepository) {
    this.repository = repository;
  }

  public async execute(): Promise<null> {
    return await this.repository.setStateExpiredToVehicles();
  }
}
