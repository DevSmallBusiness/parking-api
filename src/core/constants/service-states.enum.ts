export enum ServiceStatesEnum {
  defeated = "VENCIDO",
  outstanding = "PENDIENTE",
  paid = "PAGADO",
}

export const toServiceStatesEnum = (key: string): ServiceStatesEnum => {
  const options = new Map();
  options.set("VENCIDO", ServiceStatesEnum.defeated);
  options.set("PENDIENTE", ServiceStatesEnum.outstanding);
  options.set("PAGADO", ServiceStatesEnum.paid);

  return options.get(key);
};

export const fromServiceStatesEnum = (key: ServiceStatesEnum): string => {
  const options = new Map();
  options.set(ServiceStatesEnum.defeated, "VENCIDO");
  options.set(ServiceStatesEnum.outstanding, "PENDIENTE");
  options.set(ServiceStatesEnum.paid, "PAGADO");

  return options.get(key);
};
