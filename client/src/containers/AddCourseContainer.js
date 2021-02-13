import {useState} from "react";
import {Redirect} from "react-router-dom";

const AddCourseContainer = ({addCourse}) => {

    const [name, setName] = useState("");
    const [town, setTown] = useState("");
    const [rating, setRating] = useState("ONE");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTownChange = (event) => {
        setTown(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCourse({
            name: name,
            town: town,
            rating: rating
        });
        setName("");
        setTown("");
        setRating("");
        <Redirect to="/courses" />
    }


    return(
        <>
            <h1> Add a New Course </h1>
            <form onSubmit={handleSubmit}>

                <label> Course Name: </label> 
                <input type="text"
                       name="name"
                       id="name"
                       value={name}
                       onChange={handleNameChange}
                       required/>

                <label> Town/City: </label>
                <input type="text"
                       name="town"
                       id="town"
                       value={town}
                       onChange={handleTownChange}
                       required/>

                <label> Rating: </label>
                <select name="rating" 
                        id="rating"
                        value={rating}
                        onChange={handleRatingChange}
                        required>
                    <option value="ONE">1</option>
                    <option value="TWO">2</option>
                    <option value="THREE">3</option>
                    <option value="FOUR">4</option>
                    <option value="FIVE">5</option>

                </select>
                <button className="buttons" type="submit"> Save </button>
            </form>
        </>
    );

};

export default AddCourseContainer;