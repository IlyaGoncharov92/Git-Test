import { applyMiddleware, createStore, Store } from 'redux';
import { ApplicationReducer } from './application/reducers';
import { composeMiddleware } from './common/middleware';
import createSagaMiddleware from 'redux-saga';
import { Saga1Watcher, ttt } from './application/sagas';

const tt = ttt;
const sagaMiddleware = createSagaMiddleware();

export const store: Store<IState> = createStore(
  ApplicationReducer,
  {message: 'Hello 123!'},
  composeMiddleware(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Saga1Watcher);