import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGithub,
} from "react-icons/di";
function Skills(){

    return (
        <>
            <h3 className="text-center">Skills</h3>
            <Row style={{paddingBottom:"100px"}}>
                <Row>
                    <Col sm={12} md={3} className="d-flex align-items-center justify-content-center">
                        <div className="text-center display-6">Progamming <br/> Languages</div></Col>
                    <Col sm={12} md={9} >
                    <Row className="p-4">
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiPython />
                          <p className="text-center fs-6">Python</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiJava />
                          <p className="text-center fs-6">Java</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiJavascript1 />
                          <p className="text-center fs-6">Javascipt</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiMysql />
                          <p className="text-center fs-6">Sql</p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                <Col sm={12} md={3} className="d-flex align-items-center justify-content-center">
                        <div className="text-center display-6">Web Devolopment</div></Col>
                    <Col sm={12} md={9}>
                    <Row className="p-4">
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiHtml5 />
                          <p className="text-center fs-6">HTML</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiCss3 />
                          <p className="text-center fs-6">CSS</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiBootstrap />
                          <p className="text-center fs-6">Bootstrap</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiReact />
                          <p className="text-center fs-6">React</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiNodejs />
                          <p className="text-center fs-6">Node JS</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiMongodb />
                          <p className="text-center fs-6">MongoDB</p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                <Col sm={12} md={3} className="d-flex align-items-center justify-content-center">
                        <div className="text-center display-6">Version Control</div></Col>
                    <Col sm={12} md={9}>
                    <Row className="p-4">
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiGit />
                          <p className="text-center fs-6">Git</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiGithub />
                          <p className="text-center fs-6">Github</p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                {/* <Row>
                <Col sm={12} md={3} className="d-flex align-items-center justify-content-center">
                        <div className="text-center display-6">Web Devolopment</div></Col>
                    <Col sm={12} md={9}>
                    <Row className="p-4">
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiPython />
                          <p className="text-center fs-6">python</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiJavascript1 />
                          <p className="text-center fs-6">python</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiJava />
                          <p className="text-center fs-6">python</p>
                        </Col>
                        <Col xs={3} md={2} className="tech-icons m-2">
                          <DiMysql />
                          <p className="text-center fs-6">python</p>
                        </Col>
                    </Row>
                    </Col>
                </Row> */}
                {/* <Row>
                    <h3 className="text-center">Certifications</h3>

                </Row> */}
            </Row>
            
        </>
    )
}
export default Skills;