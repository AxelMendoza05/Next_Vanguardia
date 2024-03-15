import "../assets/Styles/Login.css";

const Login = ({ setUsername, setPassword }) => {
  return (
    <div className="container">
      <input
        placeholder="Username"
        className="input"
        name="username"
        type="text"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        className="input"
        name="password"
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default Login;
