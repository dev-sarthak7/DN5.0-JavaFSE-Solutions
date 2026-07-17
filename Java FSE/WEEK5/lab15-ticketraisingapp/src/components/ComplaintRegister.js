import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const referenceNumber = 'REF-' + Math.floor(100000 + Math.random() * 900000);
    alert(
      `Complaint registered successfully!\nEmployee: ${employeeName}\nReference Number: ${referenceNumber}`
    );
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div>
      <h2>Complaint Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name: </label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Complaint: </label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
