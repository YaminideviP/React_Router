import { Link } from "react-router-dom";
export default function About(){
    return(
        <>
        <main>
            <h2>Who are we?</h2>
            <p>That feels like an existential question, Don't you think?</p>
        </main>
        <nav>
             <Link to ="/"> Home </Link>
        </nav>
        </>
    );
}