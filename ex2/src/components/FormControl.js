const FormControl = (props) => {
    return (
        <div className="form-control">
            {
                props.type !== 'radio' && props.type !== 'submit' &&
                <label htmlFor={props.id}>{props.labelText}</label>
            }

            {
                props.type === "textarea" &&
                    <textarea 
                        name={props.name} 
                        id={props.id}
                        value={props.value} 
                        cols="30" 
                        rows="10"
                    >
                        {props.value}
                    </textarea>
            }

            {
                props.type !== 'radio' && props.type !== 'textarea' &&
                    <input 
                        type={props.type} 
                        id={props.id} 
                        name={props.name} 
                        value={props.type === 'submit' ? props.labelText : props.value}
                    />
            }

            {
                props.type === 'radio' && 
                    <fieldset>
                        <legend>{props.labelText}</legend>
                        <input 
                            type={props.type} 
                            id={props.firstId} 
                            name={props.name} 
                            checked={props.firstChecked}
                        /> 
                        <label htmlFor={props.firstId}>{props.firstValue}</label>
                        <input 
                            type={props.type} 
                            id={props.secondId} 
                            name={props.name} 
                            value={props.firstValue} 
                            checked={!props.firstChecked}
                        />
                        <label htmlFor={props.secondId}>{props.secondValue}</label>
                    </fieldset>
            }
        </div>
    )
}

export default FormControl
