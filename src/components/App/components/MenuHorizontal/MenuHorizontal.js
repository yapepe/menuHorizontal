import './assets/MenuHorizontal.css'
import { useEffect, useState } from 'react'

export default function MenuHorizontal( {lista} ) {
    
    let linkKey = 0

    
    const [ mostrarHam, setMostrarHam ] = useState(false)
    const [ mostrarListaVertical, setMostrarListaVertical ] = useState(false)

    useEffect( ()=>{
        const checarCondicionResize = ()=>{
            if ( window.innerWidth < 680 ) {
                setMostrarHam(true)
            } else {
                setMostrarHam(false)
            }
        }
        checarCondicionResize()
        window.addEventListener('resize', checarCondicionResize )
        
        
        //se agrega el return para que no la haga de a pedo el router despues
        return (() => {
            window.removeEventListener('resize', checarCondicionResize)
        })
     }, [] )

    return (
      <div className="MenuHorizontal">
          { (mostrarHam)
    ? <div className="MenuHorizontal__hamburger" onClick={ () => setMostrarListaVertical(!mostrarListaVertical) }>=
        { (mostrarListaVertical)
        ?<div className="MenuHorizontal__lista__vertical">
            { (Array.isArray(lista))
                    ? lista.map( link => {
                        linkKey++
                        return(
                            <div 
                                key={ linkKey } 
                                className='MenuHorizontal__lista__vertical__links'>
                                { link }
                            </div>
                        )
                    })
                    : console.log('CRITICAL ERROR: la entrada  no es un array')    
                }
            </div>
        : null
        }
        </div>
    : <div className="MenuHorizontal__lista__horizontal">
        { (Array.isArray(lista))
                ? lista.map( link => {
                    linkKey++
                    return(
                        <div 
                            key={ linkKey } 
                            className='MenuHorizontal__lista__horizontal__links'>
                            { link }
                        </div>
                    )
                })
                : console.log('CRITICAL ERROR: la entrada  no es un array')    
            }
        </div>
        }
      </div>
    )
}