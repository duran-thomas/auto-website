import { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Footer from "./../Footer";

class BookAppointment extends Component {
  render() {
    return (
      <div id='page-container'>
        <Container id='content-wrap'>
          <Row >
            <Col lg={12} style={{marginBottom: '5%'}}>
              <div className="col-sm text-center">
                <br></br>
                <h1 className="div-heading display-4 header__text">SCHEDULE A TEST</h1>
              </div>
            </Col>
            <br></br>
            <Col lg={12}>
              <Container>
                <Row>
                  <Col lg={6} style={{margin: 'auto'}}>
                    <Card >
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
                            style={{
                              backgroundColor: "#561B1F",
                              border: "none",
                            }}
                          >
                            Submit
                          </button>
                        </form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container style={{
          position: 'absolute',
          bottom: '0',
          maxWidth: "100%",
          padding: '0'
        }}>
          <Footer />
        </Container>
        
      </div>
    );
  }
}

export default BookAppointment;
