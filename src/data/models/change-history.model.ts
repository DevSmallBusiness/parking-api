import { model, Schema } from "mongoose";

const changeHistorySchema = new Schema(
  {
    typeService: {
      type: String,
      required: [true, "Type service is required"],
    },
    typeVehicle: {
      type: String,
      required: [true, "Type vehicle is required"],
    },
    plate: {
      type: String,
      required: [true, "plate is required"],
    },
    ownerName: {
      type: String,
      required: [true, "Owner name is required"],
    },
    ownerNumber: {
      type: String,
      required: [true, "Owner number is required"],
    },
    entryDate: { type: Date, default: new Date() },
    departureDate: { type: Date, default: new Date() },
    creationDate: { type: Date, default: new Date() },
    receivableValue: {
      type: String,
      required: [true, "Receivable value is required"],
    },
    moneyPaid: {
      type: String,
      required: [true, "Money paid is required"],
    },
    remainigMoney: {
      type: String,
      required: [true, "Remainig money is required"],
    },
    serviceState: {
      type: String,
      required: [true, "Service state is required"],
    },
  },
  { collection: "ChangesHistory" }
);

export const changeHistoryModel = model("ChangesHistory", changeHistorySchema);