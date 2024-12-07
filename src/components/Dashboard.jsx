// Import necessary modules
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Dashboard = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-secondary">Welcome to VSM Campus</h1>
        <h2 className="display-6 fw-bold text-primary">Attendance Tracking System</h2>
        <p className="lead text-secondary">
          Efficiently track and manage attendance for students.
        </p>
      </div>

      <ul className="list-group w-50">
        <li className="list-group-item">
          <button
            className="btn btn-outline-primary w-100 py-2"
            onClick={() => window.location.href = 'https://principal-portal.example.com'}
          >
            Principal Login
          </button>
        </li>
        <li className="list-group-item">
          <button
            className="btn btn-outline-secondary w-100 py-2"
            onClick={() => window.location.href = 'https://hod-portal.example.com'}
          >
            HOD Login
          </button>
        </li>
        <li className="list-group-item">
          <button
            className="btn btn-outline-success w-100 py-2"
            onClick={() => window.location.href = 'https://faculty-portal.example.com'}
          >
            Faculty Login
          </button>
        </li>
        <li className="list-group-item">
          <button
            className="btn btn-outline-danger w-100 py-2"
            onClick={() => window.location.href = 'https://student-portal.example.com'}
          >
            Student Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
