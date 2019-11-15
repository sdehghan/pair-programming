import React from 'react'
import './Shoes.scss'
// import shoe1 from '../../Assets/doll-clothes/shoe1.png'
// import shoe2 from '../../Assets/doll-clothes/shoe2.png'
// import shoe3 from '../../Assets/doll-clothes/shoe3.png'
// import shoe4 from '../../Assets/doll-clothes/shoe4.png'
// import shoe5 from '../../Assets/doll-clothes/shoe5.png'

class Shoes extends React.Component{
    
    state={
        show:true
    }
    clickHandler=(event)=>{
        let image=event.target.src;
        console.log(event.target)
        this.props.changeBottom(image)
        this.setState({show:false})
    }
    render(){
        return(
         <section>
          <div onClick={this.clickHandler}>
            {this.state.show?  <img src={this.props.data.shoe1} alt="shoe-one"/>:null}
          </div>
          <div onClick={this.clickHandler}>
            {this.state.show?  <img src={this.props.data.shoe2} alt="shoe-two"/>:null}
          </div>
          <div onClick={this.clickHandler}>
            {this.state.show?  <img src={this.props.data.shoe3} alt="shoe-three"/>:null}
          </div>
          <div onClick={this.clickHandler}>
            {this.state.show?  <img src={this.props.data.shoe4} alt="shoe-four"/>:null}
          </div>
          <div onClick={this.clickHandler}>
            {this.state.show?  <img src={this.props.data.shoe5} alt="shoe-five"/>:null}
          </div>
        </section>
        )
    }
}

export default Shoes