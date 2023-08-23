// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

function UnderstandingPage() {

    const [understanding, setUnderstanding] = useState(0)


    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {

        dispatch({
            type: "ADD_UNDERSTANDING",
            payload: understanding
        })
        history.push('/supportedpage')
    }



    return (
        <>
            <h2>How Well Do You Feel You're Understanding:</h2>
            <input type='number'
                required
                min="0"
                max="5"
                onChange={(event) => setUnderstanding(event.target.value)}
            />

            <button onClick={handleSubmit}>Next ➡️</button>

        </>
    );

}

export default UnderstandingPage;