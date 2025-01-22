

import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function JokesStackedListTable() {


    const { allJokes, currentDate, deleteJoke } = useOutletContext();
    const [selectedJoke, setSelectedJoke] = useState({
        answer: "",
        dateCreated: currentDate,
        numberOfLikes: 1,
        question: "",
        username: ""
    })


    // Functions to update state as a particular joke Edit or Delete is selected
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






    return (
        <ul role="list" className="divide-y divide-gray-100">
            {allJokes.map((joke) => (
                <li key={joke.jokeId} className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0">
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
                    <div className="flex flex-none items-center gap-x-4">
                        <a
                            // href={project.href}
                            className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                        >
                            View Punch Line<span className="sr-only">, {joke.jokeId}</span>
                        </a>

                        {/* Like and count feature________________________ */}
                        <span>❤️🤍</span>
                        <span className='text-gray-400'>{joke.numberOfLikes}</span>

                        {/* This is the small 3 dots dropdown by the view punch line __________________________ */}
                        <Menu as="div" className="relative flex-none">
                            <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                <span className="sr-only">Open options</span>
                                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a

                                        className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                    >
                                        Edit<span className="sr-only">, {joke.jokeId}</span>
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={() => deleteJoke(joke.jokeId)}
                                        className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                    >
                                        Delete<span className="sr-only">, {joke.jokeId}</span>
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </li>
            ))}
        </ul>
    )
}
