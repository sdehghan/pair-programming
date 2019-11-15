import React from 'react'
import './Bottom.scss'
import bottom1 from '../../Assets/bottom1.png'

class Bottom extends React.Component{


    render(){

        return(
        <section>
         <div>
          <img src={bottom1} alt="bottom-one"/>
         </div>
         {/* <div>
          <img src="" alt="bottom-two"/>
         </div>
          <img src="" alt="bottom-three"/>
         <div>
          <img src="" alt="bottom-four"/>
         </div>
         <div>
          <img src="" alt="bottom-five"/>
         </div> */}
        </section>
        )
    }
}

export default Bottom