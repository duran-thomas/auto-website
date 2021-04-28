import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


class Footer extends Component {
    render() {
        return (
          <div>
            <footer className="bg-dark text-center text-white">
              <div className="container p-4 pb-3">
                <section>
                  <div className="row">
                    <div className="col-4">
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
                    </div>
                    <div className="col-4">
                      <p>
                        <a href="/contact-us" className="text-white">Contact Us</a>
                      </p>
                    </div>
                    <div className="col-4">
                      <p>
                        <a href="/about-us" className="text-white">About Us</a>
                      </p>
                    </div>
                  </div>
                </section>
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