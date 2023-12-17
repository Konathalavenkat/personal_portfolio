import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

function Certifications(){
    const [c1,setc1] = useState(false);
    const [c2,setc2] = useState(false);
    return (
        <>
            <h3 className="text-center" >Certifications</h3>
            <Row style={{paddingBottom:"70px"}}>
                <Col xs={0} md={2}>
                
                </Col>
                <Col>
                <div>
                    <h3>1. Sololearn Python Intermediate <button onClick={()=>{setc1(!c1)}} className="btn btn-outline-success">{c1?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1I_PcjwesAtK0LIYfFmgJ1VBhXTjh__OE")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c1 && <img src="https://drive.google.com/uc?id=1cUsaKLsgYB7usfubnmsw0Saf875SNeS5" alt="python intermediate certificate" width="80%"/>}
                    </div>
                </div>
                <div>
                    <h3>2. Sololearn Java Intermediate <button onClick={()=>{setc2(!c2)}} className="btn btn-outline-success">{c2?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1oMFfD8HBcrUzkniqb5DmHe7yDKLTR_LZ")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c2 && <img src="https://drive.google.com/uc?id=1h5UX-JsZ5ve-CFe3qzj9RRlt8iBbngOr" alt="java intermediate certificate" width="80%"/>}
                    </div>
                </div>
                <div>
                    <h3>3. Sololearn JavaScript Intermediate <button onClick={()=>{setc2(!c2)}} className="btn btn-outline-success">{c2?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1On2cNSkz0NqYfhHmhX-BC9Xp4V0037A3")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c2 && <img src="https://drive.google.com/uc?id=1h5UX-JsZ5ve-CFe3qzj9RRlt8iBbngOr" alt="javaScript intermediate certificate" width="80%"/>}
                    </div>
                </div>
                </Col>
                <Col xs={0} md={2}>
                
                </Col>
            </Row>
        </>
    )
}
export default Certifications;