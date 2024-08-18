import { Activity } from "../types";

export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity : Activity}} |
    {type: 'set-activeId', payload: {id : string}} |
    {type: 'delete-activity', payload: {id : string}} |
    {type: 'show-modal', payload: {modal: boolean}}


export type ActivityState = {
    activities : Activity[],
    activeId : string,
    modal: boolean
}

const localStorageData = () : Activity[] => {
    const data = localStorage.getItem('activities')
    
    return data ? JSON.parse(data) : []
}

export const initialState : ActivityState = {
    activities: localStorageData(),
    activeId: '',
    modal: true
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        let tempActivities: Activity[] = []

        if(state.activeId){
            //logic to update an existing activity
            tempActivities = state.activities.map( act => act.id === state.activeId ? action.payload.newActivity : act)
        }else{
            tempActivities = [...state.activities, action.payload.newActivity]
        }   
        return{
            ...state,
            activities: tempActivities,
            activeId: ''
        }
    }

    if(action.type === 'set-activeId'){
        return{
            ...state,
            activeId : action.payload.id
        }
    }

    if(action.type === 'delete-activity'){
        return{
            ...state,
            activities : state.activities.filter(act => act.id !== action.payload.id)
        }
    }

    if(action.type === 'show-modal'){
        return{
            ...state,
            modal: action.payload.modal
        }
    }

    return state
}