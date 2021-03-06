import React from "react";
import classes from './Input.module.css';

const Input = props => {

    function isInvalid({valid, touched, shouldVAlidate}) {
        return !valid && shouldVAlidate && touched
    }

    const inputType = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {isInvalid(props) 
            ?
                <span>{props.errorMessage || 'Введите верное значение'}</span> 
            : null
            }
            
        </div>
    )
}

export default Input;