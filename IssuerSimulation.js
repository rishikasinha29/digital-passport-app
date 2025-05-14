// src/components/IssuerSimulation.js
import React, { useState } from 'react';

function IssuerSimulation({ onIssue }) {
  const [credentialData, setCredentialData] = useState({
    issuer: 'Simulated School',
    subject: { name: '', age: '', degree: '' },
    issuanceDate: new Date().toISOString().slice(0, 10),
    signature: 'simulated_signature',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setCredentialData(prevData => ({
        ...prevData,
        subject: {
          ...prevData.subject,
          [child]: value,
        },
      }));
    } else {
      setCredentialData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleIssue = () => {
    onIssue(credentialData);
    setCredentialData({
      issuer: 'Simulated School',
      subject: {
        name: '',
        age: '',
        degree: '',
      },
      issuanceDate: new Date().toISOString().slice(0, 10),
      signature: 'simulated_signature',
    });
  };

   return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Issue New Credential</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="subject.name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" id="subject.name" name="subject.name" value={credentialData.subject.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* ... (similar styling for other input fields) */}
        <div>
          <label htmlFor="subject.age" className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
          <input type="number" id="subject.age" name="subject.age" value={credentialData.subject.age} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="subject.degree" className="block text-gray-700 text-sm font-bold mb-2">Degree:</label>
          <input type="text" id="subject.degree" name="subject.degree" value={credentialData.subject.degree} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="button" onClick={handleIssue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Issue Credential</button>
      </form>
    </div>
  );
}

export default IssuerSimulation;