

import { useOutletContext } from "react-router-dom"


const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]



export default function TopUsersRankedList() {

    const { allUsers, } = useOutletContext();

    const getRandomNumber = (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min)
    }


    return (
        <>

            <div className="grid grid-cols-1 ">

                <div className="col-span-1  my-10">
                    <h1></h1>
                </div>
                {/* <div className="col-span-1  my-10">
                    <h1></h1>
                </div> */}
                <div className="col-span-1 text-center text-4xl text-gray-50 my-10 ">
                    <h1>Coming Soon</h1>
                </div>
            </div>
            <div className="opacity-25 h-screen">

                <ul role="list" className="divide-y divide-gray-800">
                    {allUsers.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                {/* <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-800" /> */}
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm/12 font-semibold text-white">{person.username}</p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{person.firstName}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

                                <p className="text-sm/12 text-white">Total Likes: {getRandomNumber(23, 78)}</p>
                                {/* {person.lastSeen ? (
                                    <p className="mt-1 text-xs/5 text-gray-400">
                                        Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="size-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs/5 text-gray-400">Online</p>
                                    </div>
                                )} */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
