import React, { Component } from 'react';

class OptionsFilter extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
    }

    handleDateChange = event => this.props.onOptionChange(event)

    render(){

        const { options, icon, name} = this.props

        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} } name={ name } onChange={ this.handleDateChange }>
                            {
                                options.map( option => ( 
                                    <option key={ `${option.value} `} value={ option.value} >{ option.name } </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className={`fas ${icon}`}></i>
                    </div>
                </div>
            </div>           
        )
    }
}

export default OptionsFilter