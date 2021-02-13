import { useEffect , useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { getCourses, getCutomers } from './services/CTAppServices';

import HomeContainer from "./containers/HomeContainer";
import CourseContainer from './containers/CoursesContainer';
import BookingContainer from "./containers/BookingContainer";
import AddCourseContainer from "./containers/AddCourseContainer";
import NavBar from "./components/NavBar";

import './App.css';

function App() {

  const [courses, setCourses]      = useState([]);
  const [customers , setCustomers] = useState([]);


  useEffect(()=>{

    getCourses().then((courses) => {
      setCourses(courses);
    })
    getCutomers().then((customers) => {
      setCustomers(customers);
    })

  }, []);

  return (

    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/courses" exact render={()=> <CourseContainer courses={courses} /> } />
          <Route path="/add-course" exact render={()=> <AddCourseContainer /> } />
          <Route path="/booking" exact render={()=> <BookingContainer /> } />
        </Switch>
      </Router>
      
    </>
    
  );

}

export default App;
