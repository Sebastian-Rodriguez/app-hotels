import React, { Component } from 'react';

class DateFilter extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
    }

    handleDateChange = event => this.props.onDateChange(event)

    render(){

        const { icon, date, name } = this.props;
        
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" defaultValue={date.toISOString().substr(0,10)} name={ name } onChange={ this.handleDateChange }/>
                    <span className="icon is-small is-left">
                        <i className={`fas ${icon}`}></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default DateFilter