import api from "../api_instance";

export const loginUser = async (username: string, password: string) => {
  try {
    setTimeout(async () => {
      const options = {
        method: "POST",
        credentials: "include",
      };
      const response = await api.post(
        `/auth/login`,
        { username: username, password: password },
        options
      );

      return response;
    }, 5000);
  } catch (error) {
    console.log("Error logging in the User ::loginUser::", error);
    throw error;
  }
};

export const postLogoutFromServer = async () => {
  try {
    const options = {
      withCredentials: true,
    };

    const response = await api.post("/user/user/logout", {}, options);
    return response;
  } catch (error) {
    console.log("error logginOut the user  ::postLogoutFromServer::", error);
    throw error;
  }
};

export const getUserDetails = async (id: string) => {
  try {
    const options = {
      method: "GET",
    };
    const response = await api.get(`/user/user/${id}`, options);
    return response;
  } catch (error) {
    console.log("Error getting the user details ::getUserDetails::", error);
    throw error;
  }
};
