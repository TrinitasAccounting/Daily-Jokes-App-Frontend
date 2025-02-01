

import { useOutletContext } from 'react-router-dom'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'





export default function EditJokePopUp({ selectedJoke }) {

    const { openEditJokePopUp, setOpenEditJokePopUp, updateJokePut } = useOutletContext();
    const [editJokeFormData, setEditJokeFormData] = useState({
        jokeId: selectedJoke.jokeId,
        answer: selectedJoke.answer,
        dateCreated: selectedJoke.dateCreated,
        numberOfLikes: selectedJoke.numberOfLikes,
        question: selectedJoke.question,
        username: selectedJoke.username
    })



    // Updates the edit joke form as a user types into the boxes
    function handleFormUpdateOfJoke(event) {
        setEditJokeFormData({ ...editJokeFormData, [event.target.name]: event.target.value })
    }


    // Function that will call the PUT and pass in the edit joke form data
    function handleSubmitOfEdittedJoke(updateJoke) {
        updateJokePut(updateJoke)
    }








    return (
        <Dialog open={openEditJokePopUp} onClose={setOpenEditJokePopUp} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">



                            {/* Edit joke form with the data and the input boxes */}
                            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-3">
                                <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                                Author (Read Only)
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex items-center rounded-md bg-gray-200 pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        value={editJokeFormData.username}
                                                        readOnly={true}
                                                        type='readOnly'
                                                        className="block min-w-0 grow bg-gray-200 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                                Joke Body / Question
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="question"
                                                    name="question"
                                                    value={editJokeFormData.question}
                                                    onChange={handleFormUpdateOfJoke}
                                                    rows={3}
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                                Punch Line
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="answer"
                                                    name="answer"
                                                    value={editJokeFormData.answer}
                                                    onChange={handleFormUpdateOfJoke}
                                                    rows={2}
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Form submission buttons with the onClick handlers */}
                                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpenEditJokePopUp(false)
                                        }}
                                        className="text-sm/6 font-semibold text-gray-900">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            setOpenEditJokePopUp(false)
                                            handleSubmitOfEdittedJoke(editJokeFormData)
                                        }}
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Submit Changes
                                    </button>
                                </div>
                            </form>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
