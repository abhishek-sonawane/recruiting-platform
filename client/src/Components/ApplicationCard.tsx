import React, { useEffect } from "react";
import { useState } from "react";
import { pdfjs } from "react-pdf";
import { changeApplicationStatus } from "../services/APIcalls/jobs";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface ApplicationCardProps {
  item: {
    _id: string,
    name: string,
    email: string,
    status: string,
    createdAt: string,
    updatedAt: string;
    cvPDF: { path: string };
  }
}

function ApplicationCard({ item }: ApplicationCardProps) {
  const [pdfLink, setPdfLink] = useState<string | null>(null);
  console.log(item);

  const applicationStatuses = ["applied", "resume_viewed"];



  const returnPdfPathLink = async (fileName: string) => {
    const pdfPath = getPdfPath(fileName.replace(/\\/g, "/"))
    return `${import.meta?.env?.VITE_BACKEND_ENDPOINT}/file/${pdfPath}`;
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("e", e.target.value);
    const newStatus = e.target.value;
    const appStatusMethod = async () => {
      const id = item._id;
      await changeApplicationStatus(id, newStatus);
    };
    appStatusMethod();
  };

  const getPdfPath = (item: string) => {
    console.log(item.split("/")[2]);
    return item.split("/")[2];
  };

  useEffect(() => {
    const fetchPdfLink = async () => {
      const link = await returnPdfPathLink(item?.cvPDF?.path);
      setPdfLink(link);
    };
    fetchPdfLink();
  }, [item?.cvPDF?.path]);


  return (
    <div className="border-slate-300 bg-slate-50 rounded-lg p-10 w-full border flex items-start 
   flex-col gap-6  md:flex-row
    "  >
      <div className=" flex-1 flex flex-col flex-wrap justify-start ">
        {/* Application details */}
        <div>
          <div className="flex flex-row items-center gap-2">
            <p>Name:</p>
            <p className="text-lg font-medium">{item.name}</p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <p>Email: </p>
            <p className="text-lg font-medium">{item.email}</p>
          </div>
          <div className="flex flex-row items-center gap-2 " >
            <p className="">
              Application Date :{" "}
              {new Date(item.createdAt).toLocaleString().split(",")[0]}
            </p>
          </div>
        </div>

        <br />
        {/* <p className='flex p-2'>Status: {item.status}</p> */}

        <button className=" text-center px-5 w-fit max-w-xs text-white rounded-lg py-3 flex bg-red-400 font-bold">
          {pdfLink ? (
            <a target="_blank" href={pdfLink} rel="noreferrer">
              View Resume
            </a>
          ) : (
            "Loading..."
          )}
        </button>
      </div>


      <div className="flex-1 flex flex-col items-start gap-3 " >
        <label htmlFor="selectStatus" className=" font-semibold" > Application status :</label>
        <select
          id="selectStatus"
          onChange={selectHandler}
          className=" flex-1 select select-bordered w-full mb-3 max-w-xl"
        >
          {applicationStatuses &&
            applicationStatuses.map((ApplicationItem) => {
              if (ApplicationItem == item.status) {
                return (
                  <option key={ApplicationItem} selected value={ApplicationItem}>
                    {ApplicationItem}
                  </option>
                );
              }
              return <option key={ApplicationItem} value={ApplicationItem}>{ApplicationItem}</option>;
            })}
        </select>
      </div>

    </div>
  );
}

export default ApplicationCard;
