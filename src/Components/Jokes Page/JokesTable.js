
import JokesTableHeader from "./JokesTableHeader"
import { useOutletContext } from "react-router-dom"
import { useState } from "react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function JokesTable() {

    const { allJokes, currentDate } = useOutletContext();

    const [selectedJoke, setSelectedJoke] = useState({
        answer: "",
        dateCreated: currentDate,
        numberOfLikes: 1,
        question: "",
        username: ""
    })


    // Functions to update state as a particular joke is selected
    const handleClickedSelectionOfJoke = (selected) => {
        let newJokeSelected = {
            answer: selected.answer,
            dateCreated: currentDate,
            numberOfLikes: selected.numberOfLikes,
            question: selected.question,
            username: selected.username
        }

        setSelectedJoke(newJokeSelected)
    }


    console.log(selectedJoke);





    return (

        <>
            {/* This is the top line header of the jokes table */}
            <JokesTableHeader />

            {/* Here is the section where our Add new jokes button is located */}
            <div className="bg-gray-900 mx-auto max-w-7xl sm:px-6 lg:px-8  border-gray-200 rounded-md sm:mt-10">{/* Content goes here */}

                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        {/* <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                        </p>
                        </div> */}
                        {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Add user
                        </button>
                        </div> */}
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className="min-w-full border-separate border-spacing-0 rounded-xl">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 border-b border-gray-300 bg-gray-600 py-3.5 pl-4 pr-3 text-center text-md font-semibold text-gray-200 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                            >
                                                Date Created
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-600 px-3 py-3.5 text-left text-md font-semibold text-gray-200 backdrop-blur backdrop-filter sm:table-cell"
                                            >
                                                Question
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-600 px-3 py-3.5 text-center text-md font-semibold text-gray-200 backdrop-blur backdrop-filter lg:table-cell"
                                            >
                                                Author
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 border-b border-gray-300 bg-gray-600 px-3 py-3.5 text-center text-md font-semibold text-gray-200 backdrop-blur backdrop-filter"
                                            >
                                                # of Likes
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 border-b border-gray-300 bg-gray-600 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                            >
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    {allJokes.length < 1 ?
                                        <div>
                                            <h1 className="text-gray-100">Loading the jokes from our database, </h1>
                                            <h1 className="text-gray-100">this could take up to 10 seconds </h1>

                                        </div>

                                        :




                                        <tbody>
                                            {allJokes.map((joke, personIdx) => (
                                                <tr key={joke.jokeId}>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== joke.length - 1 ? 'border-b border-gray-700' : '',
                                                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center font-medium text-gray-200 sm:pl-6 lg:pl-8',
                                                        )}
                                                    >
                                                        {joke.dateCreated}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== joke.length - 1 ? 'border-b border-gray-700' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-200 sm:table-cell',
                                                        )}
                                                    >
                                                        {joke.question}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== joke.length - 1 ? 'border-b border-gray-700' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-center text-gray-200 lg:table-cell',
                                                        )}
                                                    >
                                                        {joke.username}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== joke.length - 1 ? 'border-b border-gray-700' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-center text-gray-200',
                                                        )}
                                                    >
                                                        {joke.numberOfLikes}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== joke.length - 1 ? 'border-b border-gray-700' : '',
                                                            'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8',
                                                        )}
                                                    >
                                                        <button

                                                            onClick={() => handleClickedSelectionOfJoke(joke)}
                                                            className="text-indigo-600 hover:text-indigo-900">
                                                            View Punch Line<span className="sr-only">, {joke.jokeId}</span>
                                                        </button>
                                                        {/* <button
                                                            type="button"
                                                            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                        >
                                                            Delete
                                                        </button> */}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
