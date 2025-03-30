import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  // Saving password to the local storage
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // shwoing password and saving password
  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  // Saving password to the local storage
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  return (
    <div>
      {/* Background Section Added */}
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      {/* Manager Section */}
      <div className="text-white mycontainer md:p-8 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mt-4">
          <span className="text-green-400">&lt;</span>
          <span>Secure</span>
          <span className="text-green-400">Z/&gt;</span>
        </h1>
        <p className="font-bold text-md text-center mt-1 text-green-400">
          Your own Password Manager!
        </p>

        <div className="text-white flex items-center flex-col p-5 space-y-4 w-full">
          {/* input for website */}
          <input
            name="site"
            onChange={handleChange}
            value={form.site}
            type="text"
            placeholder="Enter website url"
            className="rounded-lg border border-green-500 bg-transparent py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          />
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* input for username */}
            <input
              name="username"
              onChange={handleChange}
              value={form.username}
              type="text"
              placeholder="Enter Username"
              className="rounded-lg border border-green-500 bg-transparent py-3 px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <div className="relative flex-1">
              {/* input for password */}
              <input
                name="password"
                onChange={handleChange}
                value={form.password}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="rounded-lg border border-green-500 bg-transparent py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-green-400"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
          <button
      className="flex justify-center items-center bg-[#211252] w-45 gap-2 font-bold p-2 rounded-2xl hover:text-green-400"
      onClick={savePassword}
      disabled={!form.site || !form.username || !form.password}
    >
      <lord-icon
        src="https://cdn.lordicon.com/sbnjyzil.json"
        trigger="hover"
        stroke="bold"
        state="hover-swirl"
        colors="primary:#ffffff,secondary:#08a88a"
      ></lord-icon>
      Add Password
    </button>
        </div>
      </div>

      {/* Password List Section */}
      <div>
      <h1 className="text-4xl font-bold text-center mt-4 mb-6">
          <span className="text-green-400">&lt;</span>
          <span className="text-white">Your </span>
          <span className="text-green-400">Passwords/&gt;</span>
        </h1>

        <div className="passwords flex items-center justify-center">
          <table className="w-3/4 border-collapse bg-[#211252] text-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-[#111111]">
                <th className="border p-4 text-left">Website</th>
                <th className="border p-4 text-left">Username</th>
                <th className="border p-4 text-left">Password</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item, e) => (
                <tr
                  key={e}
                  className="even:bg-[#1e1e2e] odd:bg-[#28293d] hover:bg-[#3a3b52] transition-all"
                >
                  <td className="border p-4">{item.site}</td>
                  <td className="border p-4">{item.username}</td>
                  <td className="border p-4" type="password">{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Manager;
