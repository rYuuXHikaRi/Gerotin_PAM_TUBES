import {createStore, combineReducers} from 'redux';
import alarmReducer from '../reducers/alarmReducers';

const rootReducer = combineReducers({
  alarms: alarmReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;