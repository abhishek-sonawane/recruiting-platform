import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { postApplyJob } from "../services/APIcalls/jobs";
import { useToast } from "../context/ToastContext";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch,useSelector } from "react-redux";
import { postJobApplication } from "../slices/ApplicationSlice";

function ApplyToJob({ route }) {
  const { jobID } = useParams();
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const submitted = useSelector(state=>state.Application?.singleApplication.submitted)
  console.log('submitted state',submitted)
  const loading = useSelector(state=>state.Application?.singleApplication.loading)
  const response = useSelector(state=>state.Application?.singleApplication.response.res)
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // const res = await postApplyJob(jobID, {
    //   file: file,
    //   name: name,
    //   email: email,
    // }); 

    dispatch(postJobApplication(jobID,{file,name,email}))
      
    // const wait = (time)=>{
    // await new Promise((res)=> {
    //   setTimeout(() => {
    //     res('');
    //   }, 2000)
    // })
    console.log('response',response)
    if (response.status == 200) {
      // navigate('/')
      // setSubmitted(true);
      // setLoading(false);
      return toast.open(
        <div className="alert alert-success">
          <span>Applied to job Successfully.</span>
        </div>
      );
    }
    // setLoading(false);
    return toast.open(
      <div className="alert alert-success bg-red-500  absolute  md:relative">
        <span>something went wrong posting the application.</span>
      </div>
    );
  };

  const handleFileUpload = (e)=>{
    var file = e.target.files[0]
    if(file.type !== 'application/pdf'){
      e.target.value=null
      return toast.open(
        <div className="alert bg-red-200">
          <span>Invalid File Format. Please select PDF only</span>
        </div>
      ); 
    }
    console.log(file)
    setFile(file)
  }

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 ml-14 bg-slate-400 rounded-lg text-lg flex items-center gap-3 top-4 absolute left-27 text-slate-800 font-medium"
      >
        {" "}
        <BiArrowBack /> go Home
      </button>

      {submitted ? (
        <div>
          <p className="text-xl mt-40">
            your application has been submitted. We will contact you shortly
          </p>
        </div>
      ) : (
        <div className="grid place-content-center mt-20">
          <p className=" text-3xl font-semibold">{location.state.title}</p>
          <form
            className="flex flex-col gap-6 bg-white rounded-xl w-full p-20 max-w-xl"
            onSubmit={(e) => handleSubmit(e)}
            encType="multipart/form-data"
          >
            <input
              className=" input-field w-full"
              placeholder="your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className=" input-field w-full"
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="file" onChange={handleFileUpload} />
            <button
              disabled={!name.trim() || !email.trim() || !file}
              className={` p-3 ${
                name && email && file ? "bg-red-400 " : " bg-gray-300"
              } rounded-lg text-white font-semibold text-xl w-full `}
            >
              {loading ? (
                <img
                  width={30}
                  className="mx-auto"
                  src={"/loading.gif"}
                  alt=""
                />
              ) : (
                "submit"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ApplyToJob;
