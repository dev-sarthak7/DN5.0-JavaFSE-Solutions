import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="App">
      <h1>Blogger App - Conditional Rendering</h1>
      <BookDetails available={true} />
      <BlogDetails published={false} />
      <CourseDetails enrolled={true} />
    </div>
  );
}

export default App;
