import React from 'react';

// Technique 1: if-else conditional rendering
function BookDetails({ available }) {
  if (available) {
    return <p>Book Details: "Clean Code" is available in the library.</p>;
  } else {
    return <p>Book Details: "Clean Code" is currently unavailable.</p>;
  }
}

export default BookDetails;
