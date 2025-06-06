import React, { useState, useEffect } from 'react';

function PasswordGenerator() {
    const [length, setLength] = useState(12); 
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false); 
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    const handleGeneratePassword = () => {
        let characterPool = "";
        if (includeLowercase) {
            characterPool += lowercaseChars;
        }
        if (includeUppercase) {
            characterPool += uppercaseChars;
        }
        if (includeNumbers) {
            characterPool += numberChars;
        }
        if (includeSymbols) {
            characterPool += symbolChars;
        }

        if (characterPool === "") {
            setPassword("Please select at least one character type.");
            return;
        }

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            newPassword += characterPool[randomIndex];
        }
        setPassword(newPassword);
    };


    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Password Generator</h2>
            
            <div>
                <label htmlFor="length">Password Length: {length}</label>
                <input
                    type="range"
                    id="length"
                    min={8}
                    max={32}
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value, 10))}
                    style={{ width: '100%', margin: '10px 0' }}
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <input
                    type="checkbox"
                    id="lowercase"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
                <label htmlFor="lowercase" style={{ marginLeft: '5px' }}>Include Lowercase (a-z)</label>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <input
                    type="checkbox"
                    id="uppercase"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <label htmlFor="uppercase" style={{ marginLeft: '5px' }}>Include Uppercase (A-Z)</label>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <input
                    type="checkbox"
                    id="numbers"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
                <label htmlFor="numbers" style={{ marginLeft: '5px' }}>Include Numbers (0-9)</label>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="checkbox"
                    id="symbols"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
                <label htmlFor="symbols" style={{ marginLeft: '5px' }}>Include Symbols (!@#...)</label>
            </div>

            <button 
                onClick={handleGeneratePassword}
                style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Generate Password
            </button>

            {password && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#f9f9f9', wordBreak: 'break-all', color: '#333' }}>
                    <strong>Generated Password:</strong> {password}
                </div>
            )}
        </div>
    );
}

export default PasswordGenerator;
