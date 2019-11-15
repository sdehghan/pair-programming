import React from 'react'
import './Feet.scss'
import BOTTOM from '../../Assets/BOTTOM.png';

class Feet extends React.Component{


    render(){

        return(
        <section className='feet'>
            <img src={BOTTOM} />
            <img className='feet-img' src={this.props.bottom} />
        </section>
        )
    }
}

export default Feet