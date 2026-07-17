import React from 'react';
import EmployeeCard from './EmployeeCard';

const employees = [
  { id: 1, name: 'Anita Sharma', designation: 'Software Engineer' },
  { id: 2, name: 'Ravi Verma', designation: 'Senior Developer' },
  { id: 3, name: 'Priya Nair', designation: 'QA Analyst' }
];

function EmployeesList() {
  return (
    <div>
      <h2>Employees List</h2>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeesList;
