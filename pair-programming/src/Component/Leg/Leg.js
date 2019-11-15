import React from 'react'
import './Leg.scss'


class Leg extends React.Component{


    render(){

        return(
            <img src={this.props.middle} />
        )
    }
}

export default Leg