import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    })

    // const { username, email, password } = formState;



    return (
        <>
            <h1> Formulario con Custon hook </h1>
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

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="usuario@mail.com " 
                name="password"
                value={ password }
                onChange={ onInputChange }           
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2"> Borrar </button>

        </>
    )

}