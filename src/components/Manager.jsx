import React, { useState, useEffect, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast, Bounce } from 'react-toastify';

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
    toast.success('New Password Added', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  };

  // Saving password to the local storage
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  // Copying text to the clipboard
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.info('Copied to Clipboard!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      
  };

    // Editing text from the local storage
    const editText = (item) => {
      const updatedArray = passwordArray.map((password) => {
        if (password.site === item.site) {
          return { ...password, ...form };
        }
        return password;
      });
      setPasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
    };

  // Deleting text from the local storage
  const deleteText = (item) => {
    const updatedArray = passwordArray.filter(
      (password) => password.site !== item.site
    );
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    toast.error('Password Deleted', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  };


  return (
    <div>
          <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition="Bounce"
/>
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
        <h1 className="text-4xl font-bold text-center mt-4 mb-6 passwords">
          <span className="text-green-400">&lt;</span>
          <span className="text-white">Your </span>
          <span className="text-green-400">Passwords/&gt;</span>
        </h1>

        <div className="passwords flex items-center justify-center">
          <table className="w-3/4 border-collapse bg-[#211252] text-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-[#111111]">
                <th className="border p-4 text-center">Website</th>
                <th className="border p-4 text-center">Username</th>
                <th className="border p-4 text-center">Password</th>
                <th className="border p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody> 
              {passwordArray.map((item, e) => (
                <tr
                  key={e}
                  className="even:bg-[#1e1e2e] odd:bg-[#28293d] transition-all"
                >
                  <td className="border p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span>{item.site}</span>
                      <div onClick={()=>{copyText(item.site)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/zqyyfteh.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#ffffff,secondary:#08a88a"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>
                    </div>
                  </td>

                  <td className="border p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span>{item.username}</span>
                      <div onClick={()=>{copyText(item.username)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/zqyyfteh.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#ffffff,secondary:#08a88a"
                          style={{ width: "25px", height: "25px" }}
                          onlcliclk={() => {
                            navigator.clipboard.writeText(item.username);
                            alert("Username copied to clipboard");
                          }}
                        ></lord-icon>
                      </div>
                    </div>
                  </td>

                  <td className="border p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span>{item.password}</span>
                      <div onClick={()=>{copyText(item.password)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/zqyyfteh.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#ffffff,secondary:#08a88a"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>
                    </div>
                  </td>

                  <td className="border p-3">
                    <div className="flex gap-4 justify-center items-center">
                      <div className="edit" onClick={()=>{editText(item)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/exymduqj.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#ffffff,secondary:#08a88a"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>

                      <div className="delete" onClick={()=>{deleteText(item)}}>  
                        <lord-icon
                          src="https://cdn.lordicon.com/hwjcdycb.json"
                          trigger="morph"
                          stroke="bold"
                          state="morph-trash-in"
                          colors="primary:#ffffff,secondary:#08a88a"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>
                    </div>
                  </td>
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
