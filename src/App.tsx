import { ReactElement, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { initialState, reducer } from './store/reducer';
import GlobalContext from './store/GlobalContext';
import getGlobalContext from './store/getGlobalContext';

import HomeView from './views/HomeView';

function App(): ReactElement {
  // Context
  const [state] = useReducer(reducer, initialState);
  const globalContext = getGlobalContext();

  return (
    <GlobalContext.Provider value={{ state, context: globalContext }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
        </Switch>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
