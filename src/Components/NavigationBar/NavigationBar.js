import React from "react";
import { Navbar, Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import firebase from "firebase/compat";
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
                {firebase.auth().currentUser ? (
                    <Navbar.Collapse className="justify-content-end">
                        <img src={firebase.auth().currentUser?.photoURL} className="profPic" alt="prof" />
                        <p className="d-inline-block align-top">{firebase.auth().currentUser?._delegate?.displayName}</p>
                    </Navbar.Collapse>
                ) : (
                    <Navbar.Collapse className="justify-content-end">
                        <Button className="loginButton" onClick={() => props.buttonOnClick()}>Log In</Button>
                    </Navbar.Collapse>
                )}
            </Container>
        </Navbar>
    );
}