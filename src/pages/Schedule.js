import{useEffect} from 'react';


function Schedule(props) {
    const API_URL = 'http://localhost:4001/api/workout/';
const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        Schedule(data);
    } catch (error) {
       res.status(400).json({'error':'Request Can Not Be Found'});
    }
}

useEffect(() => {
    getData();
}, []);



    return(
<div className="Schedule">
    <h1>Schedule</h1>




</div>
    )
};

export default Schedule;