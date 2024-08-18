import { Dialog, Transition } from '@headlessui/react';
import { Fragment, Dispatch } from 'react';
import { ActivityState, ActivityActions } from '../reducers/listReducer';

type ModalProps = {
    state : ActivityState,
    dispatch : Dispatch<ActivityActions>
}

export default function Modal({state, dispatch} : ModalProps) {

  return (
    <>
      <Transition appear show={state.modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => dispatch({type: "show-modal", payload: {modal : false}})}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-600 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-white text-4xl font-bold my-5">
                      Created by: <span className='font-extrabold'>Carlos P.</span>
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-bold my-5">
                    Simple to-do list: add a project name and description, edit or delete projects. Responsive web design, local storage, useReducer, useEffect
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-bold my-5">
                    
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-bold my-5">
                    Html
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-bold my-5">
                    TailwindCSS
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-bold my-5">
                    React
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-bold my-5">
                    JavaScript-TypeScript
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}