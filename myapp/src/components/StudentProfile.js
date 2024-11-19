import React from 'react';
import './StudentProfile.css'

const StudentProfile = ({ student }) => {
  return (
    <div className="student-profile">
      <h2>Student Profile</h2>
        <table border="1px">
            <tr>
                <td rowSpan={9} className='img'>
                <img
                    className="profile"
                    src={require(`../CSSIMG/profilepic/${student.profilePic}`)}
                    alt={`${student.firstName} ${student.lastName}`}
                />
                </td>
                
            </tr>
            <tr>
                
            <td><p><strong>ID:</strong> {student.studentId}</p></td>
            </tr>
            <tr>
            
            <td><p><strong>Name:</strong> {student.firstName} {student.lastName}</p></td>
            </tr>
            <tr>
            
            <td><p><strong>Age:</strong> {student.age}</p></td>
            </tr>
            <tr>
            
            <td><p><strong>Gender:</strong> {student.gender}</p></td>
            </tr>
            <tr>
            
            <td><p><strong>Course:</strong> {student.course}</p></td>
            </tr>
            <tr>
            
            <td><p><strong>Country:</strong> {student.address.country}</p></td>
            </tr>
            <tr>
            
            <td><p><strong>City:</strong> {student.address.city}</p></td>
            </tr>
            <tr>
            
            <td><p><strong>Skills:</strong> {student.skills.join(', ')}</p></td>
            </tr>
        </table>
    </div>
  );
};

export default StudentProfile;
