import React from 'react'; // Required to define React components

/**
 * This is a functional component called ButtonCompo.
 * It does not use props or state, just logs a message when clicked.
 */
function ButtonCompo() {
  function trial() {
    console.log("trial called");
  }

  return (
    <button onClick={trial}>My Button Compo</button>
  );
}

export default ButtonCompo;
