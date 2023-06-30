import React, { useState } from 'react';

function FormPage() {
  const [name, setName] = useState('');
  const [sectors, setSectors] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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
    // Handle form submission and data storage here
    // Send data to backend or perform any necessary actions
    // Reset form fields or show success message
  };

  return (
    <div className="container mx-auto mt-10">
  <h2 className="text-[16px] ">Please Enter your name and pick sectors you are currently involved in</h2>
  <form onSubmit={handleSubmit} className="mt-4">
    <label className="block mb-2">
      Name:
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        required
        className="border border-gray-300 px-4 py-1 w-80 mt-3 ml-7 rounded-full focus:outline-none focus:border-blue-500"
      />
    </label>
    <label className="block mb-2">
      Sectors:
      <select
        
        value={sectors}
        onChange={handleSectorsChange}
        required
        className="border border-gray-300 text-[12px] bg-gray-100 w-80 px-4 py-1 rounded-full mt-3 ml-5 focus:outline-none focus:border-blue-500"
      >
        <option value="sector1">Sector 1</option>
        <option value="sector2">Sector 2</option>
        <option value="sector3">Sector 3</option>
      </select>
    </label>
    <label className="block my-5">
      Agree to Terms:
      <input
        type="checkbox"
        checked={agreeToTerms}
        onChange={handleAgreeToTermsChange}
        required
        className="mt-2 ml-5"
      />
    </label>
    <button
      type="submit"
      className="py-2 px-6 bg-blue-500 text-white rounded-full mt-4 hover:bg-blue-600"
    >
      Save
    </button>
  </form>
</div>

  );
}

export default FormPage;
