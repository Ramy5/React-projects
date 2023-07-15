import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List data={people} />
        <button type="button" onClick={() => setPeople([])}>
          Clear all
        </button>
      </div>
    </main>
  );
}

export default App;
