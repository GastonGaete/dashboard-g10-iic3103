import {
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Doughnut, Bar } from 'react-chartjs-2';

import GlobalContext from '../store/GlobalContext';

import {
  ContextInterface,
  StockInterface,
  StorageInterface,
} from '../interfaces';

import '../styles/HomeViewStyles.scss';

const labels = [
  'Usado',
  'Libre',
];

const colorsBar = ['rgb(0, 0, 255)'];
const colorsDonut = ['rgb(255, 0, 0)','rgb(0, 255, 0)']

const data = (labels: string[], quantity: number[], colors: string[]) => ({
  labels,
  datasets: [{
    label: 'Cantidad',
    backgroundColor: colors,
    borderColor: colors,
    data: quantity,
  }]
});


function HomeView(): ReactElement {
  const { context } : { context: ContextInterface } = useContext(GlobalContext);
  const { getStock, getSpace } = context;

  const [stocks, setStocks] = useState<StockInterface[]>([]);
  const [storages, setStorages] = useState<StorageInterface[]>([]);

  useEffect(() => {
    getStock()
      .then((res) => {
        setStocks(res);
      })
      .catch(() => {});
    getSpace()
      .then((res) => {
        setStorages(res);
      })
      .catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function titleGraph(storage: StorageInterface): string {
    if (storage.cocina) return 'Cocina';
    if (storage.despacho) return 'Despacho';
    if (storage.pulmon) return 'Pulmon';
    if (storage.recepcion) return 'Recepcion';
    return 'General';
  }

  return (
    <div className="home-view-container">
      <p className="title">
        Stock de productos
      </p>
      <div className="bar">
        <Bar data={data(stocks.map((stock) => stock.sku), stocks.map((stock) => stock.total), colorsBar)} />
      </div>
      <p className="title">
        Ocupación de bodegas
      </p>
      <div className="donuts-container">
        {storages.map((storage) => (
          <div
            key={storage._id}
            className="donut"
          >
            <p className="label">
              {titleGraph(storage)}
            </p>
            <Doughnut data={data(labels, [storage.usedSpace, (storage.totalSpace - storage.usedSpace)], colorsDonut)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeView;
