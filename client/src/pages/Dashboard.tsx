import React, { useEffect, useState } from "react";
import {
  getJobApplications,
  getJobs,
  postDeleteJob,
} from "../services/APIcalls/jobs";
import ApplicationCard from "../Components/ApplicationCard";
import ConfirmModal from "../Components/ConfirmModal";
import JobTableCard from "../Components/JobTableCard";
import SearchBar from "../Components/SearchBar";

function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  const findQuery = (data) => {
    setQuery(data);
  };

  const filteredData = applications?.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase().trim()) ||
      item.email.toLowerCase().includes(query.toLowerCase().trim())
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getJobApplications();
        // console.log('data from error try catch',data)
        setApplications(data);
      } catch (error) {
        console.log("Error while fetching job applications", error);
      }
      const jobData = await getJobs();
      console.log(jobData);
      setJobs(jobData);
    };
    getData();
  }, []);

  const handleSort = (e) => {
    console.log(e.target.value);
    const applicationsCopy = [...applications];
    const sorted = applicationsCopy.sort((a, b) => {
      if (e.target.value == "Latest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (e.target.value == "Oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });
    setApplications(sorted);
    console.log(sorted);

    console.log(applications);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold pb-5">Dashboard</h1>

      {/* Stats section */}
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Open Jobs</div>
          <div className="stat-value">10</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Applications</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* applications section */}
      <p className="text-xl font-semibold p-5 text-left">applications </p>
      <div className="drop-shadow-xl p-5 bg-slate-50 rounded-lg overflow-auto  w-full max-w-7xl h-full max-h-[25rem]">
        <div>
          <div className="flex flex-row items-center mb-3 gap-4 justify-center">
            <SearchBar query={query} findQuery={findQuery} />
            <select
              onChange={handleSort}
              className="select  select-info w-30 border-gray-300"
            >
              <option disabled selected>
                Sort By
              </option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <div className="flex flex-row flex-wrap gap-6  justify-center">
            {filteredData && filteredData.length ? (
              filteredData?.map((item) => {
                return <ApplicationCard item={item} />;
              })
            ) : (
              <>no Applications found</>
            )}
          </div>
        </div>
      </div>

      {/* jobs section*/}

      <div className=" mx-auto m-5 p-5 w-full max-w-8xl drop-shadow-xl   bg-white flex flex-col">
        {/* jobs edit section */}
        <h1 className="text-2xl p-6">Edit jobs</h1>
        {jobs && jobs.length > 0 ? (
          jobs.map((item) => {
            return <JobTableCard item={item} jobs={jobs} setJobs={setJobs} />;
          })
        ) : (
          <>no Jobs found</>
        )}

        {/* <ConfirmModal  /> */}
      </div>
    </div>
  );
}

export default Dashboard;
