import Course from "../components/Course";

const CourseContainer = ({courses}) => {
    
    const course = courses.map((element) =>{
        return <Course course = {element}  key = {element.id}/>
    });

    return (
        <>
            <h1> this is the course container </h1>
            {course}
        </>
    );
};

export default CourseContainer;