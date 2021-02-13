const AddCourseContainer = () => {

    return(
        <>
            <h1> Add a New Course </h1>
            <form>
                <label> Course Name: </label> 
                <input type="text" required/>
                <label> Location: </label>
                <input type="text" required/>
                <label> Rating: </label>
                <select name="rating" id="rating">
                    <option selected="true" disabled>Select Rating</option>
                    <option value="ONE">1</option>
                    <option value="TWO">2</option>
                    <option value="THREE">3</option>
                    <option value="FOUR">4</option>
                    <option value="FIVE">5</option>
                </select>
            </form>
        </>
    );

};

export default AddCourseContainer;