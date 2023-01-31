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
      type: Number,
    },
    moneyPaid: {
      type: Number,
    },
    remainigMoney: {
      type: Number,
    },
    serviceState: {
      type: String,
    },
  },
  { collection: "ChangesHistory" }
);

export const changeHistoryModel = model("ChangesHistory", changeHistorySchema);
