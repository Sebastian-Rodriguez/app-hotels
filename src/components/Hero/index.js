import React, { Component } from 'react'

class Hero extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }

  render() {

    const { dateTo, dateFrom, country, price, rooms } = this.props.filters;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{ dateFrom.toLocaleDateString('ame', options) }</strong> hasta el{' '}
              <strong>{ dateTo.toLocaleDateString('ame', options) }</strong>
              <span>{ country !== '' && country !== 'Todos los países' ? ' en ' : null}</span><strong>{ country !== '' && country !== 'Todos los países' ? country : null} </strong>
              <span>{ price !== '' && price !== 'Cualquier precio' ? ' por ' : null}</span><strong>{ price !== '' && price !== 'Cualquier precio' ? `$${price}` : null} </strong>
              <span>{ rooms !== '' && rooms !== 'Cualquier tamaño' ? ' de hasta ' : null}</span><strong>{ rooms !== '' && rooms !== 'Cualquier tamaño' ? `${rooms} Habitaciones` : null} </strong>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
