import React, { useEffect, useState } from "react";
import FetchCall from "../utils/FetchCalls";
import { useNavigate } from "react-router-dom";
import { postJob } from "../services/APIcalls/jobs";
import { useToast } from "../context/ToastContext";

function CreateJob() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experience,setExperience] = useState("")
  const [jobType,setjobType] = useState("Full-time")
  const toast = useToast()

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    const res = await postJob({ title, description,experience,jobType });
    console.log(res.fetchData.status);
    if (res.fetchData.status === 200) {
    toast.open(
    <div className="alert alert-success">
      <span>Job created Successfully.</span>
    </div>)
      navigate("/");
    }
  };

  const selectHandler = (e)=>{
    setjobType(e.target.value)
  }

  useEffect(() => {
    document.title = "Create a job";
  }, []);
  return (
    <div className="grid place-items-center">
      <form
        className="flex flex-col gap-6 bg-white rounded-xl w-full p-20 max-w-xl"
        onSubmit={(e) => handleJobSubmit(e)}
      >
        <h1 className="text-3xl font-bold py-5 ">Create a job</h1>
        <input
          type="text"
          className=" input-field w-full"
          placeholder="title"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          className=" input-field w-full"
          placeholder="description"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <input
          type="text"
          className=" input-field w-full"
          placeholder="Experience"
          name="Experience"
          id="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <div className="flex flex-col justify-center items-center gap-2" >
        <label htmlFor="select">Job type</label>
          <select id="select" onChange={selectHandler} className="select select-bordered w-full mb-3 max-w-xs">
                 <option value="Full-time">Full Time</option>
                 <option value="Part-time">Part Time</option>
                 <option value="internship">intership</option>
          </select>
        </div>
        <button className="p-3 bg-red-400 rounded-lg text-white font-semibold text-xl w-full">
          post
        </button>
      </form>
    </div>
  );
}

export default CreateJob;
