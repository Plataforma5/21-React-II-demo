import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <Link to="/facuvelasco">
          <button>My profile</button>
        </Link>
        <Link to={`/playlist/${playlist.id}`}>
          <div>
            <li>Playlist</li>
          </div>
        </Link>
        <Link to="/genre">
          <li>Genre</li>
        </Link>
        <Link to="/admin">
          <li>Admin</li>
        </Link>
      </ul>
    </header>
  );
}

function Admin() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // axios.get("")
    const isAdmin = false;
    setTimeout(() => {
      if (!isAdmin) {
        // redireccionar a home
        console.log("NAVIGATE!");
        setLoading(false);
        navigate("/");
      }
    }, 1000);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}

function Playlist() {
  return (
    <div>
      <h1>Playlist</h1>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function User() {
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ id: 3, displayName: username, email: `${username}@mail.com` });
  }, [username]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>El usuario es: {user.displayName}</p>
      <p>El usuario es: {user.email}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<User />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
