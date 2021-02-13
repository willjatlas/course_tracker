const baseURL = "http://localhost:8080/"

// GET - get all courses.
export const getCourses = () => {
    return fetch(baseURL + "courses")
        .then(res => res.json())
};

// GET - get all customers 
export const getCutomers  = () => {
    return fetch(baseURL + "customers")
        .then(res => res.json())
};

// POST - add a course to the db.
export const postCourse = (payload) => {
    return fetch(baseURL + "courses", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {"content-Type" : "application/json"}
    })
    .then(res => res.json())
} 