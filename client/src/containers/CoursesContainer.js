import Course from "../components/Course";

const CourseContainer = ({courses}) => {
    
    const course = courses.map((element) =>{
        return <Course course = {element}  key = {element.id}/>
    });

    return (
        <>
            <h1> Available Courses </h1>
            {course}
        </>
    );
};

export default CourseContainer;