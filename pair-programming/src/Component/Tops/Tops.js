import React from 'react'
import './Tops.scss'
// import top1 from '../../Assets/doll-clothes/top1.png'
// import top2 from '../../Assets/doll-clothes/top2.png'
// import top3 from '../../Assets/doll-clothes/top3.png'
// import top4 from '../../Assets/doll-clothes/top4.png'
// import top5 from '../../Assets/doll-clothes/top5.png'
class Tops extends React.Component{
    
    state={
        show:true
    }

    clickHandler=(event)=>{
        let image=event.target.src;
        console.log(event.target)
        this.props.changeTop(image)
        this.setState({show:false})
    }

    render(){
       console.log(this.props)
        return(
        <section className="tops-section">
        <span className="wardrobe-heading">Tops</span>
         <div className="image-container" onClick={this.clickHandler}>
          {this.state.show? <img className="wardrobe-item" src={this.props.data.top1} alt="top-one"/> :null}
         </div>
         <div onClick={this.clickHandler}>
          {this.state.show? <img className="wardrobe-item" src={this.props.data.top2} alt="top-two"/> :null}
         </div>
         <div className="image-container" onClick={this.clickHandler}>
          {this.state.show? <img className="wardrobe-item" src={this.props.data.top3} alt="top-three"/> :null}
         </div>
         <div className="image-container" onClick={this.clickHandler}>
          {this.state.show? <img className="wardrobe-item" src={this.props.data.top4} alt="top-four"/> :null}
         </div>
         <div className="image-container" onClick={this.clickHandler}>
          {this.state.show? <img className="wardrobe-item" src={this.props.data.top5} alt="top-five"/> :null}
         </div>
        </section>
        )
    }
}

export default Tops