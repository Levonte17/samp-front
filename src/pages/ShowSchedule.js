
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function ShowSchedule({ workout, deleteWorkout, updateWorkout }) {
    const { id } = useParams();
    
    const event = workout ? workout.find(p => p._id === id) : null;

    const navigate = useNavigate();
    
    const [editForm, setEditForm] = useState({
        name: '',
        date: '',
        time: '',
        description: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        updateWorkout(editForm, id);
        setIsEditing(false);
    };
    
    const loading = () => {
        return <h1>Loading ... </h1>;
    };
    
    const loaded = () => {
        
        const handleDelete = () => {
            deleteWorkout(event._id)
            navigate('/workout');
        };

        const handleEdit = () => {
            setIsEditing(prevState => !prevState);
            };

        return (
            <div className='pbg'>
            <section className='show'>

                <h1>
                    {event.name}
                </h1>

                <h3>
                    {event.date}
                </h3>

                <h3>
                    {event.time}
                </h3>

                <h3>
                    {event.description}
                </h3>

                <button onClick={handleEdit}>
                    {isEditing ? 'Cancel Edit' : 'Edit'}
                </button>

                <button onClick={handleDelete}>
                    Delete
                </button>
            </section>
            </div>
        )
    };

    useEffect(() => {
        if(event) {
            setEditForm(event);
        }
    }, [event]);

    return (
        <section>
            {workout ? loaded() : loading()}
            { isEditing && 
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <input
                            type="text" 
                            value={editForm.name}  
                            onChange={handleChange} 
                            name="name" 
                        />
                    </label>
                    <label>Date:
                        <input
                            type="text" 
                            value={editForm.date}  
                            onChange={handleChange} 
                            name="date" 
                        />
                    </label>
                    <label>Time:
                        <input
                            type="text" 
                            value={editForm.time}  
                            onChange={handleChange} 
                            name="time" 
                        />
                    </label>
                    <label>Description:
                        <input
                            type="text" 
                            value={editForm.description}  
                            onChange={handleChange} 
                            name="description" 
                        />
                    </label>
                    <input type="submit" value="Update" />
                </form>
            }
        </section>
    )
};

export default ShowSchedule;