import React, { Component } from 'react'

import './index.css'
import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels';


const API_URL = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica';

class App extends Component {

  constructor(){
    super()
    this.state = {
      filters : {
        dateFrom: new Date(), // Proviene del archivo data.js
        dateTo: new Date(new Date().valueOf() + 86400000),
        country: '',
        price: '',
        rooms: ''
      },
      isLoading: false,
      hotelsData: [],
      filteredHotels: []
    }
    
  }

  async componentDidMount(){
    try{
      this.setState({ isLoading: true})

      const response = await fetch(API_URL);
      const hotelsData = await response.json();

      this.setState({ hotelsData })
      this.setState({ filteredHotels: hotelsData })
    }catch(err){
      console.log(err)
    }finally{
      this.setState({ isLoading: false })
    }   
  }


  handleFilterChange = payload => {
    this.setState({
      filters: payload
    })

    this.getFilteredHotels()
    
  }

  getFilteredHotels(){
    let { dateFrom, dateTo, country, price, rooms } = this.state.filters
    const hotels = this.state.hotelsData;

    // en caso de que los filtros tengan sus valores por default 
    // solo se muestran los hoteles filstrados por fecha
    if((country === "" || country === "Todos los países") && (price === "" || price === "Cualquier precio") && (rooms === "" || rooms === "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.availabilityTo >= dateTo.getTime())})
      
      //en caso de que el filtro de pais cambie y los demas sigan teniendo sus valores por default
      //solo se muestran los hoteles filtrados por fecha y pais
    }else if((country !== "" && country !== "Todos los países") && (price === "" || price === "Cualquier precio") && (rooms === "" || rooms === "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.availabilityTo >= dateTo.getTime() && hotel.country === country)})

      //en caso de que el filtro de pais y precio cambien y los demas sigan teniendo sus valores por default
      //solo se muestran los hoteles filtrados por fecha, pais y precio
    }else if((country !== "" && country !== "Todos los países") && (price !== "" && price !== "Cualquier precio") && (rooms === "" || rooms === "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.availabilityTo >= dateTo.getTime() && hotel.country === country && hotel.price == price)})

      //en caso de que todos los filtros cambien su valor por default
      //se mostraran los hoteles filtrados por fecha, pais, precio y habitaciones
    }else if((country !== "" && country !== "Todos los países") && (price !== "" && price !== "Cualquier precio") && (rooms !== "" || rooms !== "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.availabilityTo >= dateTo.getTime() && hotel.country === country && hotel.price == price && hotel.rooms <= rooms)})

      //en caso de que solo el filtro de habitaciones cambie y los demas sigan teniendo sus valores por default
      //solo se muestran los hoteles filtrados por fecha y habitaciones
    }else if((country === "" || country === "Todos los países") && (price === "" || price === "Cualquier precio") && (rooms !== "" && rooms !== "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.rooms <= rooms)})

      //en caso de que solo el filtro de precio cambie y los demas sigan teniendo sus valores por default
      //solo se muestran los hoteles filtrados por fecha y precio
    }else if((country === "" || country === "Todos los países") && (price !== "" && price !== "Cualquier precio") && (rooms === "" || rooms === "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.price == price)})

      //en caso de que solo los filtros de precio y habitaciones cambien 
      //solo se muestran los hoteles filtrados por precio y habitaciones
    }else if((country === "" || country === "Todos los países") && (price !== "" && price !== "Cualquier precio") && (rooms !== "" && rooms !== "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.price == price && hotel.rooms <= rooms)})
    }else if((country !== "" && country !== "Todos los países") && (price === "" || price === "Cualquier precio") && (rooms !== "" && rooms !== "Cualquier tamaño")){
      this.setState({ filteredHotels: hotels.filter( hotel => hotel.availabilityFrom <= dateFrom.getTime() && hotel.country === country && hotel.rooms <= rooms)})
    }
    
  }

  render(){
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }/>
        { this.state.isLoading ? <p> Cargando hoteles </p> : <Hotels hotels={ this.state.filteredHotels } /> }
      </div>
    )
  }
}

export default App