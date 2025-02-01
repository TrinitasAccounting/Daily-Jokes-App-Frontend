

import { useOutletContext } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'



export default function DeleteJokeConfirmationPopUp({ selectedJoke }) {


    const { openDeleteJokeConfirmationPopUp, setOpenDeleteJokeConfirmationPopUp, deleteJoke } = useOutletContext();




    return (
        <>
            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start z-40 sm:p-6"
            >
                <div className="flex  w-full flex-col items-center space-y-4 z-40 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition show={openDeleteJokeConfirmationPopUp}>
                        <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                            <div className="p-4">
                                <div className="flex items-start">

                                    <div className="ml-3 w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
                                        <p className="mt-1 text-sm text-gray-500">Sent you an invite to connect.</p>
                                        <div className="mt-4 flex">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    deleteJoke(selectedJoke.jokeId)
                                                    setOpenDeleteJokeConfirmationPopUp(false)
                                                }}
                                                className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Accept
                                            </button>
                                            <button

                                                onClick={() => setOpenDeleteJokeConfirmationPopUp(false)}
                                                className="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => { setOpenDeleteJokeConfirmationPopUp(false) }}
                                            className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon aria-hidden="true" className="size-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>


        </>
    )
}
