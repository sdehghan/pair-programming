import React from 'react'
import Upperbody from '../Upper-body/Upper-body'
import Leg from '../Leg/Leg'
import Feet from '../Feet/Feet'
import './Feet.scss'


class Body extends React.Component{


    Render(){

        return(
       
         <section>
           <Upperbody></Upperbody>
           <Leg></Leg>
           <Feet></Feet>
         </section>
        )
    }
}

export default Body