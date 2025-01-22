
import { useOutletContext } from "react-router-dom";
import JokesTable from "./JokesTable";
import JokesStackedListTable from "./JokesDesignComponents/JokesStackedListTable";
import JokesStackedListHeader from "./JokesDesignComponents/JokesStackedListHeader";
import TopUsersRankedHeader from "./JokesDesignComponents/TopUsersRankedHeader";
import TopUsersRankedList from "./TopUsersRankedList";


function JokesPage() {

    const { allJokes } = useOutletContext();



    return (
        <div className="h-screen bg-gray-900">
            {/* <JokesTable /> */}
            <div className="bg-gray-800  sm:h-20"></div>
            <div className="grid grid-cols-3 gap-0">
                {/* <div class="bg-blue-500 p-4">Item 1</div> */}
                <div className="h-screen col-span-2 bg-gray-900 p-4">
                    <div className="">
                        <JokesStackedListHeader />
                    </div>
                    <div className="p-8">
                        <JokesStackedListTable />
                    </div>
                </div>
                <div className="bg-gray-800 p-4">
                    <div className="px-2">
                        <TopUsersRankedHeader />
                    </div>
                    <div className="px-4">
                        <TopUsersRankedList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JokesPage;