import React, { useEffect } from 'react';

function Posts() {

  useEffect(() => {
    console.log("executed after render phase");
  })

  console.log("executed at render phase");

  return (
    <div>

    </div>
  );
}
export default Posts;