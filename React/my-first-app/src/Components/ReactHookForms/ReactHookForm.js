import React from 'react';
import { useForm, Controller} from 'react-hook-form';

const ReactHookForm = () => {
    const {handleSubmit, control, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>

            <Controller name="name"
            control={control}
            defaultValue=''
            rules={{required:'Name is required'}}
            render = {({field}) => <input {...field} />}
           />
           {errors.name && <p>{errors.name.message}</p>}

           <label>Name:</label>

            <Controller name="email"
            control={control}
            defaultValue=''
            rules={{required:'Email is required', pattern: {value: /^\S+@\S+$/i, message:'Invalid email addrress'}}}
            render = {({field}) => <input {...field} />}
           />
           {errors.email && <p>{errors.email.message}</p>}

           <button type="submit">Submit</button>
        </form>
    )
}

export default ReactHookForm;