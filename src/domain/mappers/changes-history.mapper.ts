import { IChangeHistory } from "../../core/interfaces/change-history.interface";

export class ChangeHistoryMapper {
  toChangeHistory(changeHistory: any): IChangeHistory {
    return {
      id: changeHistory?._id,
      typeService: changeHistory?.typeService,
      typeVehicle: changeHistory?.typeVehicle,
      plate: changeHistory?.plate,
      ownerName: changeHistory?.ownerName,
      ownerNumber: changeHistory?.ownerNumber,
      entryDate: changeHistory?.entryDate,
      departureDate: changeHistory?.departureDate,
      creationDate: changeHistory?.creationDate,
      receivableValue: changeHistory?.receivableValue,
      moneyPaid: changeHistory?.moneyPaid,
      remainigMoney: changeHistory?.remainigMoney,
      serviceState: changeHistory?.serviceState,
    };
  }
}
