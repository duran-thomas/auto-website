import {Component} from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import Footer from './../Footer'

class BookAppointment extends Component{
    render(){
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm text-center">
                  <br></br>
                  <h1 className="div-heading display-4">
                    Schedule A Test Drive
                  </h1>
                </div>
              </div>
              <br></br>
              <div className="">
                  <div className="col-6">
                    <Container>
                      <Row>
                        <Col sm="12" md={{ size: 6}}>
                          <Card className="">
                            <Card.Body>
                              <form>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="first-name"
                                    placeholder="First Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="last-name"
                                    placeholder="Last Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="Phone Number"
                                  />
                                  <small>Format: 555-555-5555</small>
                                </div>
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="date"
                                    id="date"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </form>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
              </div>
            </div>
            <br></br>
            <Footer />
          </div>
        );
    }
    }

export default BookAppointment;