import userEvent from '@testing-library/user-event';
import { useEffect , useState} from 'react';
import './App.css';
import { getCourses } from './services/CTAppServices';

function App() {

  const [courses, setCourses] = useState([]);

  const course = courses.map((element) =>{
    return <p>{element.name}</p>
  });

  useEffect(()=>{
    getCourses().then((courses) => {
      console.log(courses);
      setCourses(courses);
    })
  }, []);

  return (

    <>
      <h1>Now I need to re-learn React!</h1>
      {course}
      
    </>
    
  );

}

export default App;
