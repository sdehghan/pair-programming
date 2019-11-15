import React from 'react'
import Upperbody from '../Upper-body/Upper-body'
import Leg from '../Leg/Leg'
import Feet from '../Feet/Feet'
import "./Body.scss"



class Body extends React.Component{

   
    render(){
      console.log(this.props)
        return(
         <section className="doll-body">
           <Upperbody tops={this.props.body.tops}></Upperbody>
           <Leg  middle={this.props.body.middle}></Leg>
           <Feet  bottom={this.props.body.bottom}></Feet>
         </section>
        )
    }
}

export default Body