// import React, { useState } from 'react'
// import "./App.css"; 
// import profile from"./assets/profile.gif/"
// import email from "./assets/email.gif"
// import phone from "./assets/support.gif"
// import work from "./assets/work.gif"
// import Websiteandapp from './Websiteandapp';
// import Demowebsite from './Demowebsite';
// import Ourproduct from './ourproduct';
// const Home = () => { 




// //https://script.google.com/macros/s/AKfycbyHphfQijDtr6-GF5TdHljJqCZ-_ieXe_lyqbW_NZJ6bYHo7NM4gjKysihTa0PjTa0/exec

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   number: "",
//   role: ""
// });
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("https://script.google.com/macros/s/AKfycbyHphfQijDtr6-GF5TdHljJqCZ-_ieXe_lyqbW_NZJ6bYHo7NM4gjKysihTa0PjTa0/exec", {  // <-- Replace this with your SheetDB URL
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ data: formData })
//       });

//       const result = await res.json();
//       console.log(result);
//       alert("✅ Data saved successfully!");
//       setFormData({ name: "", email: "", number: "", role: "" }); // Reset form
//     } catch (error) {
//       console.error(error);
//       alert("❌ Something went wrong!");
//     }
//   };















//   return (
//      <div  className='h-screen bg-gradient-to-t from-red-400 via-pink-500 to-blue-300 ' >
//     <h1 className=" text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
//         bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 
//         bg-[length:200%_200%] animate-gradient-move text-center pt-5">
//         Namaste Creators
//       </h1>

//       <p className='md:text-5xl text-4xl font-bold text-white text-center mt-6'>Launch your course on  <br />your <span className=' text-4xl md:text-6xl bg-clip-text text-blue-500'>App</span>  and  <span className='text-4xl md:text-6xl bg-clip-text text-blue-500'>Website</span>.</p>
    
    




// <div className=" bg-gradient-to-t from-red-400 via-pink-500 to-blue-300 flex items-center justify-center">
//   <div className='h-[780px] bg-transparent'>
//       <div className="curve-box relative md:w-[550px] w-[360px] mt-10 ">
        
     
//         <svg
//           viewBox="0 0 500 500"
//           preserveAspectRatio="none"
//           className="absolute top-0 left-0 w-full h-full"
//         >
//           <path
//             d="M100 0 C200 150, 400 100, 500 200 L500 500 L0 500 L0 0 Z"
//             fill="white"
//           />
//         </svg>

   
//         <div className="form-content relative p-10">
//           <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-blue-800">
// Join Us          </h2>


// <form action=""  id="form">


//           <p className="mt-6 text-black">Full Name</p>
        

//  <div className="flex items-center border rounded  mt-2">
  
//       <img src={profile} alt="profile" className="w-9 h-9 rounded-full m-2" />

  
//       <input
//         type="text"
//         name="name"

//   value={formData.name}
//   onChange={handleChange} 
//         placeholder="Enter your name"

//         className="w-full outline-none  p-3 text-xl text-clip text-blue-400 bg-clip-text"
//       />
//     </div>










//           <p className="mt-4 text-black">Email</p>
//           {/* <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full p-2 mt-2 border rounded"
//           /> */}




//  <div className="flex items-center border rounded  mt-2">
      
//       <img src={email} alt="profile" className="w-9 h-9 rounded-full m-2" />


//       <input
//         type="email"
//         placeholder="Enter your Email"
//         className="w-full outline-none  p-3 text-xl text-clip text-blue-400 bg-clip-text"
//       />
//     </div>








//           <p className="mt-4 text-black">Number</p>
       
//  <div className="flex items-center border rounded  mt-2">
      
//       <img src={phone} alt="profile" className="w-9 h-9 rounded-full m-2" />


//       <input
//         type="number"
//         placeholder="Enter your Number"
//         className="w-full outline-none  p-3 text-xl text-clip text-blue-400 bg-clip-text"
//       />
//     </div>
//           <p className="mt-4 text-black "> 

// Which Best Defines You?</p>
//          <div>
            
//           <select  className='w-full p-2 mt-2 border rounded text-blue-400'>

// <option value="" className='flex justify-start items-center'> <img src={work} alt="work" className="w-9 h-9 rounded-full m-2" />Select your role</option>
// <option value="teacher" className='text-blue-400'>teacher</option>
// <option value="creator">creator</option>
// <option value="entrepreneur">entrepreneur</option>
// <option value="developer">developer</option>
// <option value="Runs offline coaching">Runs offlin offline</option>
// <option value="student">student</option>
// <option value="other">none</option>

