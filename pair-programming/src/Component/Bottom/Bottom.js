import React from 'react'
import './Bottom.scss'
import bottom1 from '../../Assets/doll-clothes/bottom1.png'

class Bottom extends React.Component{

    clickHandler=(event)=>{
       
          console.log(event.target.name.value)

    }
    render(){
        

        return(
        <section>
         <div  name="top1" onClick={this.clickHandler}>
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