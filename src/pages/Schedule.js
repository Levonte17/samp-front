import {useState} from 'react';
import { Link } from 'react-router-dom';
function Schedule(props) {

    const [ newForm, setNewForm ] = useState({
        name: '',
        date: '',
        time: '',
        description: '',
    });

    const loaded = () => {
        return props.workout.map(event => (
            <div className="event" key={event._id}>

                <h1>
                    <Link to={`/workout/${event._id}`} className="showlink">
                        {event.name}
                        <br/>
                        {event.date}
                    </Link>
                </h1>
            </div>
        ));
    };

const loading = () => {
    return <h1>loading...</h1>;
    
};

const handleChange = (e) => {
    setNewForm({
        ...newForm,
        [e.target.name]: e.target.value
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    if(!newForm.name) delete newForm.name
    props.createWorkout(newForm);
    setNewForm({
        name: '',
        date: '',
        time: '',
        description: '',
    });
};
return(
<div className='pbg'>
    <div className='schedule'>
    <section>
        { props.workout ? loaded() : loading() }
        <form onSubmit={handleSubmit}>
            <label> Name:
                <br/>
                <input type="text" 
                value={newForm.name}
                onChange={handleChange}
                placeholder="Name Of Workout"
                name="name" 
                />
            </label>
            <br/><br/>
            <label> Date:
                <br/>
                <input type="text" 
                value={newForm.date}
                onChange={handleChange}
                placeholder="Workout Date"
                name="date" 
                />
            </label>
                <br/><br/>
            <label> Time:
                <br/>
                <input type="text" 
                value={newForm.time}
                onChange={handleChange}
                placeholder="Workout Time"
                name="time" 
                />
            </label>
                <br/><br/>
            <label> Description:
            <br/>
                <input type="text" 
                value={newForm.description}
                onChange={handleChange}
                placeholder="Workout location"
                name="description" 
                />
            </label>
                <br/><br/>
                <input type="submit" value="Submit" className='submit' />
        </form>
    </section>
    </div>
</div>
)

};
export default Schedule;