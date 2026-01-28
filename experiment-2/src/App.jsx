import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const courses = ["React", "Bootstrap", "Material UI"];

  return (
    <div className="container mt-4">
      <h3 className="text-center">Courses Offered</h3>

      <div className="row mt-3">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3 text-center">
              <h5>{course}</h5>
              <button className="btn btn-outline-primary mt-2">
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
