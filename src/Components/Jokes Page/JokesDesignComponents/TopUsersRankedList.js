

import { useOutletContext } from "react-router-dom"





export default function TopUsersRankedList() {

    const { allUsers, } = useOutletContext();

    const getRandomNumber = (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min)
    }




    return (
        <>

            <div className="grid grid-cols-1 ">

                <div className="col-span-1  my-10">
                    <div></div>
                </div>
                {/* <div className="col-span-1  my-10">
                    <h1></h1>
                </div> */}
                <div className="col-span-1 text-center text-4xl text-gray-50 my-10 ">
                    <h1>Coming Soon</h1>
                </div>
            </div>
            <div className="opacity-25 h-screen">

                <ul className="divide-y divide-gray-800">
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

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
