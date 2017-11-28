import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

import Title from './components/Title';
import data from './requests/places';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }

  places(){
    return data.places.map(place=>{
      return(
        <div className="col-xs-12 col-sm-4">
          <Card>
            <CardMedia>
              <img src={process.env.PUBLIC_URL + place.imageUrl}/>
            </CardMedia>
            <CardTitle title={place.title}></CardTitle>
            <CardText>{place.description}</CardText>
          </Card>
        </div>

      );
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div className="container">
            <div className="Header-main">
              <Title></Title>
              <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/places-icon.png'}/>
            </div>
            <div>
              <ul>
                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{'backgroundColor': redA400}}>
                        <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>Calificaciones con emociones</h3>
                        <p>Califica tus lugares con experiencias, no con números</p>
                      </div>
                    </div>
                  </CardText>
                </Card>

                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{'backgroundColor': lightBlueA400}}>
                        <img src={process.env.PUBLIC_URL + '/images/no-internet.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>¿Sin internet? Sin problemas</h3>
                        <p>Places funciona sin internet o conexiones lentas</p>
                      </div>
                    </div>
                  </CardText>
                </Card>

                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{'backgroundColor': amberA400}}>
                        <img src={process.env.PUBLIC_URL + '/images/top.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>Tus lugares favoritos</h3>
                        <p>Define tu lista de sitios favoritos en el sitio</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
              </ul>
            </div>
          </div>
        </div>
        <div style={{'backgroundColor': indigo400, 'padding': '50px', 'color': 'white'}}>
          <h3 style={{'fontSize': '24px'}}>Sitios Populares</h3>
          <div className="row">
            {this.places()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
