import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import { updateValue } from './actions';

const ComponentA = () => {
    const [newValue, setNewValue] = useState('');

    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateValue(newValue));
    }

    return(
        <div>
            <h2>Component A</h2>
            <input type="text" value={newValue}
            onChange={(e)=>setNewValue(e.target.value)} />

            <button onClick={handleUpdate}>Update Value</button>
        </div>
    )
}

export default ComponentA;