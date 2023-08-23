import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'


function CommentsPage() {

    const [comments, setNewComments] = useState('')


    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {

        dispatch({
            type: "ADD_COMMENTS",
            payload: comments
        })
        history.push('/reviewpage')
    }



    return (
        <>
            <h2>Enter Additional Comments Below:</h2>
            <input type="text" placeholder="Comments" value={comments}
                onChange={(event) => setNewComments(event.target.value)} />

            <button onClick={handleSubmit}>Next ➡️</button>

        </>
    );

}

export default CommentsPage;