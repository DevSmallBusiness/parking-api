import { ServiceStatesEnum } from "../constants/service-states.enum";
import { TypeServiceEnum } from "../constants/type-service.enum";
import { TypeVehicleEnum } from "../constants/type-vehicle.enum";

export interface IVehicleRecord {
  id: string;
  typeService: TypeServiceEnum;
  typeVehicle: TypeVehicleEnum;
  plate: string;
  ownerName: string;
  ownerNumber: string;
  entryDate: Date;
  departureDate: Date;
  receivableValue: string;
  moneyPaid?: string;
  remainigMoney?: string;
  serviceState?: ServiceStatesEnum;
}
