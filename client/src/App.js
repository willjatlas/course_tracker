import { useEffect , useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import CourseContainer from './containers/CoursesContainer';
import NavBar from "./components/NavBar";
import { getCourses, getCutomers } from './services/CTAppServices';

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
          <Route path="/" component={HomeContainer} />
          <Route path="/courses" exact render={()=> <CourseContainer courses={courses} /> } />
        </Switch>
      </Router>
      
    </>
    
  );

}

export default App;
