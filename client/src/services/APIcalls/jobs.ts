import api from "../api_instance";

enum JobType {
  "Full-time",
  "Part-time",
  "internship",
}
interface postApplyJobParams {
  id: string;
  payload: {
    name: string;
    email: string;
    file: File;
  };
}

interface editJobParams {
  id: string;
  title: string;
  description: string;
}

interface postJobParams {
  title: string;
  description: string;
  experience: string;
  jobType: JobType;
}

interface ChangeApplicationStatusParams {
  id: string;
  newStatus: string;
}
// get all jobs
export const getJobs = async () => {
  const options = { mode: "cors", withCredentials: true };
  try {
    const response = await api.get("/", options);
    return response.data;
  } catch (error) {
    console.log("error getting all the jobs ::getJobs::", error);
    throw error;
  }
};

// get single job
export const getSingleJob = async (id: string) => {
  const response = await api.get(`/job/${id}`);
  return response.data;
};

//apply to job (for everyone)
export const postApplyJob = async ({ id, payload }: postApplyJobParams) => {
  try {
    const data = new FormData();
    data.append("job_id", id);
    data.append("name", payload.name);
    data.append("email", payload.email);
    data.append("pdf", payload.file);
    console.log("form data from post apply job", data);

    const response = await api.post("/job/apply", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // const resultData = res.json();
    return response;
    // return { res, resultData };
  } catch (error) {
    console.log("error message testing", error);
    throw error;
  }
};

// --------------------------- ADMIN CRUD ---------------------------

// get list of applications
export const getJobApplications = async () => {
  try {
    const response = await api.get("/recruiter/applications");
    console.log("working");
    return response?.data;
  } catch (error) {
    console.log("error message testing", error);
    throw error;
  }
};

// update job
export const postEditJob = async ({
  id,
  title,
  description,
}: editJobParams) => {
  try {
    const response = await api.post(`/job/update/${id}`, {
      title,
      description,
    });
    return response;
  } catch (error) {
    console.log("error message testing", error);
    throw error;
  }
};

// delete job
export const postDeleteJob = async (id: string) => {
  try {
    const response = await api.post(`job/delete/${id}`);
    return response;
  } catch (error) {
    console.log("error deleting job:", error);
    throw error;
  }
};

// post job (for Admin)
export const postJob = async (
  payload: postJobParams
): Promise<object | Error> => {
  try {
    const response = await api.post("/job/post/post-job", {
      title: payload.title,
      description: payload.description,
      experience: payload.experience,
      job_type: payload.jobType,
    });

    return response;
  } catch (error) {
    console.log("error posting the job, ::postJob:: ", error);
    throw error;
  }
};

// update application status
export const changeApplicationStatus = async ({
  id,
  newStatus,
}: ChangeApplicationStatusParams) => {
  try {
    const response = await api.post("/job/apply/edit", {
      job_id: id,
      data: payload,
    });
    return response;
  } catch (error) {
    console.error("error changing application status:", error);
    throw error;
  }
};
