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

              <h1>Dress Me Up!</h1> 
              <section>
              <Body></Body>
              </section>
              <section>
                  <Tops></Tops>
                  <Bottom></Bottom>
                  <Shoes></Shoes>
              </section>
           </section>
         </>
        )
    }
}

export default Main