import React from 'react'
import './Main.scss'


class Main extends React.Component{
   
    state={
        Tops:null,
        bottom:null,
        Shoes:null
    }

    render(){

        return(
         <>
           <section className="Body">

              <h1>Hello</h1> 
              {/* <Body></Body>
              <section>
                  <Tops></Tops>
                  <Bottom></Bottom>
                  <Shoes></Shoes>
              </section> */}
           </section>
         </>
        )
    }
}

export default Main