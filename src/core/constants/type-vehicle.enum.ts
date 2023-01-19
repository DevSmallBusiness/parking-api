export enum TypeVehicleEnum {
  car = "CARRO",
  motorcycle = "MOTO",
}

export const toTypeVehicleEnum = (key: string): TypeVehicleEnum => {
  const options = new Map();
  options.set("CARRO", TypeVehicleEnum.car);
  options.set("MOTO", TypeVehicleEnum.motorcycle);

  return options.get(key?.toString().toLowerCase());
};

export const fromTypeVehicleEnum = (key: TypeVehicleEnum): string => {
  const options = new Map();
  options.set(TypeVehicleEnum.car, "CARRO");
  options.set(TypeVehicleEnum.motorcycle, "MOTO");

  return options.get(key);
};
