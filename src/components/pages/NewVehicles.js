import React, { Component } from "react";
import db from "./../../firebase.config";
import { Card, Button } from "react-bootstrap";


var newState = [];
class NewVehicles extends Component {

    constructor(props){
        super(props);
        this.state = {
            newCars: []
        }

        // this.updateState = this.updateState.bind(this)
    }

    componentDidMount() {
        
        const accountref = db.ref('new');
        accountref.on('value', (snapshot) => {
            let vehicles = snapshot.val();
            for (let item in vehicles){
                newState.push({
                    name: vehicles[item].vehicleName,
                    price: vehicles[item].vehiclePrice,
                    image: vehicles[item].vehicleImage
                })
            }
        })

        this.setState({newCars: newState})
    }

    // updateState(newState){
    //     this.setState({newCars: newState})
    // }

  render() {
    return (
      <div className="row">
        {[Object.keys(this.state.newCars).map(key => {
            return <div className="row col-sm-2 car-card-layout">
                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={String(this.state.newCars[key].image)} />
                <Card.Body>
                <Card.Title>{this.state.newCars[key].name}</Card.Title>
                <Card.Text>
                    Price: {this.state.newCars[key].price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </div>
        })]}
      </div>
    );
  }
}

export default NewVehicles;