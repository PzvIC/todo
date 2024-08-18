import { useEffect, useReducer } from "react"
import { activityReducer, initialState } from "./reducers/listReducer"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import Modal from "./components/Modal"
import { Bars3Icon } from "@heroicons/react/24/outline"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <main className=" bg-neutral-200 h-screen">
      <button >
        <Bars3Icon
          onClick={() => dispatch({type: "show-modal", payload: {modal: true}})}
          className="h-8 w-8 text-black"
        />
      </button>
      <div className="grid md:grid-cols-2">

        <section>
          <h1 className=" text-5xl font-bold pt-4 uppercase text-gray-600 text-center">To-do</h1>
          <Form
            dispatch={dispatch}
            state={state}
          />
        </section>

        <section>
          <h1 className=" text-5xl font-bold pt-4 uppercase text-gray-600 text-center">My Projects</h1>
          <ActivityList
            activities={state.activities}
            dispatch={dispatch}
          />
        </section>

        <Modal 
          dispatch={dispatch}
          state={state}
        />

      </div>
    </main>
  )
}

export default App
