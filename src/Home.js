import { Link } from "react-router-dom";
export default function Home(){
    return(
        <>
        <main>
            <h2> Welcome to Home Page </h2>
            <p> You can do this, I believe in You </p>
        </main>
        <nav>
            <Link to ="/about"> About </Link>
        </nav>
        </>
    );
}