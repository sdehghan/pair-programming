import React from 'react'
import './Feet.scss'
import BOTTOM from '../../Assets/BOTTOM.png';

class Feet extends React.Component{


    render(){

        return(
        <section>
            <img src={this.props.bottom} />
            <img src={BOTTOM} />
        </section>
        )
    }
}

export default Feet