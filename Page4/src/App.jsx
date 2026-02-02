import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const studentStatus = "Online";   // Online / Busy / Offline
  const staffStatus = "Offline";    // Online / Busy / Offline

  const getStatusColor = (status) => {
    if (status === "Online") return "bg-success";
    if (status === "Busy") return "bg-warning text-dark";
    return "bg-danger";
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      <div className="d-flex flex-column w-100">

        {/* STUDENT ROW */}
        <div className="d-flex align-items-center">
          <span className="text-white fw-semibold">
            Student Portal
          </span>
          <span className={`badge ${getStatusColor(studentStatus)} ms-auto`}>
            {studentStatus}
          </span>
        </div>

        {/* STAFF ROW */}
        <div className="d-flex align-items-center mt-1">
          <span className="text-white fw-semibold">
            Staff Portal
          </span>
          <span className={`badge ${getStatusColor(staffStatus)} ms-auto`}>
            {staffStatus}
          </span>
        </div>

      </div>

    </nav>
  );
}

export default App;
