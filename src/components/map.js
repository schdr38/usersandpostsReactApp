import React, { Component } from 'react';
import { connect } from 'react-redux';
import  './map.css';

export class MapContainer extends Component {

  

  initMap= () =>{
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 0
    });
    



  }
  componentDidMount(){
  //window.initMap = this.initMap();
  this.initMap();
  }
  componentDidUpdate(){
    this.initMap();
    this.props.locations.forEach(element => {
      var location = {lat:parseFloat(element.location.lat),lng:parseFloat(element.location.lng)}
      this.addMarker(location);
    });
  
  }
addMarker(location){
  var marker = new window.google.maps.Marker({
    position: location,
    map: this.map,
    title: 'Hello World!'
  });
}


  render() { 
    return(
      <div id='map'></div>
    )
  }
}


function mapStateToProps(state){
  return {
      locations: state.users.locations
  }
}

export default (connect(mapStateToProps)(MapContainer));