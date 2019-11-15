import React from 'react'
import './Main.scss'
import Tops from '../Tops/Tops'
import Bottom from '../Bottom/Bottom'
import Shoes from '../Shoes/Shoes';
import Body from '../Body/Body';


import top1 from '../../Assets/doll-clothes/top1.png'
import top2 from '../../Assets/doll-clothes/top2.png'
import top3 from '../../Assets/doll-clothes/top3.png'
import top4 from '../../Assets/doll-clothes/top4.png'
import top5 from '../../Assets/doll-clothes/top5.png'
import bottom1 from '../../Assets/doll-clothes/bottom1.png'
import bottom2 from '../../Assets/doll-clothes/bottom2.png'
import bottom3 from '../../Assets/doll-clothes/bottom3.png'
import bottom4 from '../../Assets/doll-clothes/bottom4.png'
import bottom5 from '../../Assets/doll-clothes/bottom5.png'
import shoe1 from '../../Assets/doll-clothes/shoe1.png'
import shoe2 from '../../Assets/doll-clothes/shoe2.png'
import shoe3 from '../../Assets/doll-clothes/shoe3.png'
import shoe4 from '../../Assets/doll-clothes/shoe4.png'
import shoe5 from '../../Assets/doll-clothes/shoe5.png'
class Main extends React.Component{
    state={
        tops: null,
        middle: null,
        bottom: null,
        data:{

            toppieces:{
         
              top1:top1,
              top2:top2,
              top3:top3,
              top4:top4,
              top5:top5
        },
        bottompieces:{

            bottom1:bottom1,
            bottom2:bottom2,
            bottom3:bottom3,
            bottom4:bottom4,
            bottom5:bottom5
        },
        shoespieces:{

            shoe1:shoe1,
            shoe2:shoe2,
            shoe3:shoe3,
            shoe4:shoe4,
            shoe5:shoe5
        
        }
    }
}
     changeTop=(image)=>{
    
      this.setState({tops:image})
     }
     changeMiddle=(image)=>{
    
        this.setState({middle:image})
    }
    changeBottom=(image)=>{
    
        this.setState({bottom:image})
    }
    

    render(){
     
    
        return(
         <>
         
           <section className="Body">
            <div className='body-box'>
           <h1 className="Body__title">Dress Me Up!</h1> 
           </div>
           <div className="doll-and-wardrobe">
                <section className="doll">
                    <Body body={this.state}></Body>
                </section>
              
              <section className="wardrobe-container">
                  <Tops changeTop={this.changeTop} data={this.state.data.toppieces}></Tops>
                  <Bottom changeMiddle={this.changeMiddle} data={this.state.data.bottompieces}></Bottom>
                  <Shoes changeBottom={this.changeBottom} data={this.state.data.shoespieces}></Shoes>
              </section>
            </div>
        </section>
         </>
        )
    }
}

export default Main