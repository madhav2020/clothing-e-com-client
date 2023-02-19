import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("outfit-token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `${token}`;
    }
    return token;
  });

  const who_am_i = async () => {
    try {
      const { data } = await axios.get("/auth/who_am_i");
      // console.log(data.data);
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      who_am_i();
    }
  }, [token]);

  // SIGNUP FUNCTION
  const sign_up = async (name, phone, email, password, photo) => {
    try {
      const { data } = await axios.post("/auth/signup", {
        name,
        phone,
        email,
        password,
        photo,
        role: "user",
      });
      console.log(data);
      const user_token = data.token;
      localStorage.setItem("outfit-token", user_token);

      // navigate("/");

      // console.log("signup function activated", data);
    } catch (error) {
      console.log(error);
    }
  };

  // SIGN IN IN FUNCTION
  const sign_in = async (email, password) => {
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });

      const user_token = data.token;
      localStorage.setItem("outfit-token", user_token);
      setToken(user_token);
      navigate("/");
      // console.log("login function activated", data);
    } catch (error) {
      console.log(error);
    }
  };

  // LOGOUT FUNCTION
  const logout = async () => {
    try {
      localStorage.removeItem("outfit-token");
      // console.log("logout function activated");
      setUser(null);
      setToken(null);
    } catch (error) {
      console.log(error);
    }
  };

  const value = { user, sign_up, sign_in, logout };

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};

export { AuthProvider, useAuth };
