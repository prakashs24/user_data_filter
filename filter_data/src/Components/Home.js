import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    useEffect(() => {
        let filteredData = [...data];

        for (const key in filters) {
            if (filters[key]) {
                if (key === 'name' || key === 'email' || key === 'phone') {
                    filteredData = filteredData.filter(item => item[key].toLowerCase().includes(filters[key].toLowerCase()));
                } else if (key === 'gender' || key === 'country' || key === 'language' || key === 'active') {
                    filteredData = filteredData.filter(item => item[key].toLowerCase() === filters[key].toLowerCase());
                }
            }
        }

        setSortList(filteredData);
    }, [filters, data]);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
            <h1>List of Users</h1>
            <div className='row'>
            <label htmlFor="name">Name :</label><input type='text' name='name' className='form-control' placeholder='Search by name' onChange={handleFilterChange} />
            <label htmlFor="email">Email :</label><input type='email' name='email' className='form-control' placeholder='Search by email' onChange={handleFilterChange} />
            <label htmlFor="phone">Phone :</label><input type='text' name='phone' className='form-control' placeholder='Search by phone' onChange={handleFilterChange} />
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="gender">Gender:</label>
                    <select name="gender" className="form-control" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
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
                <div className="col">
                    <label htmlFor="language">Language:</label>
                    <select name="language" className="form-control" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="tamil">Tamil</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="active">Active:</label>
                    <select name="active" className="form-control" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

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

