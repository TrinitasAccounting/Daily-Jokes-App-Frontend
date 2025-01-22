
import { useOutletContext } from "react-router-dom";


function JokesPage() {

    const { allJokes } = useOutletContext();

    console.log(allJokes);


    return (
        <>
            {allJokes.map((joke) => {
                return (<h2>{joke.question}</h2>)
            })}
        </>
    )
}

export default JokesPage;