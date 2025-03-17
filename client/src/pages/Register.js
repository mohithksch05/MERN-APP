import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleRegister = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <div>
      <form className="register" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
