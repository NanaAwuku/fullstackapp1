import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditPage() {
  const { id } = useParams(); // Assuming the id is passed as a URL parameter
  const [name, setName] = useState('');
  const [sectors, setSectors] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  useEffect(() => {
    // Fetch data for the given id from the database
    // Set the state values accordingly
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSectorsChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSectors(selectedOptions);
  };

  const handleAgreeToTermsChange = (event) => {
    setAgreeToTerms(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and data update here
    // Send updated data to the backend or perform any necessary actions
    // Reset form fields or show success message
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">Edit Page</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            className="border border-gray-300 px-4 py-2 mt-2 rounded"
          />
        </label>
        <label className="block mb-2">
          Sectors:
          <select
            multiple
            value={sectors}
            onChange={handleSectorsChange}
            required
            className="border border-gray-300 px-4 py-2 mt-2 rounded"
          >
            <option value="sector1">Sector 1</option>
            <option value="sector2">Sector 2</option>
            <option value="sector3">Sector 3</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label className="block mb-2">
          Agree to Terms:
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={handleAgreeToTermsChange}
            required
            className="mt-2"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditPage;
