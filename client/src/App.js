import userEvent from '@testing-library/user-event';
import { useEffect , useState} from 'react';
import './App.css';
import CourseContainer from './containers/CoursesContainer';
import { getCourses } from './services/CTAppServices';

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    getCourses().then((courses) => {
      console.log(courses);
      setCourses(courses);
    })
  }, []);

  return (

    <>
      <h1>Welcome to the home page!</h1>
      <CourseContainer courses = {courses}/>
      
    </>
    
  );

}

export default App;
