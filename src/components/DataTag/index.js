import React, { Component } from 'react';


class DataTag extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    showPrice = () =>{
        let price = this.props.price;
        let icons = [];

        for(let i=0; i < 4; i++){
            if(price > 0){
                icons.push(<i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>);  
            }else{
                icons.push(<i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>) 
            }

            price --;
        }

        return icons;
    }

    render(){

        const { city, country, rooms} = this.props;

        return(
            
        <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>    
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                    <span className="tag is-medium">{`${ city }, ${ country }`}</span>
                </div>
            </div>
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                    <span className="tag is-medium">{`${ rooms } Habitaciones`}</span>
                </div>
            </div>
            <div className="control">
                <div className="tags">
                    <span className="tag is-medium is-info" id="priceContent">
                        { this.showPrice() }
                    </span>
                </div>
            </div>
        </div>    
        )
    }
}

export default DataTag;