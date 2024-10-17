import React, { useState } from 'react';

const Form = ({ student, onUpdate }) => {
  const [name, setName] = useState(student.name);
  const [mssv, setMSSV] = useState(student.mssv);
  const [className, setClassName] = useState(student.className);
  const [gender, setGender] = useState(student.gender);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ name, mssv, className, gender });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Họ và tên:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="mssv">MSSV:</label>
      <input
        type="text"
        id="mssv"
        value={mssv}
        onChange={(e) => setMSSV(e.target.value)}
      />

      <label htmlFor="class">Lớp:</label>
      <input
        type="text"
        id="class"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />

      <label htmlFor="gender">Giới tính:</label>
      <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="men">Nam</option>
        <option value="female">Nữ</option>
        <option value="other">Khác</option>
      </select>

      <button type="submit" style={{ marginTop: 10 }}>Cập nhật</button>
    </form>
  );
};

export default Form;
