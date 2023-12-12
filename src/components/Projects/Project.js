import {Row,Col} from 'react-bootstrap';
function Project(){

    return (
        <>
            <Row style={{paddingBottom:"100px"}}>
                <Col sm={0} md={2}></Col>
                <Col sm={12} md={8}>
                    <h2 className='text-center'>Projects</h2>
                    <Row className='border-1 project p-3 m-3'>
                        <h3 className='my-3'>Movie Ticket Booking App</h3>
                        <Row className='justify-content-start'>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >React</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Express</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Node</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >MongoDB</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Bootstrap</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >CSS</Col>
                        </Row>
                        <br/>
                        <div className='fs-5'>
                        Within a team, we created a user-friendly Movie Ticket Booking System using the MERN Stack. Our focus was on secure authentication, CRUD operations, and ticket booking features. We utilized React.js for a responsive front-end and Node.js with Express.js for the backend, connecting seamlessly with MongoDB for efficient data handling. Challenges involved coordinating async events and ensuring scalability as we collaborated effectively to achieve our goals.

                        </div>
                        <br/>
                        <a className='fs-4' href="https://show-time-squad-frontend.vercel.app/#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </Row>
                    <Row className='border-1 project p-3 m-3'>
                        <h3 className='my-3'>Sign Language interpreter</h3>
                        <Row className='justify-content-start'>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Python</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >CNN</Col>
                            <Col sm={3} md={2}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Deep Learning</Col>
                        </Row>
                        <br/>
                        <div className='fs-5'>
                        In our pursuit to enhance communication for the hearing-impaired, we developed a sign language interpreter. Leveraging transfer learning, specifically with VG-16, we fortified our interpreter's abilities. This technique involved fine-tuning a pre-existing model to better comprehend sign language gestures. Additionally, we used a dataset comprising photos we captured ourselves. Amidst challenges, our focus remained on precision and creating technology that's inclusive for all.
                        </div>
                        <br/>
                        <a className='fs-4' href="https://github.com/Konathalavenkat/Sign-Language-interpreter.git" target="_blank" rel="noopener noreferrer">Repo Link</a>
                        <a className='fs-4' href="https://colab.research.google.com/drive/17YRz5FA3GsQwwb2azgVIdVufKD9XW0Jo?usp=sharing" target="_blank" rel="noopener noreferrer">Collab Link</a>
                    </Row>
                    <Row className='border-1 project p-3 m-3'>
                        <h3 className='my-3'>Smart Parking System</h3>
                        <Row className='justify-content-start'>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Arduino</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >ESP-32</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >CNN</Col>
                            <Col sm={3} md={2}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Deep Learning</Col>
                        </Row>
                        <br/>
                        <div className='fs-5'>
                        we developed a user-friendly Smart Parking System using advanced technology and object recognition techniques to classify parking spots as vacant or occupied, resulting in improved efficiency and time-saving for drivers. 
                        </div>
                        <br/>
                    </Row>
                    <Row className='border-1 project p-3 m-3'>
                        <h3 className='my-3'>IOT based Health Monitoring System using NodeMCU</h3>
                        <Row className='justify-content-start'>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >NodeMCU</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >IOT</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >MAX30100</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >DHT22</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >DS18B20</Col>
                        </Row>
                        <br/>
                        <div className='fs-5'>
                        Created a modern health monitoring system that records body temperature and SpO2 (Oxygen Saturation) in real-time. Used smart technology and sensors to collect and manage health data accurately and securely. Demonstrated strong skills in integrating hardware and analyzing data, with a focus on developing helpful healthcare solutions
                        </div>
                        <br/>
                    </Row>
                    {/* <Row className='border-1 project p-3 m-3'>
                        <h3 className='my-3'>Movie Ticket Booking App</h3>
                        <Row className='justify-content-start'>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >React</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Express</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Node</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >MongoDB</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >Bootstrap</Col>
                            <Col sm={2} md={1}  className="p-1 mx-1 text-center display-card " style={{border:"2px black solid",borderRadius:"50px"}} >CSS</Col>
                        </Row>
                        <br/>
                        <div className='fs-5'>
                        Within a team, we created a user-friendly Movie Ticket Booking System using the MERN Stack. Our focus was on secure authentication, CRUD operations, and ticket booking features. We utilized React.js for a responsive front-end and Node.js with Express.js for the backend, connecting seamlessly with MongoDB for efficient data handling. Challenges involved coordinating async events and ensuring scalability as we collaborated effectively to achieve our goals.

                        </div>
                        <br/>
                    </Row> */}
                </Col> 
                
                <Col sm={0} md={2}></Col>
            </Row>
        </>
    )
}
export default Project;