import { useEffect } from "react"


export const Message = () => {

    useEffect( () => {

    const onMuseMove = ({  x, y }) => {
        const coords = { x, y };
        console.log( coords );
    }
      
    window.addEventListener( 'mousemove', onMuseMove )
    
    return () => {
        window.removeEventListener( 'mousemove', onMuseMove )
    }
    }, [])
    

    return (
        <>
            <h1> Usuario ya existe </h1>
        </>
    )

}