export enum TypeServiceEnum {
  hours = "POR_HORA",
  day = "POR_DIA",
  month = "POR_MES",
}

export const toTypeServiceEnum = (key: string): TypeServiceEnum => {
  const options = new Map();
  options.set("POR_HORA", TypeServiceEnum.hours);
  options.set("POR_DIA", TypeServiceEnum.day);
  options.set("POR_MES", TypeServiceEnum.month);

  return options.get(key?.toString().toLowerCase());
};

export const fromTypeServiceEnum = (key: TypeServiceEnum): string => {
  const options = new Map();
  options.set(TypeServiceEnum.hours, "POR_HORA");
  options.set(TypeServiceEnum.day, "POR_DIA");
  options.set(TypeServiceEnum.month, "POR_MES");

  return options.get(key);
};
