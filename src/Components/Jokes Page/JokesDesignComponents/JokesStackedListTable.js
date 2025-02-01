

import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { Oval } from 'react-loading-icons';

import { Menu, MenuItem, MenuItems } from '@headlessui/react'
// import { MenuButton, } from '@headlessui/react'
// import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

import ViewPunchLinePopUp from './ViewPunchLinePopUp';
import EditJokePopUp from './EditJokePopUp';
import DeleteJokeConfirmationPopUp from './DeleteJokeConfirmationPopUp';








export default function JokesStackedListTable() {


    const { allJokes, currentDate, updateJokePut, openViewPunchLinePopUp,
        setOpenViewPunchLinePopUp, openEditJokePopUp, setOpenEditJokePopUp,
        openDeleteJokeConfirmationPopUp, setOpenDeleteJokeConfirmationPopUp
    } = useOutletContext();

    const [selectedJoke, setSelectedJoke] = useState({
        jokeId: 0,
        answer: "",
        dateCreated: currentDate,
        numberOfLikes: 1,
        question: "",
        username: ""
    })



    // Functions to update state as a particular joke Edit, Like, or Delete is selected
    const handleClickedSelectionOfJoke = (selected) => {
        let newJokeSelected = {
            jokeId: selected.jokeId,
            answer: selected.answer,
            dateCreated: selected.dateCreated,
            numberOfLikes: selected.numberOfLikes,
            question: selected.question,
            username: selected.username
        }

        setSelectedJoke(newJokeSelected)
    }


    // Updating the joke when Like button is clicked______
    const [likes, setLikes] = useState([])

    function addingRemovingJokeIdToLikeList(id) {
        if (likes.includes(id)) {
            setLikes(likes.filter((jokeId) => {
                return (jokeId !== id)
            }))
        }
        else {
            setLikes(likes.concat(id))
        }
    }


    // Function that will increment the likes and patch with the updated number of likes and a brand new object
    function putAndUpdateLikesNumber(fullJoke) {
        let newNumberOfLikes = 0;
        if (likes.includes(fullJoke.jokeId)) {
            newNumberOfLikes = fullJoke.numberOfLikes - 1
        }
        else {
            newNumberOfLikes = fullJoke.numberOfLikes + 1
        }

        let newJokeObject = {
            jokeId: fullJoke.jokeId,
            answer: fullJoke.answer,
            dateCreated: fullJoke.dateCreated,
            numberOfLikes: newNumberOfLikes,
            question: fullJoke.question,
            username: fullJoke.username
        }

        updateJokePut(newJokeObject);
    }





    return (

        <div className=" overflow-scroll overflow-x-hidden h-screen ">
            {allJokes.length < 1 ?

                // Loading screen component for when the data hasn't loaded yet_____(Expand the Div)
                <div className="grid grid-cols-1 ">
                    <div>
                        <h1 className="text-gray-100 flex items-center justify-center col-col-span-1  my-12"><Oval stroke="#fff" width={40} height={40} /></h1>
                    </div>
                    <div>
                        <h1 className="text-gray-100 text-center sm:text-3xl col-col-span-1 my-12">Loading Jokes From Our Database</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-100 text-center sm:text-lg col-col-span-1 my-12">Typical load time is 5 seconds, as we are using an affordable development IIS server.
                            If longer please refresh the page (may require multiple), will only require this the first time it loads the data. May require multiple refreshes, as our server is on a non-production free plan.
                            Meaning it shuts down when not used for 20 minutes.</h1>
                    </div>
                    <div>
                        <div className="text-gray-100 col-col-span-1  my-12"></div>
                    </div>
                </div>

                :

                // This is the jokes list mapped through and output in list format
                <div className=" ">


                    {/* The mapped through list for each joke, buttons, likes, etc________________________ */}
                    <ul className=" divide-y divide-gray-100 ">
                        {allJokes.map((joke) => (
                            <li key={joke.jokeId} className="flex items-center justify-between gap-x-6 py-5 ">
                                <div className="min-w-0 ">
                                    <div className="flex items-start gap-x-3">
                                        <p className="text-sm/12 font-semibold  text-gray-100">{joke.question}</p>

                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-400">
                                        <p className="whitespace-nowrap">
                                            Submitted: {joke.dateCreated}
                                        </p>
                                        <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                                            <circle r={1} cx={1} cy={1} />
                                        </svg>
                                        <p className="truncate"> {joke.username}</p>
                                    </div>
                                </div>

                                {/* Punch Line Pop Up section */}
                                <div className="flex flex-none items-center gap-x-4">
                                    <button
                                        onClick={() => {
                                            setOpenViewPunchLinePopUp(!openViewPunchLinePopUp)
                                            handleClickedSelectionOfJoke(joke)
                                        }}
                                        className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                                    >
                                        View Punch Line<span className="sr-only">, {joke.jokeId}</span>
                                    </button>



                                    {/* Like and count feature________________________ */}
                                    {/* 🤍❤️ */}
                                    {/* This is two separate buttons and not just class filtering because the symbol wont let me change its background color */}
                                    {likes.includes(joke.jokeId) ?
                                        <button
                                            className="bg-red-400 px-1 rounded-md"
                                            onClick={
                                                () => {
                                                    handleClickedSelectionOfJoke(joke)
                                                    addingRemovingJokeIdToLikeList(joke.jokeId)
                                                    putAndUpdateLikesNumber(joke)
                                                }
                                            }
                                        >
                                            ❤️Like
                                        </button>

                                        :

                                        <button
                                            className="bg-yellow-50 px-1 rounded-md"
                                            onClick={
                                                () => {
                                                    handleClickedSelectionOfJoke(joke)
                                                    addingRemovingJokeIdToLikeList(joke.jokeId)
                                                    putAndUpdateLikesNumber(joke)
                                                }
                                            }
                                        >
                                            🤍Like
                                        </button>
                                    }

                                    <span className='text-gray-400'>{joke.numberOfLikes}</span>
                                    <div className='grid grid-cols-1'>
                                        {/* The actual component is at the bottom of this .js file, being rendered in the foreground */}
                                        <button
                                            onClick={() => {
                                                handleClickedSelectionOfJoke(joke)
                                                setOpenEditJokePopUp(true)
                                            }}
                                            className="rounded bg-indigo-50 px-1 py-1 text-[10px] font-semibold text-amber-900 shadow-sm hover:bg-indigo-100"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                setOpenDeleteJokeConfirmationPopUp(true)
                                                handleClickedSelectionOfJoke(joke)
                                            }}
                                            className="rounded bg-red-700 my-1 px-1 py-1 text-[10px] font-semibold text-gray-50 shadow-sm hover:bg-indigo-100"
                                        >
                                            Delete
                                        </button>

                                    </div>



                                    {/* This is the small 3 dots dropdown by the view punch line __________________________ */}
                                    <Menu as="div" className="relative flex-none">
                                        {/* Uncomment the below out to show the menu button again, this will allow us to delete from the database. 
                                        Once I have set up user authentication and authorization then we can control this by user type
                                        ________________________________________ */}
                                        {/* <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                            <span className="sr-only">Open options</span>
                                            <EllipsisVerticalIcon aria-hidden="true" className="size-7" />
                                        </MenuButton> */}
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            {/* <MenuItem>
                                                <a
                                                    onClick={() => handleClickedSelectionOfJoke(joke)}
                                                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                                >
                                                    Edit<span className="sr-only">, {joke.jokeId}</span>
                                                </a>
                                            </MenuItem> */}


                                            {/* Delete button on the drop down menu */}
                                            <MenuItem>
                                                {/* <button
                                                    onClick={() => deleteJoke(joke.jokeId)}
                                                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                                >
                                                    Delete<span className="sr-only">, {joke.jokeId}</span>
                                                </button> */}
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>

                            </li>
                        ))}
                    </ul>




                    {/* We are showing the view Punch line, edit joke pop up, and the delete joke confirmation
                     when the button is clicked, with this div showing in the foreground */}
                    {openViewPunchLinePopUp ?
                        <div>
                            <ViewPunchLinePopUp selectedJoke={selectedJoke} />
                        </div>
                        :
                        <>
                        </>
                    }
                    {openEditJokePopUp ?
                        <div>
                            <EditJokePopUp selectedJoke={selectedJoke} />
                        </div>
                        :
                        <>
                        </>
                    }
                    {openDeleteJokeConfirmationPopUp ?
                        <div>
                            <DeleteJokeConfirmationPopUp selectedJoke={selectedJoke} />
                        </div>
                        :
                        <>
                        </>
                    }

                </div>
            }
        </div>
    )
}
