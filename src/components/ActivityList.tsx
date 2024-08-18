import { ActivityActions } from "../reducers/listReducer"
import { Activity } from "../types"
import { Dispatch } from "react"

type ActivityListProps = {
  activities: Activity[],
  dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({ activities, dispatch }: ActivityListProps) {
  return (
    <>
      {activities.length === 0 ?
        <h1 className=" w-auto m-10 p-5 rounded-lg shadow-2xl space-y-6 bg-gray-600 items-center uppercase text-white font-extrabold text-lg">
          No projects yet...</h1> :
        activities.map(activity => (
          <div key={activity.id} className=" max-w-full m-10 p-5 rounded-lg shadow-2xl space-y-6 bg-gray-600 items-center relative">
            <div className=" w-full">
              <h1 className=" text-3xl  text-white uppercase overflow-hidden whitespace-nowrap text-ellipsis">{activity.name}</h1>
              <p className=" bg-white rounded-lg p-2 mt-5 text-lg font-semibold text-gray-600 w-full overflow-hidden whitespace-nowrap text-ellipsis">{activity.description}</p>
            </div>
            <div className=" flex gap-5 items-center">
              <input
                type='submit'
                value='Edit'
                className='cursor-pointer bg-blue-800 hover:bg-blue-900 text-white font-extrabold w-full p-2 rounded-lg uppercase shadow'
                onClick={() => dispatch({type: "set-activeId", payload: {id: activity.id}})}
              />
              <input
                type='submit'
                value='Delete'
                className='cursor-pointer bg-red-800 hover:bg-red-900 text-white font-extrabold w-full p-2 rounded-lg uppercase shadow'
                onClick={() => dispatch({type: "delete-activity", payload: {id: activity.id}})}
              />
            </div>
          </div>
        ))}
    </>
  )
}
