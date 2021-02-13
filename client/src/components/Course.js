const Course = ({course}) => {

    return(
        <>
            <h2>Course Name: {course.name}</h2>
            <h3>Course Location: {course.town} </h3>
            <h3>Course Rating: {course.rating}</h3>
        </>
    )

}

export default Course; 