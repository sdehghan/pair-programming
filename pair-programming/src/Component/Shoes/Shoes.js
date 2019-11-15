import React from 'react'
import './Shoes.scss'
import shoe1 from '../../Assets/doll-clothes/shoe1.png'

class Shoes extends React.Component{


    render(){

        return(
        <section>
         <div>
          <img src={shoe1} alt="shoe-one"/>
         </div>
         {/* <div>
          <img src="" alt="shoe-two"/>
         </div>
          <img src="" alt="shoe-three"/>
         <div>
          <img src="" alt="shoe-four"/>
         </div>
         <div>
          <img src="" alt="shoe-five"/>
         </div> */}
        </section>
        )
    }
}

export default Shoes