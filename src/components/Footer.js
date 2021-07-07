import { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";


class Footer extends Component {
    render() {
        return (
          <div>
            <footer id='footer' className="bg-dark text-center text-white">
              <div className="container p-4 pb-3">
                <Container>
                  <Row>
                    <Col lg={4} sm={12} style={{marginBottom: '10px'}}>
                      <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      </Col>
                    <Col lg={4} sm={12} style={{marginBottom: '10px'}}>
                      <p>
                        <a href="/contact-us" className="text-white">Contact Us</a>
                      </p>
                    </Col>
                    <Col lg={4} sm={12} style={{marginBottom: '10px'}}>
                      <p>
                        <a href="/about-us" className="text-white">About Us</a>
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="text-center p-1" style={{backgroundColor: 'rgba(0,0,0,0.2'}}>
                <p>
                  © 2021 Copyright
                </p>
              </div>
            </footer>
          </div>
        );
    }
}

export default Footer;