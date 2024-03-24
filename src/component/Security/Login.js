function Login() {
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {" "}
        <input
          type="text"
          placeholder="Username"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />{" "}
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />{" "}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
          }}
        >
          {" "}
          Login{" "}
        </button>{" "}
      </form>
    </>
  );
}

export default Login;
