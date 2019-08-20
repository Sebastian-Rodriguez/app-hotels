import React, { Component } from 'react';
import DataTag from '../DataTag'

class Hotel extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){

        const { hotel } = this.props;

        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={ hotel.photo } alt={ hotel.name } />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{ hotel.name }</p>
                    <p>{ hotel.description }</p>
                    <DataTag city={hotel.city} country={hotel.country} rooms={hotel.rooms} price={hotel.price}/>
                </div>
                <div className="card-footer">
                    <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        )
    }
}

export default Hotel;