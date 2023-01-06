import React, { useEffect, useState } from "react";

function Vidya() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setName(json));
    console.log(name);
  });

  return (
    <div>
      <h1>In Vidya Component</h1>

      {name
        .filter((n) => n.id <= 4)

        .map((n) => {
          return (
            <div>
              <h3 style={{ textAlign: "center", color: "red" }}>{n.email}</h3>
            </div>
          );
        })}
    </div>



);
}

export default Vidya;
