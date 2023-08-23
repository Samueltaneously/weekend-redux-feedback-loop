// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

function SupportedPage() {

    const [supported, setSupported] = useState(0)


    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {

        dispatch({
            type: "ADD_SUPPORTED",
            payload: supported
        })
        history.push('/commentspage')
    }



    return (
        <>
            <h2>How Supported Are You Feeling:</h2>
            <input type='number'
                required
                min="0"
                max="5"
                onChange={(event) => setSupported(event.target.value)}
            />

            <button onClick={handleSubmit}>Next ➡️</button>

        </>
    );

}

export default SupportedPage;