import { Link } from "react-router-dom"
export default function Home() {
    return (
        
        <div>
        
            <Link to={"/userlogin"}>
                <button> Login </button>
            </Link>

            <Link to={"/trips"}>
                <button> all Trips </button>
            </Link>

            <Link to={"/userregistration"}>
                <button> Register here </button>
            </Link>
        </div>
    )
}
