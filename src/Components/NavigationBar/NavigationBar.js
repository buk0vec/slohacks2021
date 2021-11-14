import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import "./NavigationBar.css"

export default function NavigationBar(props) {
    return (
        <Navbar bg="light" className="p-2">
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                </Link>
                {!props.signedIn ? <Navbar.Collapse className="justify-content-end">
                    <Button className="loginButton">Log In</Button>
                </Navbar.Collapse> : null}
            </Container>
        </Navbar>
    );
}