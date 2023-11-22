import React from 'react';
import {useForm, Controller, useFieldArray} from 'react-hook-form'

const DynamicForm = () => {
    const { control, handleSubmit} = useForm({
        defaultValues:{
            items: [{name:'Item'}]
        }
    });

    const { fields, append, remove } = useFieldArray({control, name:'items'});

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item,index) => (
                <div key = {item.id}>
                    <label htmlFor={`items[${index}].name`}>Item {index + 1}</label>
                    <Controller
                    name={`items[${index}].name`}
                    control={control}
                    defaultValue={item.name}
                    render={({ field}) => <input {...field} />} />          

                    <button type="button" onClick={() => remove(index)}>Remove</button>
                </div>
                ))}

                <button type='button' 
                onClick={() => append({name: `Item ${fields.length + 1}`})}>
                    Add Input Box
                </button>
        </form>
    )

}

export default DynamicForm;