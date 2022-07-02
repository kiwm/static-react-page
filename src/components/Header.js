import reactLogo from "../assets/react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div>
                <img src={reactLogo} className="nav-img"/>
                <h3>ReactFacts</h3>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

