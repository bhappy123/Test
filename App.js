import React, {useEffect} from 'react';
import BottomTab from './src/BottomTab';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './src/reducer';

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <BottomTab />
    </Provider>
  );
};

export default App;
