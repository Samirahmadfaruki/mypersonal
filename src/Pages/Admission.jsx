import React from "react";
import Layout from "../Components/Layout";

const Admission = () => {
    return (
        <Layout>
            <div className="p-6 bg-white w-[90%] max-w-7xl flex flex-col shadow-lg shadow-slate-400 rounded-md mx-auto ">
                <h2 className="text-2xl font-bold text-left text-primary">VIPS GODDA Admission</h2>

                <div className="flex flex-col items-center my-10">
                    <h3 className="text-xl font-semibold text-center text-primary">Procedure</h3>
                    <div className="mt-4 space-y-2 text-gray-600">
                        <p><span className="font-semibold text-primary">Step 1: Submit Application -</span> Fill out the online application form with all the required details.</p>
                        <p><span className="font-semibold text-primary">Step 2: Document Verification -</span> Upload the required documents for verification.</p>
                        <p><span className="font-semibold text-primary">Step 3: Admission Confirmation -</span> Pay the admission fee to secure your seat.</p>
                    </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-center text-primary">Admission Form</h2>
                <form className="px-4 space-y-4">
                    <div>
                        <label className="block font-semibold">Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
                    </div>

                    <div>
                        <label className="block font-semibold">Gender</label>
                        <select className="w-full p-2 border rounded-md">
                            <option>Choose Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold">Email</label>
                        <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="block font-semibold">Mobile</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter mobile number" />
                    </div>

                    <div>
                        <label className="block font-semibold">Father's Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter father's name" />
                    </div>

                    <div>
                        <label className="block font-semibold">Mother's Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter mother's name" />
                    </div>

                    <div>
                        <label className="block font-semibold">Date of Birth</label>
                        <input type="date" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Religion</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter religion" />
                    </div>

                    <div>
                        <label className="block font-semibold">Category</label>
                        <select className="w-full p-2 border rounded-md">
                            <option>Select a category</option>
                            <option>General</option>
                            <option>OBC</option>
                            <option>SC</option>
                            <option>ST</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold">Last School Attended</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Last Exam Result (in Percentage)</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Address</label>
                        <textarea className="w-full p-2 border rounded-md" placeholder="Enter your address"></textarea>
                    </div>

                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="transportFacility" />
                        <span>Transport Facility</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="hostelFacility" />
                        <span>Hostel Facility</span>
                    </label>

                    <div>
                        <label className="block font-semibold">Father's Qualification</label>
                        <input type="text" name="fatherQualification" className="w-full p-2 border rounded-md" placeholder="Father's Qualification" />
                    </div>

                    <div>
                        <label className="block font-semibold">Father's Occupation</label>
                        <input type="text" name="fatherOccupation" className="w-full p-2 border rounded-md" placeholder="Father's Occupation" />
                    </div>

                    <div>
                        <label className="block font-semibold">Mother's Qualification</label>
                        <input type="text" name="motherQualification" className="w-full p-2 border rounded-md" placeholder="Mother's Qualification" />
                    </div>

                    <div>
                        <label className="block font-semibold">Mother's Occupation</label>
                        <input type="text" name="motherOccupation" className="w-full p-2 border rounded-md" placeholder="Mother's Occupation" />
                    </div>

                    <div>
                        <label className="block font-semibold">Annual Income</label>
                        <input type="text" name="annualIncome" className="w-full p-2 border rounded-md" placeholder="Annual Income" />
                    </div>

                    <div>
                        <label className="block font-semibold">Upload Aadhar Card</label>
                        <input type="file" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Upload Photo</label>
                        <input type="file" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Upload Transfer Certificate</label>
                        <input type="file" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Upload Character Certificate
                        </label>
                        <input type="file" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Upload Last Mark Sheet</label>
                        <input type="file" className="w-full p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block font-semibold">Upload Birth Certificate
                        </label>
                        <input type="file" className="w-full p-2 border rounded-md" />
                    </div>

                    <button type="submit" className="w-full p-2 font-semibold text-white bg-blue-600 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Admission;
