import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  constructor() {
    super()
    this.state = ({
      keyword: '',
      weatherArray: [],
      value: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      value: this.state.keyword
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.keyword}&appid=5293e9a557c437e78f9a588d80d33a03`)
      .then(res => res.json())
      .then(res => {
        this.props.dispatch({
          type: "weatherList",
          payload: [res]
        })
      })
  }


  render() {
    let divya = this.props.bangalore && this.props.bangalore.data
    console.log(divya)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" value={this.state.keyword} onChange={this.handleChange} />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.handleClick}>Search</button>
                </form>
              </nav>
              <div className="col-md-7">
                {divya && divya.map((i, index) => {
                  return (
                    <div key={index}>
                      <p className="border my-1">Main: {i.name}</p>
                      <p className="border my-1">Country: {i.sys.country}</p>
                      <p className="border my-1">Weather: {i.weather[0].description}</p>
                      <p className="border my-1">Main: {i.weather[0].main}</p>
                      <p className="border my-1">Humidity: {i.main.humidity}</p>
                      <p className="border my-1">Pressure: {i.main.pressure}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const gettingData = item => {
  return { bangalore: item }
}
export default connect(gettingData)(App);
