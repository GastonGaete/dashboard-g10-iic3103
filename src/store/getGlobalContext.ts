import axios from 'axios';
import { ContextInterface } from '../interfaces';

function GetGlobalContext(): ContextInterface {
  const globalContext = {
    getStock: async () => {
      const stock = await axios.request({
        method: 'GET',
        url: 'http://localhost:3000/stocks/',
      })
        .then(response => response.data)
        .catch(err => {
          console.log(err);
          throw err;
        });
      return stock;
    },
    getSpace: async () => {
      const space = await axios.request({
        method: 'GET',
        url: 'http://localhost:3000/almacenes/',
      })
        .then(response => response.data)
        .catch(err => {
          console.log(err);
          throw err;
        });
      return space;
    },

  };
  return globalContext;
}

export default GetGlobalContext;
