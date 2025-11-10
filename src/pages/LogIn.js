import { useState } from "react";

// Login component controls access to the rest of the app.
// Once the user logs in successfully, App.js will render the other pages.
function Login({ onLoginSuccess }) {
  // =================================
  // STATE VARIABLES
  // =================================
  // These track the input values, errors, and UI state.
  const [username, setUsername] = useState(""); // stores username typed by user
  const [password, setPassword] = useState(""); // stores password typed by user
  const [error, setError] = useState(""); // holds any login error messages

  // =================================
  // List of users
  // =================================
  // For now, this static array that simulates a small "database".
  const users = [
    { username: "alice", password: "1234" },
    { username: "bob", password: "abcd" },
    { username: "mahmood", password: "password" },
  ];

  // =================================
  // HANDLE LOGIN
  // =================================
  // Triggered when the user submits the login form.
  // It checks the entered credentials against the allowed users.
  const handleLogin = (e) => {
    e.preventDefault(); // prevent page reload

    let user = undefined; // default if no match found
    // Loop through each user in the array
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        user = users[i]; // found a matching user
        break; // stop the loop once a match is found
      }
    }

    if (user) {
      setError(""); // clear any previous error
      onLoginSuccess(); // notify App.js that login succeeded
    } else {
      setError("Invalid username or password");
    }
  };

  // =================================
  // JSX RENDER
  // =================================
  // This is what gets displayed on the screen.
  // A simple login form with username/password inputs and error handling.
  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Login</h2>

      {/* LOGIN FORM */}
      <form onSubmit={handleLogin}>
        {/* Username input */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginTop: "10px" }}
        />

        {/* Show error message if login fails */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Submit button */}
        <br />
        <button className="reset" type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>

      {/* Helpful tip for the user */}
      <p style={{ fontSize: "0.85rem", color: "gray", marginTop: "10px" }}>
        Hint: try <strong>alice / 1234</strong> or <strong>bob / abcd</strong>
      </p>
    </div>
  );
}

export default Login;
/*Code description:
- The login form is controlled by React state (useState).
- The handleLogin function checks credentials locally.
- When a valid username/password is entered, onLoginSuccess() is called -> App's isLoggedIn becomes true.
- React re-renders App, so it now skips the login and shows the routes (main app).
- The login screen disappears, and the main app (with navbar, pages, footer) loads.*/