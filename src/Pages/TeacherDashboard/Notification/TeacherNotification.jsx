import React, { useEffect, useState } from "react";
import "./TeacherNotification.css";
import TeacherNavbar from "../../../Components/TeacherDashboard/Navbar/TeacherNavbar";

const TeacherNotification = () => {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = () => {
    const token = localStorage.getItem("token");
    fetch(
      "https://university-project-paresh.onrender.com/University/Notification/notifications",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("notificationData", data);
        setNotification(data);
      })
      .catch((error) => {
        console.error("Error fetching Teacher data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <><TeacherNavbar /><div className="notificationTeacherContainer">
      <h1 className="headingText">All Notification Lists</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="cardContainer">
          {notification.map((notification, index) => (
            <div key={index} className="card">
              <h2>{notification.Title}</h2>
              <p>{notification.Description}</p>
              <p>
                <strong>Subject:</strong> {notification.Subject}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(notification.Date).toLocaleDateString("en-GB")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div></>
  );
};

export default TeacherNotification;
