import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        <div>
          {data.map((data, i) => (
            <SingleQuestion
              key={data.id}
              isOpen={isOpen}
              onOpen={setIsOpen}
              {...data}
              counter={i}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
