import React, { Component } from 'react';
import UserTable from './components/userTable';
import { Provider } from 'react-redux';
import store from './store';
import Chart from './components/chart';
import MapContainer from './components/map.js'
class App extends Component {
  componentDidMount(){
   
  }
  
  render() {
    
    return (
      
    <Provider store={store}>
   
  <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MapContainer/>
          </div>
          <div className="col-md-6">

        <Chart/>
          </div>
        </div>
        <UserTable/>
      </div>


      </div>
      </Provider>
    );
  }
}
export default App;
