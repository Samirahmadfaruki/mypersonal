// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Select from "react-select";

// const StudentForm = () => {
//   const [formData, setFormData] = useState({
//     Name: "",
//     fatherName: "",
//     motherName: "",
//     email: "",
//     mobileNo: "",
//     address: "",
//     state: "",
//     country: "",
//     cityORVillage: "",
//     pin: "",
//     gender: "",
//     bloodGroup: "",
//     rollNo: "",
//     courseTaken: "",
//     branchName: "",
//     admissionYear: "",
//   });

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     handleChange(name, value);
//   };

//   const handleSelectChange = (selectedOption) => {
//     handleChange("gender", selectedOption.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     fetch("https://modern-institue-backend.onrender.com/students/register",{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message) {
//           localStorage.setItem("StudentToken", data.accessToken);
//           alert(`${data.message}`);
//           navigate("/student");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const options = [
//     { value: "female", label: "Female" },
//     { value: "male", label: "Male" },
//     { value: "other", label: "Others" },
//   ];
//   return (
//     <div className="">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="Name"
//               placeholder="Enter your name"
//               value={formData.Name}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="fatherName"
//               className="text-sm font-medium text-gray-700"
//             >
//               Father's Name
//             </label>
//             <input
//               type="text"
//               id="fatherName"
//               name="fatherName"
//               placeholder="Enter your father's name"
//               value={formData.fatherName}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="motherName"
//               className="text-sm font-medium text-gray-700"
//             >
//               Mother's Name
//             </label>
//             <input
//               type="text"
//               id="motherName"
//               name="motherName"
//               placeholder="Enter your mother's name"
//               value={formData.motherName}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="email"
//               className="text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="mobileNo"
//               className="text-sm font-medium text-gray-700"
//             >
//               Mobile No
//             </label>
//             <input
//               type="text"
//               id="mobileNo"
//               name="mobileNo"
//               placeholder="Enter your mobile number"
//               value={formData.mobileNo}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="address"
//               className="text-sm font-medium text-gray-700"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               placeholder="Enter your address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="cityORVillage"
//               className="text-sm font-medium text-gray-700"
//             >
//               City/Village
//             </label>
//             <input
//               type="text"
//               id="cityORVillage"
//               name="cityORVillage"
//               placeholder="Enter your city or village"
//               value={formData.cityORVillage}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="state"
//               className="text-sm font-medium text-gray-700"
//             >
//               State
//             </label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               placeholder="Enter your state"
//               value={formData.state}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="country"
//               className="text-sm font-medium text-gray-700"
//             >
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               placeholder="Enter your country"
//               value={formData.country}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="gender"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Gender
//             </label>
//             <Select
//               value={options.find((option) => option.value === formData.gender)}
//               onChange={handleSelectChange}
//               options={options}
//               placeholder="Select your gender"
//               required
//               className="block w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="bloodGroup"
//               className="text-sm font-medium text-gray-700"
//             >
//               Blood Group
//             </label>
//             <input
//               type="text"
//               id="bloodGroup"
//               name="bloodGroup"
//               placeholder="Enter your blood group"
//               value={formData.bloodGroup}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="rollNo"
//               className="text-sm font-medium text-gray-700"
//             >
//               Roll No
//             </label>
//             <input
//               type="text"
//               id="rollNo"
//               name="rollNo"
//               placeholder="Enter your roll number"
//               value={formData.rollNo}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="courseTaken"
//               className="text-sm font-medium text-gray-700"
//             >
//               Course Taken
//             </label>
//             <input
//               type="text"
//               id="courseTaken"
//               name="courseTaken"
//               placeholder="Enter your course"
//               value={formData.courseTaken}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="branchName"
//               className="text-sm font-medium text-gray-700"
//             >
//               Branch Name
//             </label>
//             <input
//               type="text"
//               id="branchName"
//               name="branchName"
//               placeholder="Enter your branch name"
//               value={formData.branchName}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="admissionYear"
//               className="text-sm font-medium text-gray-700"
//             >
//               Admission Year
//             </label>
//             <input
//               type="number"
//               id="admissionYear"
//               name="admissionYear"
//               placeholder="Enter your admission year"
//               value={formData.admissionYear}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         </div>
//         <div className="flex justify-start mt-8">
//           <button
//             type="submit"
//             className={`w-full sm:w-auto px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ${
//               loading ? "cursor-wait" : ""
//             }`}
//           >
//             {loading ? "loading.." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default StudentForm;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    email: "",
    mobileNo: "",
    address: "",
    cityVillage: "",
    state: "",
    country: "",
    gender: "",
    bloodGroup: "",
    rollNo: "",
    courseTaken: "",
    branchName: "",
    semester: "",
    documents: "",
    marks: "",
    admissionYear: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSelectChange = (selectedOption) => {
    handleChange("gender", selectedOption.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/students/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          localStorage.setItem("StudentToken", data.accessToken);
          alert(data.message);
          navigate("/student");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Others" },
  ];

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => (
            <div className="flex flex-col" key={key}>
              <label htmlFor={key} className="text-sm font-medium text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              {key === "gender" ? (
                <Select
                  value={genderOptions.find((option) => option.value === formData[key])}
                  onChange={handleSelectChange}
                  options={genderOptions}
                  placeholder="Select your gender"
                  className="block w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              ) : (
                <input
                  type={key === "email" ? "email" : "text"}
                  id={key}
                  name={key}
                  placeholder={`Enter your ${key}`}
                  value={formData[key]}
                  onChange={handleInputChange}
                  required
                  className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-start mt-8">
          <button
            type="submit"
            className={`w-full sm:w-auto px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ${
              loading ? "cursor-wait" : ""
            }`}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;

