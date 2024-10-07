import { Col,Row, Container } from "react-bootstrap";

function About(){

    return (
        <Container className="justify-center-align">
            <Row style={{paddingBottom:"100px"}}>
                <Col sm={0} md={2}>
                    
                </Col>
                <Col sm={12} md={8} className="tect-center">
                    <div className="d-none d-md-block" style={{padding:"50px"}}></div>
                    <h3 className="text-center fs-3">Intro</h3>
                    <p className="text-center fs-5">I'm exploring the world of software engineering and aiming to improve my skills. I'm on the lookout for an internship opportunity that allows me to gain hands-on experience and develop my abilities in creating software.</p>
                    <br/>
                    <h3 className="text-center fs-3">Skills and Goals</h3>
                    <p className="text-center fs-5">Coupling my AI/ML specialization in Computer Science with a keen interest in web development, I aspire to master competitive programming. My goal is to craft ingenious web solutions merging AI innovations, fostering tech advancements for meaningful impact.</p>
                    <br/>
                    <h3 className="text-center fs-3">Education</h3>
                    <Row>
                        <Col className="p-1 mx-1 text-center fw-bolder display-card" style={{border:"2px white solid",borderRadius:"10px"}} >B.tech CSE<br/>VIT-AP University<br/>2021-present<br/>current CGPA: 9.56</Col>
                        <Col className="p-1 mx-1 text-center fw-bolder display-card" style={{border:"2px white solid",borderRadius:"10px"}} >Intermediate<br/>Hindustan Junior College<br/>2019-21<br/>Marks: 969/1000</Col>
                        <Col className="p-1 mx-1 text-center fw-bolder display-card" style={{border:"2px white solid",borderRadius:"10px"}} >10th Standard<br/>Sri Chaithanya School<br/>2019<br/>GPA: 9.8</Col>
                    </Row>
                    <br/>
                    <h3 className="text-center fs-3">Hobbies</h3>
                    <Row className="justify-content-center">
                        <Col sm={2} className="p-1 mx-1 text-center fw-bolder display-card" style={{border:"2px black solid",borderRadius:"50px"}} >Programming</Col>
                        <Col sm={2} className="p-1 mx-1 text-center fw-bolder display-card" style={{border:"2px black solid",borderRadius:"50px"}} >Anime</Col>
                        <Col sm={2} className="p-1 mx-1 text-center fw-bolder display-card" style={{border:"2px black solid",borderRadius:"50px"}} >Music</Col>
                    </Row>

                </Col>

                <Col sm={0} md={2}>

                </Col>
            </Row>
        </Container>
    )
}
export default About;