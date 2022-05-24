import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom/client';
import { rootReducer } from './redux/rootReducer';
import { sagaWatcher } from './redux/saga/sagas';
import App from './App';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
