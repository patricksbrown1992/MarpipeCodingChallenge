import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import TagTriage from './tagTriageReducer';

const uiReducer = combineReducers({

    modal: modalReducer,
    triage: TagTriage

});
export default uiReducer;