import React from 'react'
import './Upper-body.scss'
import TOP from '../../Assets/TOP.png';

class Upperbody extends React.Component{
  
  
    render(){
        console.log(this.props)
     
        return(
            <section>
             <img src={this.props.tops} />
             <img src={TOP} />
            </section>
        )
    }
}

export default Upperbody