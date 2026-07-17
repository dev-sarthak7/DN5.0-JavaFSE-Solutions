import React from 'react';

// Technique 3: logical && operator (prevents rendering when condition is false)
function CourseDetails({ enrolled }) {
  return (
    <div>
      <p>Course Details: React JS Fundamentals</p>
      {enrolled && <p>You are enrolled in this course.</p>}
      {!enrolled && <p>You are not enrolled yet.</p>}
    </div>
  );
}

export default CourseDetails;
