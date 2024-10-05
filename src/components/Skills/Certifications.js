import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Certificate from "./Certificate";
function Certifications(){
    const [i1,seti1] = useState(false)
    const [c1,setc1] = useState(false);
    const [c2,setc2] = useState(false);
    const [c3,setc3] =useState(false);
    const [c4,setc4]=useState(false);
    const [c5,setc5]=useState(false);
    const [c6,setc6]=useState(false);
    const [p1,setp1]=useState(false);
    const [p2,setp2]=useState(false);
    const [p3,setp3]=useState(false);
    const [p4,setp4]=useState(false);
    return (
        <>
            <h3 className="text-center" >Certifications</h3>
            <Row style={{paddingBottom:"70px"}}>
                <Col xs={0} md={2}>
                
                </Col>
                <Col style={{paddingTop:"20px"}}>

                <div>
                    <h3>1. MERN Fullstack internship at Ethnus Codemithra <button onClick={()=>{setc5(!c5)}} className="btn btn-outline-success">{c5?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1wlP0YEfxDJpQ4Wjc4OLlUFvGXSVipMtC")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c5 && <img src="https://drive.google.com/uc?id=1gAdMQLJg3d7SmAwSBymFMriMDKqZTDf9" alt="Mern fullstack" width="80%"/>}
                    </div>
                </div>
                <div>
                    <h3>2. Sololearn Python Intermediate <button onClick={()=>{setc1(!c1)}} className="btn btn-outline-success">{c1?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1I_PcjwesAtK0LIYfFmgJ1VBhXTjh__OE")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c1 && <img src="https://drive.google.com/uc?id=1cUsaKLsgYB7usfubnmsw0Saf875SNeS5" alt="python intermediate certificate" width="80%"/>}
                    </div>
                </div>
                <div>
                    <h3>3. Sololearn Java Intermediate <button onClick={()=>{setc2(!c2)}} className="btn btn-outline-success">{c2?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1oMFfD8HBcrUzkniqb5DmHe7yDKLTR_LZ")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c2 && <img src="https://drive.google.com/uc?id=1h5UX-JsZ5ve-CFe3qzj9RRlt8iBbngOr" alt="java intermediate certificate" width="80%"/>}
                    </div>
                </div>
                <div>
                    <h3>4. Sololearn JavaScript Intermediate <button onClick={()=>{setc3(!c3)}} className="btn btn-outline-success">{c3?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1On2cNSkz0NqYfhHmhX-BC9Xp4V0037A3")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c3 && <img src="https://drive.google.com/uc?id=1PMPubqXQTt3xMZ3Au8g2rLS_XYzeGOqs" alt="javaScript intermediate certificate" width="80%"/>}
                    </div>
                </div>
                <div>
                    <h3>5. C Programming <button onClick={()=>{setc4(!c4)}} className="btn btn-outline-success">{c4?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1gwn9TvQzFWRbF7G-40QDeMQ9YKjGt_yD")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c4 && <iframe src="https://drive.google.com/file/d/1gwn9TvQzFWRbF7G-40QDeMQ9YKjGt_yD/preview" width="640" height="480" allow="autoplay"></iframe>}
                    </div>
                </div>
                <div>
                    <h3>6. Cloud Essentials <button onClick={()=>{setc6(!c6)}} className="btn btn-outline-success">{c6?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1M05-qwqvaV_FhQMHtrLZFA3Ie5v4uTBU")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {c6 && <iframe src="https://drive.google.com/file/d/1M05-qwqvaV_FhQMHtrLZFA3Ie5v4uTBU/preview" width="640" height="480" allow="autoplay"></iframe>}
                    </div>
                </div>
                <Certificate certname={"7. NodeJs Udemy Course"} embedlink={`https://drive.google.com/file/d/1WSzuBfzsnmztqEKTfuzPFq9XP7gpHMGz/preview`} link={"https://drive.google.com/uc?export=download&id=1WSzuBfzsnmztqEKTfuzPFq9XP7gpHMGz"} />
                </Col>
                <Col xs={0} md={2}>
                
                </Col>
            </Row>
            <h3 className="text-center" >Participation Certifications</h3>
            <Row style={{paddingBottom:"70px"}}>
                <Col xs={0} md={2}>
                
                </Col>
                <Col style={{paddingTop:"20px"}}>

                <div>
                    <h3>1. HackOn With Amazon - Season 3 <button onClick={()=>{setp1(!p1)}} className="btn btn-outline-success">{p1?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1CqunmdDDuiFZffMccykitB_94WiVr-lx")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {p1 && <iframe src="https://drive.google.com/file/d/1CqunmdDDuiFZffMccykitB_94WiVr-lx/preview" width="640" height="480" allow="autoplay"></iframe>}
                    </div>
                </div>
                <div>
                    <h3>2. Flipkart GRiD 5.0 - Software Development Track <button onClick={()=>{setp2(!p2)}} className="btn btn-outline-success">{p2?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1Mz841JuuDSTP8wwCTP5muagbWauNr24m")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {p2 && <iframe src="https://drive.google.com/file/d/1Mz841JuuDSTP8wwCTP5muagbWauNr24m/preview" width="640" height="480" allow="autoplay"></iframe>}
                    </div>
                </div>
                <div>
                    <h3>3. Xiaomi Ode2Code 3.0 <button onClick={()=>{setp3(!p3)}} className="btn btn-outline-success">{p3?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1ygm4AVpkztCAhXBoqj07vmMpW7k0Exhy")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {p3 && <iframe src="https://drive.google.com/file/d/1ygm4AVpkztCAhXBoqj07vmMpW7k0Exhy/preview" width="640" height="480" allow="autoplay"></iframe>}
                    </div>
                </div>
                <div>
                    <h3>4. TVS Credit E.P.I.C 5.0 — IT Challenge <button onClick={()=>{setp4(!p4)}} className="btn btn-outline-success">{p4?"Hide Certification":"Show Certification"}</button> <button onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1awosLHQtx8ZvQaPRVKj0qqhxrGo5MkhC")}} className="btn btn-outline-success">Download</button></h3>
                    <div className="d-flex flex-row justify-content-center">
                        {p4 && <iframe src="https://drive.google.com/file/d/1awosLHQtx8ZvQaPRVKj0qqhxrGo5MkhC/preview" width="640" height="480" allow="autoplay"></iframe>}
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