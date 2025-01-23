
import { useOutletContext } from "react-router-dom"

import AddNewJokeForm from "../AddNewJokeFrom";


export default function JokesStackedListHeader() {


    const { openAddNewJokePopUp, setOpenAddNewJokePopUp } = useOutletContext();



    return (
        <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold text-gray-300">Browse Jokes</h3>
            <div className="mt-3 sm:ml-4 sm:mt-0">
                <button
                    onClick={() => setOpenAddNewJokePopUp(!openAddNewJokePopUp)}
                    className="inline-flex items-center rounded-md bg-amber-300 px-3 py-2 text-sm font-semibold text-gray-950 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    + New Joke
                </button>
            </div>
            {openAddNewJokePopUp ? <AddNewJokeForm /> : <></>}
        </div>
    )
}
