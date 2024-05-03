import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);
    const [sortList, setSortList] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        country: '',
        language: '',
        active: ''
    });

    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then(res => {
                setData(res.data);
                setSortList(res.data); 
            })
            .catch(err => console.log(err));
    }, []);

    const handleFilterChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            const updatedValues = checked ?
                [...filters[name], value] :
                filters[name].filter(val => val !== value); 
    
            setFilters({ ...filters, [name]: updatedValues });
        } else {
            setFilters({ ...filters, [name]: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let filteredData = [...data];

       
        for (const key in filters) {
            if (filters[key]) {
                if (key === 'name' || key === 'email' || key === 'phone') {
                    filteredData = filteredData.filter(item => item[key].toLowerCase().includes(filters[key].toLowerCase()));
                } else if (key === 'gender' || key === 'country' || key === 'active') {
                    filteredData = filteredData.filter(item => item[key].toLowerCase() === filters[key].toLowerCase());
                } else if (key === 'language') {
                    filteredData = filteredData.filter(item => filters.language.includes(item.language.toLowerCase()));
                }
            }
        }

        setSortList(filteredData);
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
            <h1>List of Users</h1>
            {/* name ,email, phone */}
            <div className='row'>
                <label htmlFor="name">Name :</label><input type='text' name='name' className='form-control' placeholder='Search by name' onChange={handleFilterChange} />
                <label htmlFor="email">Email :</label><input type='email' name='email' className='form-control' placeholder='Search by email' onChange={handleFilterChange} />
                <label htmlFor="phone">Phone :</label><input type='text' name='phone' className='form-control' placeholder='Search by phone' onChange={handleFilterChange} />
            </div>
            {/* gender */}
            <div className="row">
                <div className="col">
                    <label htmlFor="gender">Gender:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male" id="flexRadioDefault1" onChange={handleFilterChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female" id="flexRadioDefault2" onChange={handleFilterChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                    </div>
                </div>
                {/* country */}
                <div className="col">
                    <label htmlFor="country">Country:</label>
                    <select name="country" className="form-control" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="India">India</option>
                        <option value="Qatar">Qatar</option>
                        <option value="United States">United States</option>
                        <option value="Oman">Oman</option>
                    </select>
                </div>
                {/* language */}
                <div className="col">
                    <label htmlFor="language">Language:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="language" value="tamil" id="languageCheckbox1" onChange={handleFilterChange} />
                        <label className="form-check-label" htmlFor="languageCheckbox1">Tamil</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="language" value="english" id="languageCheckbox2" onChange={handleFilterChange} />
                        <label className="form-check-label" htmlFor="languageCheckbox2">English</label>
                    </div>
                </div>

                <div className="col">
                    <label htmlFor="active">Active:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="active" value="yes" id="flexRadioDefault3" onChange={handleFilterChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">Yes</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="active" value="no" id="flexRadioDefault4" onChange={handleFilterChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault4">No</label>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            <div className='w-75 rounded bg-white border shadow p-4'>
                {sortList.length > 0 ? (<table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Active</th>
                            <th>Gender</th>
                            <th>Language</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortList.map((d, index) => (
                            <tr key={index}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.active}</td>
                                <td>{d.gender}</td>
                                <td>{d.language}</td>
                                <td>{d.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>) : (<h1 className='text-center'> Not Found ! </h1>)}
            </div>
        </div>
    );
}

export default Home;
