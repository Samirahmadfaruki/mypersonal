

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../../Components/AdminDashboard/Navbar";
import AdmissionStudentModal from "../../../Components/AdminDashboard/Admission/AdmissionStudentModal";

const AdminAdmission = () => {
  const [admission, setAdmission] = useState([]);
  const [filteredAdmission, setFilteredAdmission] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [courseOptions, setCourseOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCourses();
    fetchAdmission();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://university-project-paresh.onrender.com/University/Course/allCourses"
      );
      setCourseOptions(
        response.data.courses.map((course) => course.courseName)
      );
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchAdmission = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://university-project-paresh.onrender.com/University/Admission/allAdmissionForms"
      );
      if (Array.isArray(response.data.applicationForms)) {
        setFilteredAdmission(response.data.applicationForms);
        setAdmission(response.data.applicationForms);
      }
    } catch (error) {
      console.error("Error fetching Admission:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filteredData = admission.filter(
      (entry) =>
        entry.courseTaken.toLowerCase().includes(selectedCourse.toLowerCase()) &&
        (entry.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredAdmission(filteredData);
  }, [selectedCourse, searchQuery, admission]);

  return (
    <>
      <Navbar />
      <div className="dashboard_layout flex flex-col p-4">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">All Admission Lists</h1> */}
        <div className="flex justify-between items-center mb-6 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search here..."
            className="p-3 border rounded-md w-full sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            id="courseFilter"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="p-3 pb-1 border rounded-md w-full sm:w-64"
          >
            <option value="">Select Branch</option>
            {courseOptions.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg bg-white shadow-lg p-6 pt-2">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-3 text-left"></th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">MobileNo</th>
                  <th className="p-3 text-left">Branch Name</th>
                  <th className="p-3 text-left">Course Taken</th>
                  <th className="p-3 text-center">Verified</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmission.map((admission, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedAdmission(admission)}
                  >
                    <td className="px-6 py-4 border">{index + 1}</td>
                    <td className="p-3 flex items-center space-x-3">
                      <img
                        src={`https://i.pravatar.cc/40?u=${admission.email}`}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <span className="block font-medium">{admission.Name}</span>
                        {/* <span className="text-sm text-gray-500">{admission.email}</span> */}
                      </div>
                    </td>
                    <td className="p-3">{admission.email}</td>
                    <td className="p-3">{admission.mobileNo}</td>
                    <td className="p-3">{admission.branchName}</td>
                    <td className="p-3">{admission.courseTaken}</td>
                    <td className="p-3 text-center">
                      {admission.applicationFormStatus === "Confirm" ? "✅" : "❌"}
                    </td>
                    <td className="p-3 flex justify-center space-x-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedAdmission && (
          <AdmissionStudentModal
            admission={selectedAdmission}
            onClose={() => setSelectedAdmission(null)}
          />
        )}
      </div>
    </>
  );
};

export default AdminAdmission;

