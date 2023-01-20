import { IVehicleRecord } from "../../core/interfaces/vehicle-record.interface";

export class VehicleRecordMapper {
  toVehicleRecord(vehicleRecord: any): IVehicleRecord {
    return {
      id: vehicleRecord?.id,
      typeService: vehicleRecord?.typeService,
      typeVehicle: vehicleRecord?.typeVehicle,
      plate: vehicleRecord?.plate,
      ownerName: vehicleRecord?.ownerName,
      ownerNumber: vehicleRecord?.ownerNumber,
      entryDate: vehicleRecord?.entryDate,
      departureDate: vehicleRecord?.departureDate,
      receivableValue: vehicleRecord?.receivableValue,
      moneyPaid: vehicleRecord?.moneyPaid,
      remainigMoney: vehicleRecord?.remainigMoney,
      serviceState: vehicleRecord?.serviceState,
    };
  }
}
