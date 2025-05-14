import React from 'react';

function WalletView({ credentials }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Digital Wallet</h2>
      {credentials.length === 0 ? (
        <p className="text-gray-600">Your wallet is empty.</p>
      ) : (
        <ul className="space-y-3">
          {credentials.map((credential, index) => (
            <li key={index} className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg text-blue-600 mb-1">{credential.issuer}</h3>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">{JSON.stringify(credential.subject, null, 2)}</pre>
              <p className="text-gray-500 text-xs mt-2">Issued on: {credential.issuanceDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WalletView;