import { Component } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Footer from './../Footer'


class Home extends Component{
    render(){
        return (
            <div>
               <div className="container-size main-header">
                   <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}><Card className="card-tiles"><a className="card-links" href="/book-appointment">Schedule Appointment</a></Card></Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}><Card className="card-tiles"><a className="card-links" href="/new-vehicles">Browse New Cars</a></Card></Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}><Card className="card-tiles"><a className="card-links" href="/used-vehicles">Browse Used Cars</a></Card></Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}><Card className="card-tiles"><a className="card-links" href="/contact-us">Have Questions?</a></Card></Col>
                        </Row>
                   </Container>
               </div>
               <div className="container container-size">
                    <h4 className="text-center welcome-header">ON BEHALF OF YOUR LOCAL LONG ISLAND CAR SALESMAN, JAHVON PRINCE</h4>
                    <br></br>
                    <h2 className="text-center welcome-text header__text">WELCOME</h2>
                    <br></br>
                    <p className="text-center body-text">With determination, empathy and humility, Jahvon Prince strives to provide the best business on Long Island. 
                        Through his devotion for helping others actualize their dreams of owning a car, coupled with his aspirations of being the best salesman in Huntington, Jahvon strives to deliver the best service to all his clients.
                        Mazda certified in the State of New York, Jahvon Prince is the type of hardworking and dedicated car salesman you need. Stop by or give us a call, you won’t be sorry.
                    </p>
               </div>
               <Footer/>
            </div>
        )
    }
    }

export default Home;