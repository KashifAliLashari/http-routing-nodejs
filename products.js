import React, { useState } from 'react';

const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    city: 'New York',
    occupation: 'Engineer',
  },

  {
    id: 2,
    name: 'Jane Smith',
    age: 30,
    city: 'San Francisco',
    occupation: 'Designer',
  },

  {
    id: 3,
    name: 'Bob Johnson',
    age: 28,
    city: 'Chicago',
    occupation: 'Accountant',
  },

  {
    id: 4,
    name: 'Alice Brown',
    age: 35,
    city: 'Los Angeles',
    occupation: 'Teacher',
  },

  {
    id: 5,
    name: 'Charlie Wilson',
    age: 40,
    city: 'Houston',
    occupation: 'Doctor',
  },

  { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },

  {
    id: 7,
    name: 'Frank Miller',
    age: 32,
    city: 'Seattle',
    occupation: 'Software Engineer',
  },

  {
    id: 8,
    name: 'Grace Taylor',
    age: 45,
    city: 'Boston',
    occupation: 'Lawyer',
  },

  {
    id: 9,
    name: 'Henry Clark',
    age: 28,
    city: 'Denver',
    occupation: 'Marketing Manager',
  },

  {
    id: 10,
    name: 'Ivy Adams',
    age: 33,
    city: 'Atlanta',
    occupation: 'Entrepreneur',
  },
];

const TableFilter = () => {
  const [filteredData, setFilteredData] = useState(sampleData);
  const [nameFilter, setNameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [occupationFilter, setOccupationFilter] = useState('');

  const handleFilter = () => {
    const filtered = sampleData.filter((item) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const ageMatch = item.age.toString().includes(ageFilter);
      const cityMatch = cityFilter === '' || item.city === cityFilter;
      const occupationMatch =
        occupationFilter === '' || item.occupation === occupationFilter;
      return nameMatch && ageMatch && cityMatch && occupationMatch;
    });
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setFilteredData(sampleData);
    setNameFilter('');
    setAgeFilter('');
    setCityFilter('');
    setOccupationFilter('');
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type='text'
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        />
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value=''>All Cities</option>
          <option value='New York'>New York</option>
          <option value='San Francisco'>San Francisco</option>
          <option value='Chicago'>Chicago</option>
          <option value='Los Angeles'>Los Angeles</option>
          <option value='Houston'>Houston</option>
          <option value='Miami'>Miami</option>
          <option value='Seattle'>Seattle</option>
          <option value='Boston'>Boston</option>
          <option value='Denver'>Denver</option>
          <option value='Atlanta'>Atlanta</option>
        </select>
        <select
          value={occupationFilter}
          onChange={(e) => setOccupationFilter(e.target.value)}
        >
          <option value=''>All Occupations</option>
          <option value='Engineer'>Engineer</option>
          <option value='Designer'>Designer</option>
          <option value='Accountant'>Accountant</option>
          <option value='Teacher'>Teacher</option>
          <option value='Doctor'>Doctor</option>
          <option value='Artist'>Artist</option>
          <option value='Software Engineer'>Software Engineer</option>
          <option value='Lawyer'>Lawyer</option>
          <option value='Marketing Manager'>Marketing Manager</option>
          <option value='Entrepreneur'>Entrepreneur</option>
        </select>
        <button onClick={handleFilter}>Apply Filters</button>
        <button onClick={handleReset}>Reset Filters</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
