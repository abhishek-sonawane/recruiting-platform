import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getSingleJobs } from "../redux/thunks/jobThunk";
import { MdWorkHistory } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

function SingleJob() {
  const navigate = useNavigate();
  const { jobID } = useParams();
  // const [job,setJob] = useState({})
  const job = useSelector((state) => state.jobs.singleJob);
  const dispatch = useDispatch();

  const applyToJob = () => {
    navigate(`/job/apply/${jobID}`, {
      state: { title: job.title },
    });
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        dispatch(getSingleJobs(jobID));
        document.title = job.title;
      } catch (error) {
        console.log(`error: ${error.message}`);
        navigate("/404");
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="flex max-w-5xl w-full flex-1 flex-row text-left">
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-slate-400 rounded-lg text-lg flex items-center gap-3 top-4 absolute left-27 text-slate-800 font-medium"
      >
        {" "}
        <BiArrowBack /> go back
      </button>
      <div className=" flex flex-col gap-4 w-full">

        {/* summary box */}
        <div className="border rounded-2xl  p-4">
          <div className="p-5 flex flex-col gap-4">
            <h1 className=" text-3xl font-semibold ">
              dummy
              {/* {job.title} */}
            </h1>

            <div className="flex flex-row gap-9" >
              <p className="text-gray-600 flex flex-row items-center gap-1 font-medium ">
                <RiMoneyDollarBoxLine /> 50k-80k
              </p>

              <p className="text-gray-600 flex flex-row items-center gap-1 font-medium ">
                <RiMoneyDollarBoxLine /> Part Time
              </p>

              <p className="text-gray-600 flex flex-row items-center gap-1 font-medium ">
                <CiLocationOn /> Mumbai
              </p>


            </div>

            <div className="flex flex-row justify-between items-center" >
              <div className="flex flex-row items-center  gap-9">
                <p>
                  created : {new Date(job?.createdAt).toLocaleString().split(",")[0]}
                </p>
                <p className="flex flex-row items-center gap-2 py-5">
                  <MdWorkHistory />
                  {job?.experience || '1 Year'}
                </p>
              </div>
              <button
                className=" px-5 py-3 text-xl text-white font-semibold bg-black rounded-xl"
                onClick={() => applyToJob()}
              >
                Apply now
              </button>
            </div>
          </div>
        </div>


        {/* description box */}
        <div className=" border rounded-2xl p-4 flex flex-col gap-2" >
          <div>
            <p className="text-xl font-semibold py-2 " >Description :</p>
            <p className=" text-lg max-w-2xl w-full">{job.description}</p>
          </div>

          <div>
            <p className="text-xl font-semibold py-2" >Responsibilities :</p>

            {/* <p className=" "> */}
            <ul>
              <li>1</li>
              <li>2</li>
              <li>23</li>
            </ul>
            {/* </p> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SingleJob;
