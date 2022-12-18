import {createStore, combineReducers} from 'redux';
import alarmReducer from '../reducer/alarmReducer';

const rootReducer = combineReducers({
  alarms: alarmReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;