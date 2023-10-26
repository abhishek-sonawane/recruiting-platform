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

  const filteredData = applications.filter(
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
      <h1 className="text-2xl font-bold pb-5">dash Board</h1>
      <p className="text-xl font-semibold p-5">applications </p>
      {/* applications section */}
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
