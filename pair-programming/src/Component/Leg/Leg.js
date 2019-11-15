import React from 'react'
import './Leg.scss'
import MIDDLE from '../../Assets/MIDDLE.png';
import Bottom from '../Bottom/Bottom';

class Leg extends React.Component{


    render(){

        return(
          <section>
            <img src={this.props.middle} />
            <img src={MIDDLE} />
         </section>
        )
    }
}

export default Leg