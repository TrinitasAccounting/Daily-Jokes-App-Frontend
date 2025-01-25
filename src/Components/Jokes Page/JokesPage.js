
import { useOutletContext } from "react-router-dom";
import JokesTable from "./JokesTable";
import JokesStackedListTable from "./JokesDesignComponents/JokesStackedListTable";
import JokesStackedListHeader from "./JokesDesignComponents/JokesStackedListHeader";
import TopUsersRankedHeader from "./JokesDesignComponents/TopUsersRankedHeader";
import TopUsersRankedList from "./JokesDesignComponents/TopUsersRankedList";


function JokesPage() {

    const { allJokes } = useOutletContext();



    return (
        <div className="flex flex-col h-screen bg-slate-900 ">
            {/* <JokesTable /> */}
            <div className="">

                <div className="bg-gray-900 flex sm:h-20"></div>
                <div class="flex mb-0">
                    <div class="w-2/3 bg-gray-900 h-full">

                        <div className="">
                            <JokesStackedListHeader />
                        </div>
                        <div className="p-8">
                            <JokesStackedListTable />
                        </div>
                    </div>
                    <div class="w-1/3 bg-gray-400 h-screen">
                        <div className="flex-1 bg-gray-800 p-4">
                            <div className="px-2">
                                <TopUsersRankedHeader />
                            </div>
                            <div className="px-4">
                                <TopUsersRankedList />
                            </div>
                        </div>

                    </div>
                    {/* <div class="w-1/4 bg-gray-500 h-screen"></div>
                    <div class="w-1/4 bg-gray-400 h-screen"></div> */}
                </div>
                {/* <div class="flex bg-blue-100">
                    Footer
                </div> */}
                {/* <div className="grid grid-cols-3 gap-0 ">


                    <div className="flex-1 col-span-2 bg-gray-900 p-4">
                        <div className="">
                            <JokesStackedListHeader />
                        </div>
                        <div className="p-8 h-full">
                            <JokesStackedListTable />
                        </div>
                    </div>
                    <div className="flex-1 bg-gray-800 p-4">
                        <div className="px-2">
                            <TopUsersRankedHeader />
                        </div>
                        <div className="px-4">
                            <TopUsersRankedList />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default JokesPage;