import React, {useReducer} from 'react';

//Reducer Function
const formReducer = (state, action) => {
    switch(action.type){
        case 'SET_FIELD':
            return {...state, [action.field]:action.value};
        case 'RESET':
            return {firstName:'', lastName:'', email:''};
        default:
            return state;
    }
}

const UseReducerForm = () =>{
    const [formData, dispatch] = useReducer(formReducer, {
        firstName:'',
        lastName:'',
        email:''
    });

    const handleInputChange = (field, value) =>{
        dispatch({type:'SET_FIELD', field,value})
    }

    const handleFormReset = () =>{
        dispatch({type:'RESET'});
    }

    return(
        <div>
            FirstName:
            <input type="text" value={formData.firstName}
            onChange = {(e) => handleInputChange('firstName',e.target.value)} />
            
            Last Name:
            <input type="text" value={formData.lastName}
            onChange = {(e) => handleInputChange('lastName',e.target.value)} />

            Email:
            <input type="email" value={formData.email}
            onChange = {(e) => handleInputChange('email',e.target.value)} />

            <br />
            <button onClick={handleFormReset}>Reset Form</button>

            <div>
                <strong>Form Data</strong>
                <pre>{JSON.stringify(formData,null,2)}</pre>
            </div>
        </div>
    )
}

export default UseReducerForm;