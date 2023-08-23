// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

function FeelingPage() {

    const [feeling, setFeeling] = useState(0)


    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {

        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })
        history.push('/understandingpage')
    }



    return (
        <>
            <h2>Enter How you are feeling on a scale of 1 - 5:</h2>
            <input type='number'
                required
                min="0"
                max="5"
                onChange={(event) => setFeeling(event.target.value)}
            />

            <button onClick={handleSubmit}>Next ➡️</button>

        </>
    );

}

export default FeelingPage;