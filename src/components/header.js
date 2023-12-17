import React from 'react';
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
function Header(){
    return (
        <Navbar collapseOnSelect expand="md" id="header" style={{position:"sticky",top:"0"}}>
            <Container fluid>
                <NavbarBrand onClick={()=>{window.location.href="/#/"}}>{"Venkat"}</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end mx-3'>
                    <Nav >
                        <Nav.Link className='text-decoration-none' onClick={()=>{window.location.href="/#/"}}>Home</Nav.Link>
                        <Nav.Link className='text-decoration-none' onClick={()=>{window.location.href="/#/About"}}>About</Nav.Link>
                        <Nav.Link className='text-decoration-none' onClick={()=>{window.location.href="/#/Projects"}}>Projects</Nav.Link>
                        <Nav.Link className='text-decoration-none' onClick={()=>{window.location.href="/#/Skills"}}>Skills</Nav.Link>
                        <Nav.Link className='text-decoration-none' onClick={()=>{window.location.href="/#/Resume"}}>Resume</Nav.Link>
                        
                        <Button className='btn-primary' onClick={()=>{window.location.href="/#/contact"}}>Contact</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
export default Header;