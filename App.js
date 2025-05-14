import React, { useState } from 'react';
import WalletView from './components/WalletView';
import IssuerSimulation from './components/IssuerSimulation';
import VerifierSimulation from './components/VerifierSimulation';

function App() {
  const [credentials, setCredentials] = useState([]);

  const handleIssueCredential = (newCredential) => {
    setCredentials([...credentials, newCredential]);
  };

  return (
    <div className="bg-black min-h-screen py-10">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-electric-blue mb-6 text-center">Simulated Digital Passport</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WalletView credentials={credentials} />
          <div>
            <IssuerSimulation onIssue={handleIssueCredential} />
            <VerifierSimulation credentials={credentials} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;