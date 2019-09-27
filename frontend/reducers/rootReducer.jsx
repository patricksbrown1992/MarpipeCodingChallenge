import { combineReducers } from 'redux';
import entitiesReducer from './entities/entitiesReducer';
import sessionReducer from './sessionReducer';
import errorsReducer from './errors/sessionErrorsReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer

});

export default rootReducer;