import { Link } from "react-router-dom"

export default function Navbar () {
    return (
        <div className="grid grid-cols-3 gap-3">
                <li> <Link to="/"> HOME</Link> </li>
                <li> <Link to="/form" > FORM </Link></li>
                <li> <Link to="/products" > ALL PRODUCTS </Link></li>
        </div>
    )
}