//               </select>
// </div>
//           <button className="mt-6 w-full py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold rounded  text-2xl md:text-4xl hover:scale-105 shadow-glow">
//       Claim Free Demo
//           </button>



//           <p className="mt-4 text-black texy-xl text-center"> 📜 By joining, you accept our Terms & Privacy Policy.</p>
//           </form>
//         </div>
//       </div>
//       </div>
//     </div>


//                        {/* websiteandapp */}


// <Websiteandapp></Websiteandapp>
// <Demowebsite></Demowebsite>
// <Ourproduct></Ourproduct>




//     </div>
   


//   )
// }

// export default Home











import React, { useState } from 'react'
import "./App.css"; 
import profile from "./assets/profile.gif"
import email from "./assets/email.gif"
import phone from "./assets/support.gif"
import work from "./assets/work.gif"
import Websiteandapp from './Websiteandapp';
import Demowebsite from './Demowebsite';
import Ourproduct from './ourproduct';
import Support from './support';

const Home = () => { 



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    role: ""
  });

  const handleChange = (e) => {
    const {name,value}=e.target
    setFormData({ ...formData, [name]:value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create URLSearchParams from form data
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append("name", formData.name);
    formDataEncoded.append("email", formData.email);
    formDataEncoded.append("number", formData.number);
    formDataEncoded.append("role", formData.role);

    try {
      // Using your Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbydwGaNr8oeopkp9U8L5zymyfOPLO8FRb5ofzIiccLjWNAFsXunE3lEp8VqwLdGHd34/exec";
      
      const res = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded
      });

      // Since we're using no-cors mode, we can't read the response
      alert("✅ Data submitted successfully!");
      setFormData({ name: "", email: "", number: "", role: "" }); // Reset form
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-t from-red-400 via-pink-500 to-blue-300'>
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 
        bg-[length:200%_200%] animate-gradient-move text-center pt-5">
        Namaste Creators
      </h1>

      <p className='md:text-5xl text-4xl font-bold text-white text-center mt-6'>
        Launch your course on your <span className='text-4xl md:text-6xl bg-clip-text text-blue-500'>App</span> and <span className='text-4xl md:text-6xl bg-clip-text text-blue-500'>Website</span>.
      </p>
    
      <div className="bg-gradient-to-t from-red-400 via-pink-500 to-blue-300 flex items-center justify-center">
        <div className='h-[780px] bg-transparent'>
          <div className="curve-box relative md:w-[550px] w-[360px] mt-10">
            <svg
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
              className="absolute top-0 left-0 w-full h-full"
            >
              <path
                d="M100 0 C200 150, 400 100, 500 200 L500 500 L0 500 L0 0 Z"
                fill="white"
              />
            </svg>

            <div className="form-content relative p-10">
              <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-blue-800">
                Join Us
              </h2>

              <form onSubmit={handleSubmit} id="form">
                <p className="mt-6 text-black">Full Name</p>
                <div className="flex items-center border rounded mt-2">
                  <img src={profile} alt="profile" className="w-9 h-9 rounded-full m-2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full outline-none p-3 text-xl text-clip text-blue-400 bg-clip-text"
                    required
                  />
                </div>

                <p className="mt-4 text-black">Email</p>
                <div className="flex items-center border rounded mt-2">
                  <img src={email} alt="email" className="w-9 h-9 rounded-full m-2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full outline-none p-3 text-xl text-clip text-blue-400 bg-clip-text"
                    required
                  />
                </div>

                <p className="mt-4 text-black">Number</p>
                <div className="flex items-center border rounded mt-2">
                  <img src={phone} alt="phone" className="w-9 h-9 rounded-full m-2" />
                  <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter your Number"
                    className="w-full outline-none p-3 text-xl text-clip text-blue-400 bg-clip-text"
                    required
                  />
                </div>

                <p className="mt-4 text-black">Which Best Defines You?</p>
                <div className="flex items-center border rounded mt-2">
                  <img src={work} alt="work" className="w-9 h-9 rounded-full m-2" />
                  <select 
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-2 text-xl text-blue-400 bg-transparent outline-none"
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="teacher">Teacher</option>
                    <option value="creator">Creator</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="developer">Developer</option>
                    <option value="Runs offline coaching">Runs offline coaching</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="mt-6 w-full py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold rounded text-2xl md:text-4xl hover:scale-105 shadow-glow"
                >
                  Claim Free Demo
                </button>

                <p className="mt-4 text-black text-xl text-center">
                  📜 By joining, you accept our Terms & Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Websiteandapp />
      <Demowebsite />
      <Ourproduct />
     <Support/>
    </div>
  )
}

export default Home