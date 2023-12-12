import React, { useEffect,useState } from 'react';
import Type from "./Type";
import {Container,Row,Col} from "react-bootstrap";
const Home = () => {
    const [height,setheight]=useState("100vh");
useEffect(() => {
    const headerHeight = document.getElementById('header').clientHeight;
    const footerHeight = document.getElementById('footer').clientHeight;
    setheight(`calc(100vh - ${headerHeight + footerHeight}px)`);
  }, []);
  return (
    <>
      <Container fluid >
                <Row className="align-items-center" style={{ height: height, paddingTop: '0', paddingBottom: '0' }}>
                    
                    <Col sm={0} md={2}></Col>
                    <Col md={5} style={{paddingTop:"160px"}}>
                        <p className='fs-4'>Hi there, I'm Venkat 👋</p>
                        <Type />
                        <br/>
                        <p className='fs-5'>Proficient in MERN stack development, I've crafted dynamic web applications during internships, honing my skills. Notably, I played a pivotal role in a Movie Ticket Booking System Project, showcasing full-stack expertise. Skilled in interface design, seamless API integration, and thriving in collaborative environments. Eager to embrace ongoing learning and spearhead innovative solutions.</p>
                    </Col>
                    <Col sm={12} md={3} className='d-none d-md-block'>
                        <img src='https://drive.google.com/uc?id=1g0nRfrcLL6P2LkoQdQ0f9-yyg2O6vYZ2' height={"500px"} style={{paddingTop:"50px"}} alt='coding'/>
                    </Col>.
                    <Col sm={0} md={2}></Col>
                </Row>
            </Container>
    </>
  );
};

export default Home;
