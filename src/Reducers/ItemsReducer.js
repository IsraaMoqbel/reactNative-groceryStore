import { combineReducers } from 'redux';

const INITIAL_STATE= {
    current:[
        ["تفاح","image1","8"],
        ["أفوكادو","image2","4"],
    ],
    possible:[
         ["تفاح","image1","8"],
        ["أفوكادو","image2","4"],
        ["طماطم","image1","8"],
        ["خيار","image2","4"],
        ["كوسا","image2","4"],
        ["باذنجان","image2","4"]
        ,["بطاطا","image2","4"]
    ]
}

export const itemsReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            state = Object.assign({}, state);
            const {current,possible} = state;
            const addedItem = possible.splice(action.payload,1);
            current.push(addedItem);
            const newState = {...state,current,possible};
            return  newState
        default:
            return state

    }
}

const Reducers = combineReducers({
itemsReducer
})


export default Reducers;