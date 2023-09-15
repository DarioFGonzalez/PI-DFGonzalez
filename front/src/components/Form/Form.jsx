import { useState } from "react";
import style from './Form.module.css';

const Form = ({login})=>
{
    const [userData, setUserData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({email: '', password: ''});

    const validate = (form)=>
    {
        switch(event.target.name)
        {
            case 'email':
                {
                    if(!form.email)
                    {
                        setErrors({...errors, email:'Email Vacío'});
                    }
                    else
                    {
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email) && /^[\s\S]{0,35}$/.test(form.email)?
                        setErrors({...errors, email: ''}):
                        setErrors({...errors, email: 'Email inválido'});
                    }
                    break;
                }
            case 'password':
                {
                    if(!form.password)
                    {
                        setErrors({...errors, password:'Password vacío'});
                    }
                    else
                    {
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)&&/^[\s\S]{6,10}$/.test(form.password)?
                        setErrors({...errors, password: ''}):
                        setErrors({...errors, password: 'Password inválido'});
                    }
                    break;
                }
        }
    }

    const handleChange = (event)=>
    {
        let name = event.target.name;
        let value = event.target.value;
        setUserData({...userData, [name]: value});
        validate({...userData, [name]: value});
    }

    const submitHandler = (event)=>
    {
        event.preventDefault();
        if(!errors.email && !errors.password)
        {
            login(userData);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='email'> E-Mail: </label>
            <input className={errors.email? style.inErr : style.inRig} type='text' name='email' onChange={handleChange} /> <br/>
            <span className={style.error}>{errors.email}</span><br/>
            <label htmlFor='password'> Password:  </label>
            <input className={errors.password? style.inErr : style.inRig} type='text' name='password' onChange={handleChange} />
            <span className={style.error}>{errors.password}</span><br/>
            <button type="submit">SUBMIT</button>
        </form>

    )
}

export default Form;