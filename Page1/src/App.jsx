import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="container mt-5">
      <h3 className="text-center text-dark">User Registration</h3>

      <div className="card p-4 mt-4">
        <input
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-success mt-3">
          Register
        </button>

        <p className="mt-3 text-primary">
          Preview Name: <b>{name}</b>
        </p>
      </div>
    </div>
  );
}

export default App;
