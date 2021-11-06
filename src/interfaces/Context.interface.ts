export interface ContextInterface {
  getSpace?(): Promise<StorageInterface[]>,
  getProducts?(): Promise<void>,
  getStock?(): Promise<StockInterface[]>,
}

export interface ReducerActionInterface {
  type: string;
  data?: {
    attribute?: string;
  };
}

export interface StorageInterface {
  _id: string;
  usedSpace: number;
  totalSpace: number;
  recepcion: boolean;
  despacho: boolean;
  pulmon: boolean;
  cocina: boolean;
  grupo: number;
}

export interface ProductInterface {
  _id: string;
  sku: string;
  almacen: string;
  costo: number;
  grupo: number;
  despachado: boolean;
  precio: number;
  direccion: string;
  oc: null;
  vencimiento: number;
}

export interface StockInterface {
  sku: string;
  total: number;
}
