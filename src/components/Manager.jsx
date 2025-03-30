import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);

  // form state for password manager
  const [form, setForm] = useState({site: "", username: "", password: ""});

  // shwoing password and saving password
  const savePassword = () => {
    console.log(form);
  }

  // Saving password to the local storage
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  // Saving password to the local storage
  const [passwords, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, [])
  
  

  return (
    <div>
      {/* Background Section Added */}
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      {/* Manager Section */}
      <div className="text-white mycontainer p-4 md:p-8 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mt-4">
          <span className="text-green-400">&lt;</span>
          <span>Secure</span>
          <span className="text-green-400">Z/&gt;</span>
        </h1>
        <p className="font-bold text-md text-center mt-1 text-green-400">
          Your own Password Manager!
        </p>

        <div className="text-white flex items-center flex-col p-4 space-y-4 w-full">
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
          <button className="flex justify-center items-center bg-[#211252] w-45 gap-2 font-bold p-2 rounded-2xl hover:text-green-400" onClick={savePassword}>
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
      {/*  */}
    </div>
  );
};

export default Manager;
