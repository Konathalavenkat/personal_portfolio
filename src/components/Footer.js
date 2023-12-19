import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaCode, FaHackerrank, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" id="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 className="text-dark">Copyright © {year} Venkat</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Konathalavenkat"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-dark"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/Venkat_siva/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="https://drive.google.com/uc?id=13EYdMQFXtvp_IKevxBJ1XNbg_l1IHnZW" width={"16px"}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/venkat-konathala-953a7b262"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-dark"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/k_venkatsiva"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaHackerrank className="text-dark"/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;