import React from 'react'
import './Leg.scss'
import MIDDLE from '../../Assets/MIDDLE.png';


class Leg extends React.Component{


    render(){

        return(
          <section className="leg">
            <img src={MIDDLE} alt="bottom" />
            <img className="leg-img" src={this.props.middle} />
         </section>
        )
    }
}

export default Leg