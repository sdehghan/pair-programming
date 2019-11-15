import React from 'react'
import './Feet.scss'

class Feet extends React.Component{


    render(){

        return(
            <img src={this.props.bottom} />
        )
    }
}

export default Feet