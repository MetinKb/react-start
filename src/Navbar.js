import './tailwind.css'

function Navbar() {
    return (
        <ul className="m-3 list-none w-auto h-auto flex flex-row justify-end">
            <li className="nav-item">Home</li>
            <li className="nav-item">Books</li>
            <li className="nav-item">Contact</li>
        </ul>
    )
}

export default Navbar