import img from "./react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={img} className="nav-img"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

