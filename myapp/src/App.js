import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentProfile from './components/StudentProfile';
import FontSizeToggle from './components/FontSizeToggle';
import { students } from './StudentsDb';
import './App.css';

const App =() => {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [fontSize, setFontSize] = useState('16px');

  return (
    <div style={{ fontSize }} className='outerDiv'>
      <h1>Students Information Portal</h1>
      <hr></hr>
      <FontSizeToggle setFontSize={setFontSize} />
      <div className="leftDiv">
        <StudentTable students={students} setSelectedStudent={setSelectedStudent} />
      </div>
      <div className="rightDiv">
        <StudentProfile student={selectedStudent} />
      </div>
    </div>
  );
};

export default App;