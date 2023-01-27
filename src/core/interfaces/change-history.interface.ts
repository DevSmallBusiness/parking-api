import { ServiceStatesEnum } from "../constants/service-states.enum";
import { TypeServiceEnum } from "../constants/type-service.enum";
import { TypeVehicleEnum } from "../constants/type-vehicle.enum";

export interface IChangeHistory {
  id: string;
  typeService: TypeServiceEnum;
  typeVehicle: TypeVehicleEnum;
  plate: string;
  ownerName: string;
  ownerNumber: string;
  entryDate: Date;
  departureDate: Date;
  creationDate: Date;
  receivableValue: number;
  moneyPaid: number;
  remainigMoney: number;
  serviceState: ServiceStatesEnum;
}

export interface IDeleteResult {
  acknowledged: boolean;
  deletedCount: number;
}
