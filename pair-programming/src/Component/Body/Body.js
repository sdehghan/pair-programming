import React from 'react'
import Upperbody from '../Upper-body/Upper-body'
import Leg from '../Leg/Leg'
import Feet from '../Feet/Feet'
import "./Body.scss"


class Body extends React.Component{
  state={
    tops: null,
    middle: null,
    bottom: null
}

    render(){
      console.log('test')
        return(
         <section className="doll-body">
           <Upperbody tops={this.state.tops}></Upperbody>
           <Leg  middle={this.state.middle}></Leg>
           <Feet  bottom={this.state.bottom}></Feet>
         </section>
        )
    }
}

export default Body