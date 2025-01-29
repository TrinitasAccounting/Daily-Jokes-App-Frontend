


import { useOutletContext } from 'react-router-dom';



import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'





export default function AddNewJokeForm() {

    // The state to open and close this pop up, passed from top parent to children using Outlet
    const { openAddNewJokePopUp, setOpenAddNewJokePopUp, allJokes, addNewJoke, currentDate } = useOutletContext();

    // console.log(allJokes);

    // Controlling the form functions and state built below________________________
    const [addNewJokeForm, setAddNewJokeForm] = useState({
        answer: "",
        dateCreated: currentDate,
        numberOfLikes: 1,
        question: "",
        username: ""
    })

    // updates the joke form when user is typing
    const handleChangeNewJokeForm = (event) => {
        setAddNewJokeForm({ ...addNewJokeForm, [event.target.name]: event.target.value })
    }

    // handles the submission and adding of the joke to the database, and closes the pop up box
    const handleFormSubmissionNewJoke = (event) => {
        event.preventDefault();
        addNewJoke(addNewJokeForm)

        setOpenAddNewJokePopUp(!openAddNewJokePopUp)
    }






    return (
        <Dialog open={openAddNewJokePopUp} onClose={setOpenAddNewJokePopUp} className="relative z-10">

            <div className="fixed inset-0" />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1">


                                    {/* Header text at the top of the form*/}
                                    <div className="bg-gray-50 px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between space-x-3">
                                            <div className="space-y-1">
                                                <DialogTitle className=" text-xl font-semibold text-gray-900">Add Your Top Jokes</DialogTitle>
                                                <p className="text-sm text-gray-500">
                                                    We highly encourage you to share your jokes with the world to enjoy.
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    See if you can add the highest liked joke on the leader board!!
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Our reputation matters a lot and only allow clean jokes (all jokes are reviewed before passing into our system)
                                                </p>

                                            </div>
                                            <div className="flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpenAddNewJokePopUp(false)}
                                                    className="relative text-gray-400 hover:text-gray-500"
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>



                                    {/* Joke input boxes the user types into*/}
                                    <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                                        {/* Author name */}
                                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                            <div>
                                                <label htmlFor="project-name" className="block text-sm/6 font-medium text-gray-900 sm:mt-1.5">
                                                    Name/Username
                                                </label>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <input
                                                    id="username"
                                                    name="username"
                                                    value={addNewJokeForm.username}
                                                    onChange={handleChangeNewJokeForm}
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        {/* Joke Body/Question */}
                                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                            <div>
                                                <label
                                                    htmlFor="project-description"
                                                    className="block text-sm/6 font-medium text-gray-900 sm:mt-1.5"
                                                >
                                                    Body of Joke
                                                </label>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <textarea
                                                    id="question"
                                                    name="question" value={addNewJokeForm.question}
                                                    onChange={handleChangeNewJokeForm}
                                                    rows={3}
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                                                />
                                            </div>
                                        </div>

                                        {/* Joke Punch Line/Answer */}
                                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                            <div>
                                                <label
                                                    htmlFor="project-description"
                                                    className="block text-sm/6 font-medium text-gray-900 sm:mt-1.5"
                                                >
                                                    Punch Line
                                                </label>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <textarea
                                                    id="answer"
                                                    name="answer"
                                                    value={addNewJokeForm.answer}
                                                    onChange={handleChangeNewJokeForm}
                                                    rows={2}
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* Action buttons at the bottom of the form to cancel or submit */}
                                <div className="shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <div className="flex justify-end space-x-3">
                                        <button
                                            type="button"
                                            onClick={() => setOpenAddNewJokePopUp(false)}
                                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleFormSubmissionNewJoke}
                                            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
