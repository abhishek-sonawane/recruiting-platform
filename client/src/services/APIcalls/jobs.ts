import api from "../api_instance";

export const globalOptions = {
  credentials: "include",
  headers: {
    Authorization: `bearer ${
      JSON.parse(localStorage.getItem("userData"))?.token
    }`,
  },
};

// get all jobs
export const getJobs = async () => {
  const options = { mode: "cors", credentials: "include" };
  try {
    const response = await api.get("/", options);
    return response.data;
  } catch (error) {
    console.log("error getting all the jobs ::getJobs::", error);
    throw new Error(error);
  }
};

// get single job
export const getSingleJob = async (id) => {
  const response = await api.get(`/job/${id}`);
  return response.data;
};

//apply to job (for everyone)
export const postApplyJob = async (id, payload) => {
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
    throw new Error(error);
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
    throw new Error(error);
  }
};

// update job
export const postEditJob = async (id, title, description) => {
  try {
    const response = await api.post(`/job/update/${id}`, {
      title,
      description,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// delete job
export const postDeleteJob = async (id) => {
  try {
    const response = await api.post(`job/delete/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// post job (for Admin)
export const postJob = async (payload) => {
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
    throw new Error(error);
  }
};

// update application status
export const changeApplicationStatus = async (id, payload) => {
  try {
    const response = await api.post("/job/apply/edit", {
      job_id: id,
      data: payload,
    });
    return response;
  } catch (error) {
    console.error(error.message);
    throw new Error(error);
  }
};
