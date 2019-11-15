import React from 'react'
import './Upper-body.scss'


class Upperbody extends React.Component{
  

    render(){
      console.log(this.props)
        return(
            <img src={this.props.tops} />
        )
    }
}

export default Upperbody