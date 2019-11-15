import React from 'react'
import './Bottom.scss'
// import bottom1 from '../../Assets/doll-clothes/bottom1.png'
// import bottom2 from '../../Assets/doll-clothes/bottom2.png'
// import bottom3 from '../../Assets/doll-clothes/bottom3.png'
// import bottom4 from '../../Assets/doll-clothes/bottom4.png'
// import bottom5 from '../../Assets/doll-clothes/bottom5.png'

class Bottom extends React.Component{

    state={
        show1:true,
        show2:true,
        show3:true,
        show4:true,
        show5:true
    }
    clickHandler=(event,i)=>{
        let image=event.target.src;
        console.log(event.target)
        this.props.changeMiddle(image)
        if (i===0){
            this.setState({show1:false})
          }else if (i===1){
              this.setState({show2:false})
          }else if (i===2){
              this.setState({show3:false})
          }else if (i===3){
              this.setState({show4:false})
          }else if (i===4){
              this.setState({show5:false})
          }
          else if (i===4){
              this.setState({show5:false})
          }
    }
    render(){
        

        return(
        <section className="pants-section1">
            <span className="wardrobe-heading">Bottoms</span>

         <div className="image-container" onClick={(event)=>this.clickHandler(event,0)}>
          {this.state.show1? <img src={this.props.data.bottom1} alt="bottom-one"/>:null}
         </div>
         <div className="image-container" onClick={(event)=>this.clickHandler(event,1)}>
          {this.state.show2? <img src={this.props.data.bottom2} alt="bottom-two"/>:null}
         </div>
         <div className="image-container" onClick={(event)=>this.clickHandler(event,2)}>
          {this.state.show3? <img src={this.props.data.bottom3} alt="bottom-three"/>:null}
         </div>
         <div className="image-container" onClick={(event)=>this.clickHandler(event,3)}>
          {this.state.show4? <img src={this.props.data.bottom4} alt="bottom-four"/>:null}
         </div>
         <div className="image-container" onClick={(event)=>this.clickHandler(event,4)}>
          {this.state.show5? <img src={this.props.data.bottom5} alt="bottom-five"/>:null}
         </div>
        </section>
        )
    }
}

export default Bottom