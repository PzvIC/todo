import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import { Activity } from "../types"
import { ActivityActions, ActivityState } from "../reducers/listReducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>
  state: ActivityState
}

const initialState = {
  id: uuidv4(),
  name: '',
  description: '',
  status: true
}

export default function Form({dispatch, state} : FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState)

  useEffect(() => {
    if(state.activeId){
      setActivity(
        state.activities.filter(act => act.id === state.activeId)[0]
      )
    }
  }, [state.activeId])

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({type: 'save-activity', payload: { newActivity : activity}})

    setActivity({
      ...initialState,
      id: uuidv4()
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setActivity({
      ...activity,
      [e.target.id]: e.target.value
    })
  }

  const isValid = () => {
    const {name, description} = activity

    return name.trim() !== '' && description.trim() !== ''
  }

  return (
    <form className=' max-w-full m-10 p-10 rounded-lg shadow-2xl space-y-6 bg-gray-600'
        onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className='block text-white uppercase font-extrabold text-lg'>
            Name:
          </label>
          <input
            className='p-3 w-full rounded-lg focus:outline-none'
            type="text"
            id="name"
            name="name"
            placeholder="Name of the project"
            value={activity.name}
            onChange={handleChange}
          />
          <label htmlFor="description" className='block text-white uppercase font-extrabold text-lg mt-5'>
            Description:
          </label>
          <textarea 
            name="description" 
            id="description" 
            rows={4} 
            cols={40} 
            maxLength={150} 
            className='p-3 w-full rounded-lg focus:outline-none resize-none'
            placeholder="Describe the project here"
            value={activity.description}
            onChange={handleChange}
          >
          </textarea>
        </div>

        <input
          type='submit'
          value='Enter'
          className='cursor-pointer bg-slate-800 hover:bg-slate-900 text-white font-extrabold w-full p-2 rounded-lg uppercase shadow disabled:opacity-20 disabled:cursor-not-allowed'
          disabled={!isValid()}
        />
      </form>
  )
}
