import React, { Component } from 'react';
import DateFilter from '../DateFilter';
import OptionsFilter from '../OptionsFilter';

class Filters extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    handleOptionChange = event => {
        let payload = this.props.filters
        payload[event.target.name] = event.target.value
      
        this.props.onFilterChange(payload)
    }

    handleDateChange = event => {
        let payload = this.props.filters

        payload[event.target.name] = new Date(event.target.value);
        
        this.props.onFilterChange(payload);
        console.log(payload)
    }

    render(){

        const { filters } = this.props;

        return(
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter date={ filters.dateFrom } icon="fa-sign-in-alt" onDateChange={ this.handleDateChange } name="dateFrom"/>
                </div>
                <div className="navbar-item">
                    <DateFilter date={ filters.dateTo } icon="fa-sign-out-alt" onDateChange={ this.handleDateChange } name="dateTo"/>
                </div>
                <div className="navbar-item">
                    <OptionsFilter 
                    options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                    selected={ filters.country }
                    icon="fa-globe" name='country' onOptionChange={ this.handleOptionChange}/>
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                    selected={ filters.price }
                    icon="fa-dollar-sign" name='price' onOptionChange={ this.handleOptionChange }/>
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                    selected={ filters.rooms }
                    icon="fa-bed" name='rooms' onOptionChange={ this.handleOptionChange} />
                </div>
            </nav>
        )
    }
}

export default Filters