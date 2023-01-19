import { ServiceStatesEnum } from "../constants/service-states.enum";
import { TypeServiceEnum } from "../constants/type-service.enum";
import { TypeVehicleEnum } from "../constants/type-vehicle.enum";

export interface IChangeHistory {
  _id: string;
  typeService: TypeServiceEnum;
  typeVehicle: TypeVehicleEnum;
  plate: string;
  ownerName: string;
  ownerNumber: string;
  entryDate: Date;
  departureDate: Date;
  creationDate: Date;
  receivableValue: string;
  moneyPaid: string;
  remainigMoney: string;
  serviceState: ServiceStatesEnum;
}
