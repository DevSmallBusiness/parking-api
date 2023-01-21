export enum TypeServiceEnum {
  hours = "Por Hora",
  day = "Por Dia",
  month = "Por Mes",
}

export const toTypeServiceEnum = (key: string): TypeServiceEnum => {
  const options = new Map();
  options.set("Por Hora", TypeServiceEnum.hours);
  options.set("Por Dia", TypeServiceEnum.day);
  options.set("Por Mes", TypeServiceEnum.month);

  return options.get(key);
};

export const fromTypeServiceEnum = (key: TypeServiceEnum): string => {
  const options = new Map();
  options.set(TypeServiceEnum.hours, "Por Hora");
  options.set(TypeServiceEnum.day, "Por Dia");
  options.set(TypeServiceEnum.month, "Por Mes");

  return options.get(key);
};
