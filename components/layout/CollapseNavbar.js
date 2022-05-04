import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import classes from "./CollapseNavbar.module.css";

const CollapseNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="white" fixed="top">
      <Container className={classes.linkscss}>
        <Link href="/" as={`/`}>
          My Portfolio
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Link href="/about" as={`/about`}>
              About
            </Link>
            <Link href="/" as={`/`}>
              All Projects
            </Link>
            <Link href="/skills" as={`/skills`}>
              Skills
            </Link>
            <Link href="/contact" as={`/contact`}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CollapseNavbar;
