import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sideBar/Sidebar";
import BlogsAdd from "../BlogsAdd/BlogsAdd";
import Notfound from "../Notfound/Notfound";
import Profile from "../Profile/Profile";
import Dashboard from "./../Dashboard/Dashboard";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/BlogWrite" element={<BlogsAdd />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
