import React from 'react'
import './Shoes.scss'
// import shoe1 from '../../Assets/doll-clothes/shoe1.png'
// import shoe2 from '../../Assets/doll-clothes/shoe2.png'
// import shoe3 from '../../Assets/doll-clothes/shoe3.png'
// import shoe4 from '../../Assets/doll-clothes/shoe4.png'
// import shoe5 from '../../Assets/doll-clothes/shoe5.png'

class Shoes extends React.Component{
    
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
        this.props.changeBottom(image)
        this.setState({show:false})

        if (i===0){
          this.setState({
              show1:false,
              show2:true,
              show3:true,
              show4:true,
              show5:true
          })
        }else if (i===1){
            this.setState({
              show2:false,
              show1:true,
              show3:true,
              show4:true,
              show5:true
            }
          )
        }else if (i===2){
            this.setState({
              show3:false,
              show2:true,
              show1:true,
              show4:true,
              show5:true
          })
        }else if (i===3){
            this.setState({
              show4:false,
              show3:true,
              show2:true,
              show1:true,
              show5:true
          })
        }else if (i===4){
            this.setState({
              show5:false,
              show4:true,
              show3:true,
              show2:true,
              show1:true,
          })
      }
    }
    render(){
        return(
        <section className="shoes-section">
            <span className="wardrobe-heading">Shoes</span>
           
          <div className="image-container" onClick={(event)=>this.clickHandler(event,0)}>
            {this.state.show1?  <img src={this.props.data.shoe1} alt="shoe-one"/>:null}
          </div>
          <div className="image-container"onClick={(event)=>this.clickHandler(event,1)}>
            {this.state.show2?  <img src={this.props.data.shoe2} alt="shoe-two"/>:null}
          </div>
          <div className="image-container" onClick={(event)=>this.clickHandler(event,2)}>
            {this.state.show3?  <img src={this.props.data.shoe3} alt="shoe-three"/>:null}
          </div>
          <div className="image-container" onClick={(event)=>this.clickHandler(event,3)}>
            {this.state.show4?  <img src={this.props.data.shoe4} alt="shoe-four"/>:null}
          </div>
          <div className="image-container" onClick={(event)=>this.clickHandler(event,4)}>
            {this.state.show5?  <img src={this.props.data.shoe5} alt="shoe-five"/>:null}
          </div>
        </section>
        )
    }
}

export default Shoes