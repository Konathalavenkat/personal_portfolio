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
                
                <Certificate certname={"1. MERN Fullstack internship at Ethnus Codemithra"} id={"1gAdMQLJg3d7SmAwSBymFMriMDKqZTDf9"} />
                <Certificate certname={"2. Sololearn Python Intermediate "} id={"1cUsaKLsgYB7usfubnmsw0Saf875SNeS5"} />
                <Certificate certname={"3. Sololearn Java Intermediate "} id={"1h5UX-JsZ5ve-CFe3qzj9RRlt8iBbngOr"} />
                <Certificate certname={"4. Sololearn JavaScript Intermediate"} id={"1PMPubqXQTt3xMZ3Au8g2rLS_XYzeGOqs"} />
                <Certificate certname={"5. C Programming"} id={"1gwn9TvQzFWRbF7G-40QDeMQ9YKjGt_yD"} />
                <Certificate certname={"6. Cloud Essentials "} id={"1M05-qwqvaV_FhQMHtrLZFA3Ie5v4uTBU"} />
                <Certificate certname={"7. NodeJs Udemy Course"} id={"1WSzuBfzsnmztqEKTfuzPFq9XP7gpHMGz"} />
                <Certificate certname={"8. Intraintech AIML Internship"} id={"1YkLvx8e2Xdw8XICxkxyTIRChPE9K9Zwm"} />

                </Col>
                <Col xs={0} md={2}>
                
                </Col>
            </Row>
            <h3 className="text-center" >Participation Certifications</h3>
            <Row style={{paddingBottom:"70px"}}>
                <Col xs={0} md={2}>
                
                </Col>
                <Col style={{paddingTop:"20px"}}>
                <Certificate certname={"1. HackOn With Amazon - Season 3 "} id={"1CqunmdDDuiFZffMccykitB_94WiVr-lx"} />
                <Certificate certname={"2. Flipkart GRiD 5.0 - Software Development Track"} id={"1Mz841JuuDSTP8wwCTP5muagbWauNr24m"} />
                <Certificate certname={"3. Xiaomi Ode2Code 3.0 "} id={"1ygm4AVpkztCAhXBoqj07vmMpW7k0Exhy"} />
                <Certificate certname={"4. TVS Credit E.P.I.C 5.0 — IT Challenge "} id={"1awosLHQtx8ZvQaPRVKj0qqhxrGo5MkhC"} />
                </Col>
                <Col xs={0} md={2}>
                
                </Col>
            </Row>
        </>
    )
}
export default Certifications;