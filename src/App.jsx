import { useState } from "react";
import "./App.css";
import validator from "validator";

function App() {
  const [showPass, setShowPass] = useState(false);
  const [passwordState, setPasswordState] = useState("");

  const handleCheckBox = (e) => {
    setShowPass(e.target.checked);
  };

  const handlePassInput = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 4,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
    )
      setPasswordState("strong");
    else setPasswordState("weak");
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Password Validation</h1>
          <div className="input-box">
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <label
                htmlFor="checkbox"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                👀
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={showPass}
                  onChange={(e) => handleCheckBox(e)}
                />
              </label>
              {showPass ? (
                <input
                  type="text"
                  placeholder="Enter your password"
                  onChange={(e) => handlePassInput(e.target.value)}
                />
              ) : (
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => handlePassInput(e.target.value)}
                />
              )}
            </div>
            {passwordState === "strong" && (
              <span style={{ color: "#21aeea", fontWeight: 600 }}>
                Password is strong ✔
              </span>
            )}
            {passwordState === "weak" && (
              <span style={{ color: "red", fontWeight: 600 }}>
                Password is weak !
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
