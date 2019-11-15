import React from 'react'
import './Tops.scss'
import top1 from '../../Assets/doll-clothes/top1.png'

class Tops extends React.Component{


    render(){

        return(
        <section>
         <div>
          <img src={top1} alt="top-one"/>
         </div>
         {/* <div>
          <img src="" alt="top-two"/>
         </div>
          <img src="" alt="top-three"/>
         <div>
          <img src="" alt="top-four"/>
         </div>
         <div>
          <img src="" alt="top-five"/>
         </div> */}
        </section>
        )
    }
}

export default Tops