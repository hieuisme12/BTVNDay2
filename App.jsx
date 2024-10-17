import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Form from './Form';

function App() {
  const [student, setStudent] = useState({
    name: 'Lâm Trung Hiếu',
    mssv: '21112581',
    className: 'React 2024',
    gender: 'men',
  });

  const handleUpdate = (updatedStudent) => {
    setStudent(updatedStudent);
  };

  return (
    <div>
      <h1>Thông tin sinh viên</h1>
      <div>
        <span>Họ và tên: </span>
        <span>{student.name}</span>
      </div>
      <p>Mô tả: Sinh viên SIÊU ĐẸP TRAI</p>
      <i>MSSV: {student.mssv}</i>
      <br />
      <b>Lớp: {student.className}</b>
      <br />
      <span>Khóa: K17</span>
      <div>
        Avatar: <img src={reactLogo} alt="React Logo" />
      </div>
      <br />
      <Form student={student} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
