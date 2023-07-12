import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../mocks/auth";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <p>{auth.username}</p>
      <p>{auth.email}</p>
      <p>{auth.age}</p>
    </div>
  ) : (
    navigate("/login")
  );
}
