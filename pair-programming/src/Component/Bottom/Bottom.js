import React from 'react'
import './Bottom.scss'
// import bottom1 from '../../Assets/doll-clothes/bottom1.png'
// import bottom2 from '../../Assets/doll-clothes/bottom2.png'
// import bottom3 from '../../Assets/doll-clothes/bottom3.png'
// import bottom4 from '../../Assets/doll-clothes/bottom4.png'
// import bottom5 from '../../Assets/doll-clothes/bottom5.png'

class Bottom extends React.Component{

    state={
        show:true
    }
    clickHandler=(event)=>{
        let image=event.target.src;
        console.log(event.target)
        this.props.changeMiddle(image)
        this.setState({show:false})
    }
    render(){
        

        return(
        <section className="pants-section1">
            <span className="wardrobe-heading">Bottoms</span>

            <div className="image-container" onClick={this.clickHandler}>
            {this.state.show? <img src={this.props.data.bottom1} className="wardrobe-item" alt="bottom-one"/>:null}
            </div>
            <div className="image-container" onClick={this.clickHandler}>
            {this.state.show? <img className="wardrobe-item" src={this.props.data.bottom2} alt="bottom-two"/>:null}
            </div>
            <div className="image-container" onClick={this.clickHandler}>
            {this.state.show? <img className="wardrobe-item" src={this.props.data.bottom3} alt="bottom-three"/>:null}
            </div>
            <div className="image-container" onClick={this.clickHandler}>
            {this.state.show? <img className="wardrobe-item" src={this.props.data.bottom4} alt="bottom-four"/>:null}
            </div>
            <div className="image-container" onClick={this.clickHandler}>
            {this.state.show? <img className="wardrobe-item" src={this.props.data.bottom5} alt="bottom-five"/>:null}
            </div>
        </section>
        )
    }
}

export default Bottom