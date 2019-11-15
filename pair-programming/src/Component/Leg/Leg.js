import React from 'react'
import './Leg.scss'
import MIDDLE from '../../Assets/MIDDLE.png';


class Leg extends React.Component{


    render(){

        return(
          <section>
            <img src={this.props.middle} />
            <img src={MIDDLE} alt="bottom" />
         </section>
        )
    }
}

export default Leg