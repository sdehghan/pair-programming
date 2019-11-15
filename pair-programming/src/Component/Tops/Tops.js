import React from 'react'
import './Tops.scss'
// import top1 from '../../Assets/doll-clothes/top1.png'
// import top2 from '../../Assets/doll-clothes/top2.png'
// import top3 from '../../Assets/doll-clothes/top3.png'
// import top4 from '../../Assets/doll-clothes/top4.png'
// import top5 from '../../Assets/doll-clothes/top5.png'
class Tops extends React.Component{
    
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
        this.props.changeTop(image)
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
       console.log(this.props)
        return(
        <section>
         <div  onClick={(event)=>this.clickHandler(event, 0)}>
          {this.state.show1? <img src={this.props.data.top1} alt="top-one"/> :null}
         </div>
         <div onClick={(event)=>this.clickHandler(event,1)}>
          {this.state.show2? <img src={this.props.data.top2} alt="top-two"/> :null}
         </div>
         <div  onClick={(event)=>this.clickHandler(event,2)}>
          {this.state.show3? <img src={this.props.data.top3} alt="top-three"/> :null}
         </div>
         <div  onClick={(event)=>this.clickHandler(event,3)}>
          {this.state.show4? <img src={this.props.data.top4} alt="top-four"/> :null}
         </div>
         <div  onClick={(event)=>this.clickHandler(event,4)}>
          {this.state.show5? <img src={this.props.data.top5} alt="top-five"/> :null}
         </div>
        </section>
        )
    }
}
export default Tops