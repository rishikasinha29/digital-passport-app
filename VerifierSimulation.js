// src/components/VerifierSimulation.js
import React, { useState } from 'react';

function VerifierSimulation({ credentials }) {
    const [selectedCredentialIndex, setSelectedCredentialIndex] = useState(null);
    const [verificationResult, setVerificationResult] = useState('');
    const [claimToVerify, setClaimToVerify] = useState('');
    const [expectedValue, setExpectedValue] = useState('');

  const handleCredentialSelect = (event) => {
    setSelectedCredentialIndex(parseInt(event.target.value));
    setVerificationResult('');
  };

  const handleVerify = () => {
    if (selectedCredentialIndex !== null && credentials[selectedCredentialIndex]) {
      const credential = credentials[selectedCredentialIndex];
      if (claimToVerify && credential.subject && credential.subject.hasOwnProperty(claimToVerify)) {
        if (String(credential.subject[claimToVerify]) === expectedValue) {
          setVerificationResult(`Verification Successful: ${claimToVerify} is "${expectedValue}"`);
        } else {
          setVerificationResult(`Verification Failed: Expected ${claimToVerify} to be "${expectedValue}", but got "${credential.subject[claimToVerify]}"`);
        }
      } else {
        setVerificationResult('Invalid claim to verify.');
      }
    } else {
      setVerificationResult('No credential selected.');
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Verify Credential</h2>
      <div className="mb-4">
        <label htmlFor="credentialSelect" className="block text-gray-700 text-sm font-bold mb-2">Select Credential:</label>
        <select id="credentialSelect" onChange={handleCredentialSelect} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value={null}>Select a credential</option>
          {credentials.map((_, index) => (
            <option key={index} value={index}>Credential #{index + 1} ({_.issuer})</option>
          ))}
        </select>
      </div>
      {selectedCredentialIndex !== null && (
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="claimToVerify" className="block text-gray-700 text-sm font-bold mb-2">Claim to Verify (e.g., age, degree):</label>
            <input type="text" id="claimToVerify" value={claimToVerify} onChange={(e) => setClaimToVerify(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label htmlFor="expectedValue" className="block text-gray-700 text-sm font-bold mb-2">Expected Value:</label>
            <input type="text" id="expectedValue" value={expectedValue} onChange={(e) => setExpectedValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <button type="button" onClick={handleVerify} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Verify</button>
        </div>
      )}
      {verificationResult && <p className="mt-4 font-semibold text-green-600">{verificationResult}</p>}
    </div>
  );
}

export default VerifierSimulation;