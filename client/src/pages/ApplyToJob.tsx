import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useToast } from "../context/ToastContext";
import { BiArrowBack } from "react-icons/bi";
import { postJobApplicationThunk } from "../redux/thunks/applicationThunk";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";

function ApplyToJob() {
  const { jobID } = useParams();
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const submitted = useAppSelector(state => state.Application?.singleApplication.submitted)
  console.log('submitted state', submitted)
  const loading = useAppSelector(state => state.Application?.singleApplication.loading)
  const response = useAppSelector(state => state.Application?.singleApplication.response.res)
  // const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();
      // setLoading(true);
      // const res = await postApplyJob(jobID, {
      //   file: file,
      //   name: name,
      //   email: email,
      // }); 

      const response = await dispatch(postJobApplicationThunk({ jobID, file, name, email })).unwrap()

      // const wait = (time)=>{
      // await new Promise((res)=> {
      //   setTimeout(() => {
      //     res('');
      //   }, 2000)
      // })
      console.log('response', response)
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
      else {
        toast.open(
          {
            type: 'error',
            text: response || 'something went wrong posting the application.'
          }
        );
      }
    } catch (error) {
      toast.open(
        {
          type: 'error',
          text: error || 'something went wrong posting the application.'
        }
      );
    }
  };

  const handleFileUpload = (e) => {
    var file = e.target.files[0]
    if (file.type !== 'application/pdf') {
      e.target.value = null
      return toast.open({
        type: 'error',
        text: 'Invalid File Format. Please select PDF only'
      });
    }
    console.log('file==>', file)
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
              className={` p-3 ${name && email && file ? "bg-red-400 " : " bg-gray-300"
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
