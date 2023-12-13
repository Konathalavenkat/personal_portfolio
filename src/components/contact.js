import { useState } from "react";
import axios from 'axios';
import { Col, Row } from "react-bootstrap";
function Contact(){
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [msg,setmsg]=useState();
    const handleSubmit=()=>{
        const data={name,email,msg};
        console.log(data)
        console.log(process.env.REACT_APP_URL)
        axios.post(process.env.REACT_APP_URL, data)
          .then((res) => {
            if (res.status === 200) {
              alert("Sent successfully");
            }
          })
          .catch((err) => console.log(err));

        
    }
    return (<>
        <div className="contact-form-container">
            <h2 className="text-center">Contact Us</h2>
            <Row>
                <Col sm={0} md={2}></Col>
                <Col sm={12} md={8}>
                    <Row className="form-group">
                      <Col sm={12} className="text-start my-3 h4">Name</Col>
                        <Col sm={12}>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              onChange={(event)=>{setname(event.target.value)}}
                              required
                            />
                        </Col>
                    </Row>

                    <Row className="form-group">
                    <Col sm={12} className="text-start my-3 h4">Email</Col>
                        <Col sm={12}>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              onChange={(event)=>{setemail(event.target.value)}}
                              required
                            />
                        </Col>
                    </Row>

                    <Row className="form-group">
                            <Col sm={12} className="text-start my-3 h4">Message</Col>
                        <Col sm={12}>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    onChange={(event)=>{setmsg(event.target.value)}}
                                    rows="4"
                                ></textarea>
                      </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <button className="col-1 btn btn-success m-5 text-center" onClick={handleSubmit}>Submit</button>
                    </Row>
                </Col>
                <Col sm={0} md={2}></Col>
            </Row>
      
        </div>

    </>)
}
export default Contact;