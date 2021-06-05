import React, { useState, useEffect } from 'react'
import db from './../../firebase.config'


var carnames = []

let names = []

function NewVehicles(){

    // render(){
        const [newCars, setNewCars] = useState([])
        const fectchNewCars = async()=>{
            const response = db.ref().child("new");
            console.log(response)
            const data = await response.get();
            data.docs.array.forEach(item => {
                setNewCars([...newCars,item.data()])
            });
        }
        useEffect(() => {
            fectchNewCars();
        }, [])
        return (
            <div>
                <ul>
                    {
                        Object.keys(names).map((item) => {
                            return <li>{names[item]}</li>
                        })

                    }
                </ul>
            </div>    
        );
    // }
}

export default NewVehicles;