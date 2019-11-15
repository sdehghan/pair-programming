import React from 'react'
import './Bottom.scss'
import bottom1 from '../../Assets/doll-clothes/bottom1.png'

class Bottom extends React.Component{

    clickHandler=(event)=>{
       
          console.log(event.target.name.value)

    }
    render(){
        

        return(
        <section className="pants-section1">
            <span className="wardrobe-heading">Bottoms</span>
         <div className="image-container" name="top1" onClick={this.clickHandler}>
          <img src={bottom1} className="wardrobe-item" alt="bottom-one"/>
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