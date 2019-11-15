import React from 'react'
import './Main.scss'
import Tops from '../Tops/Tops'
import Bottom from '../Bottom/Bottom'
import Shoes from '../Shoes/Shoes';
import Body from '../Body/Body';


class Main extends React.Component{


    render(){

        return(
         <>
         
           <section className="Body">
           <h1 className="Body__title">Dress Me Up!</h1> 
           <div className="doll-and-wardrobe">
                <section className="doll">
                    <Body></Body>
                </section>
                <section className="wardrobe">
                    <Tops></Tops>
                    <Bottom></Bottom>
                    <Shoes></Shoes>
                </section>
              </div>
           </section>
         </>
        )
    }
}

export default Main