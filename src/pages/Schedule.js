import {useState} from 'react';
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
                    
                        {event.name}
                        {event.date}
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
    <section>
        { props.workout ? loaded() : loading() }
        <form onSubmit={handleSubmit}>
            <label> Name:
                <input type="text" 
                value={newForm.name}
                onChange={handleChange}
                placeholder="Name Of Workout"
                name="name" 
                />
            </label>
            <label> Date:
                <input type="text" 
                value={newForm.date}
                onChange={handleChange}
                placeholder="Workout Date"
                name="date" 
                />
            </label>
            <label> Time:
                <input type="text" 
                value={newForm.time}
                onChange={handleChange}
                placeholder="Workout Time"
                name="time" 
                />
            </label>
            <label> Description:
                <input type="text" 
                value={newForm.description}
                onChange={handleChange}
                placeholder="Workout location"
                name="description" 
                />
            </label>
                <input type="submit" value="Submit" />
        </form>
    </section>
)

}
export default Schedule;