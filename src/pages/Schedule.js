import{useEffect} from 'react';


function Schedule(props) {
    const API_URL = 'http://localhost:4000/api/schedule/';
const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        Schedule(data);
    } catch (error) {
        
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