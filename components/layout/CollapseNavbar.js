import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./CollapseNavbar.module.css";
import ActiveLink from "../ActiveLink"

const CollapseNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="white" fixed="top">
      <Container className={classes.linkscss}>
        <div className={classes.logo} >
          My Portfolio
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
          <ActiveLink href="/about">
              About
            </ActiveLink>
            <ActiveLink href="/">
              All Projects
            </ActiveLink>
            <ActiveLink href="/skills">
              Skills
            </ActiveLink>
            <ActiveLink href="/contact">
              Contact
            </ActiveLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CollapseNavbar;
