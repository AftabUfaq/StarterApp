import { GET_STATUS} from '../types';
const initialState = {
    status:[
        {
            "module_status_id": "902196",
            "module_status_name": "Draft",
            "module_id": "52"
        },
        {
            "module_status_id": "903927",
            "module_status_name": "Draft",
            "module_id": "54"
        },
        {
            "module_status_id": "902197",
            "module_status_name": "Submitted",
            "module_id": "52"
        },
        {
            "module_status_id": "903060",
            "module_status_name": "Submitted",
            "module_id": "54"
        }
    ]
};
const StatusReducer = (state = initialState, action) => {
  
    switch(action.type) {
        case GET_STATUS:
            return {
                ...state,
                status:action.payload,
            };
        default:
            return state;
        }
    }
export default StatusReducer;