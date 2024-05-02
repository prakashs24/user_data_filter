// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";

// function FilterPage() {
//     const [data,setData] = useState ()
//     const [sortList,setSortList] = useState([])

//     const [name,setName]=useState()
//     const [email,setEmail]=useState()
//     const [phone,setPhone]=useState()

//     const navigate = useNavigate();
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const searchParams = new URLSearchParams(formData);
//         navigate(`/?${searchParams.toString()}`);
//     };

//     return (
//         <div className="container">
//     <form onSubmit={handleSubmit} className="border mt-5 border-5 border-secondary p-5">
//         <div className="row">
//             <h3 className="text-center mx-auto col-12 p-2 my-3 fw-bold rounded-5 border w-25 border-5">... Fill Details ...</h3>
//         </div>
//         <div className="row p-3">
//             {/* name */}
//             <div className="col-4 text-center">
//                 <label htmlFor="name" className="fw-bold fs-5 rounded-5 border border-4 px-2 bg-warning text-dark">Name</label>
//                 <input type="text" className="form-control my-2" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//             </div>
//             {/* email */}
//             <div className="col-4 text-center">
//                 <label htmlFor="email" className="fw-bold fs-5 rounded-5 border border-4 px-2 bg-warning text-dark">Email</label>
//                 <input type="email" className="form-control my-2" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//             </div>
//             {/* phone */}
//             <div className="col-4 text-center">
//                 <label htmlFor="phone" className="fw-bold fs-5 rounded-5 border border-4 px-2 bg-warning text-dark">Phone</label>
//                 <input type="text" className="form-control my-2" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
//             </div>
//         </div>





//                 {/* radio == active*/}

//                 {/* <div className="row p-3 mt-4">
//                     <div className="col-3 p-3 text-center">
//                         <label for="active"  className="fw-bold fs-5 text-center rounded-5 border border-4 px-2 bg-warning text-dark">Active</label>
//                         <div className="row p-2">
//                             <div className="col text-end">
//                                 <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
//                                 <label className="form-check-label px-2" for="inlineRadio1">Yes</label>
//                             </div>
//                             <div className="col text-start">
//                                 <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
//                                 <label className="form-check-label px-2" for="inlineRadio2">No</label>
//                             </div>
//                         </div>
//                     </div>

//                     {/* radio == gender*/}
//                     {/* <div className="col-3 p-3 text-center ">
//                         <label for="gender" className="fw-bold fs-5 text-center rounded-5 border border-4 px-2 bg-warning text-dark">Gender</label>
//                         <div className="row p-2">
//                             <div className="col text-end">
//                                 <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="option1" />
//                                 <label className="form-check-label px-2 " for="inlineRadio1">Male</label>
//                             </div>
//                             <div className="col text-start">
//                                 <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
//                                 <label className="form-check-label px-2" for="inlineRadio2">Female</label>
//                             </div>
//                         </div>
//                     </div> */}


//                     {/* select == Country
//                     <div className="col-3 p-3 text-center">
//                     <label for="country" className="fw-bold fs-5 text-center rounded-5 border border-4 px-2 bg-warning text-dark">Country</label>
//                         <div className="col-6 mx-auto my-2">
//                             <select className="custom-select custom-select-lg mb-3 p-1">
//                                 <option selected>Country</option>
//                                 <option value="India">India</option>
//                                 <option value="Qatar">Qatar</option>
//                                 <option value="United States">United States</option>
//                                 <option value="Oman">Oman</option>
//                             </select>
//                         </div>


//                     </div>


//                     {/* checkbox == Language*/}

//                     {/* <div className="col p-3 text-center">
//                     <label for="language" className="fw-bold fs-5 text-center rounded-5 border border-4 px-2 bg-warning text-dark">Language</label>
//                     <div className="row my-2">
//                         <div className="col">
//                         <input className="form-check-input " type="checkbox" value={values.name} id="flexCheckDefault" />
//                         <label className="form-check-label  px-1" for="flexCheckDefault">
//                             Tamil
//                         </label>
//                         </div><br></br>
//                         <div className="col">
//                         <input className="form-check-input " type="checkbox" value={values.name} id="flexCheckDefault" />
//                         <label className="form-check-label px-1" for="flexCheckDefault">
//                             English
//                         </label>
//                         </div>
//                     </div>
//                     </div> */}
//                 {/* </div>  */}
//                <div className="row">
//                <button type="submit" className="btn btn-info col-2 mx-auto fw-bold" >Submit</button>
//                </div>
//             </form>
//         </div>


//     )

// }
// export default FilterPage