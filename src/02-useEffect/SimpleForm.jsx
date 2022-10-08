import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'odilon',
        email: 'usuario@mail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }


    useEffect( () => {
        // console.log('useEffect called!')
    }, [])

    useEffect( () => {
        // console.log('formState changed!')
    }, [ formState ])

    useEffect( () => {
        // console.log('email changed!')
    }, [ email ])


    return (
        <>
            <h1> Formulario </h1>
            <hr></hr>

            <input 
                type="text"
                className="form-control"
                placeholder="user name" 
                name="username"
                value={ username }
                onChange={ onInputChange }           
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="usuario@mail.com " 
                name="email"
                value={ email }
                onChange={ onInputChange }           
            />

            {
                ( username === 'odilon2') && <Message/> 
            }
        </>
    )

}