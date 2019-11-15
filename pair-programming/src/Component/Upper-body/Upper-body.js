import React from 'react'
import './Upper-body.scss'
import TOP from '../../Assets/TOP.png';

class Upperbody extends React.Component{
  
  
    render(){
        console.log(this.props)
     
        return(
            <section className="upperbody">
             <img src={TOP} />
             <img className="upperbody-img" src={this.props.tops} />
            </section>
        )
    }
}

export default Upperbody