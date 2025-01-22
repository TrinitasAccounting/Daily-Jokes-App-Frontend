
import { useOutletContext } from "react-router-dom";
import JokesTable from "./JokesTable";


function JokesPage() {

    const { allJokes } = useOutletContext();



    return (
        <div className="h-screen bg-gray-900">
            <JokesTable />
        </div>
    )
}

export default JokesPage;