import { useSelector, } from 'react-redux';
import { useHistory } from 'react-router-dom'
const pool = require('../modules/pool');
import axios from 'axios';


function ReviewPage() {

    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const supported = useSelector(store => store.supported)
    const comments = useSelector(store => store.comments)

    const history = useHistory();

    const handleSubmit = () => {

        axios.post('/', (req, res) => {
            pool.query(`INSERT INTO "reviews" ("feeling", "understanding", "supported", "comments")
                VALUES ($1, $2, $3, $4)`, [feeling, understanding, supported, comments]);
        }).catch((error) => {
            res.sendStatus(500);
        });
        history.push('/')
    }



    return (
        <>
            <h2>Please Review Your Responses Below:</h2>
            <h3>Feeling: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {supported}</h3>
            <h3>Comments: {comments}</h3>

            <button onClick={handleSubmit}>Next ➡️</button>

        </>
    );

}

export default ReviewPage;