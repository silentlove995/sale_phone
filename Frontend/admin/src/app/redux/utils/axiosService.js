import axios from 'axios'
import jwt_decode from "jwt-decode";

export const API_ENDPOINT = 'http://localhost:8080/api'
const token =
  'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkdW5nbnRAZWFyYWJsZS5haSIsInJvbGUiOltdLCJ0b2tlbl9pZCI6IjcxNjkzYzljLWJhNWUtNGY4NS04ZTk1LWEzZjFkN2I0YWRjZCIsInVzZXJfaWQiOiJkNzAzNzAzYy03ZGE4LTQ5M2YtOTAyYy1mODA5MDI5YTNmNjUiLCJleHAiOjMzMjE3NzY4NTcwLCJpYXQiOjE2NjA4MTY1NzB9.KgD2Ulx9B1O0wcbY_MjacEGOk29KbD21XqB5oNnHUnTn7QPon_u8AFiZ2BMhD0Xv07dqxO25ErDfpHl0htzvNTqDvGSJg73m9njy73AnojC947tV0uCjBVBv55CwXgeoiZA83rnaLgmCs8UExp0sfNg5e1qD7MpKO4MP5pUGHSXY_kOJwBhPqWOHodZTOkQXC49ddGvLfzfKCxXw6DWg2xT0jjkXFVZFXguhQvTI_AFONaQdW4-yZAsfwn9rz8bPMqmKHT2Rq7RC7yug17z7aeoN3uQpPv4RCMdGR2DNNJT7bQvf0fy9v2caFzVsSDGCivMyFfLb0O6aXXQytrEHmA'
class AxiosServer {
  constructor() {
    const instance = axios.create()
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  getConfig(IsAuth, customHeader) {
    const headers = {
      'Content-Type': 'application/json',
    }
    if (token) {
      const userData = jwt_decode(token)
      if (userData && userData.exp > Date.now() / 1000) {
        headers.Authorization = 'Bearer ' + token
      }
    }
    return {
      baseURL: API_ENDPOINT,
      headers: headers,
    }
  }

  handleSuccess(response) {
    return response
  }

  handleError(err) {
    return Promise.reject(err)
  }

  getWithoutAuth(url) {
    return this.instance.get(url, this.getConfig(false))
  }

  get(url) {
    return this.instance.get(url, this.getConfig(true))
  }

  post(url, body, headerCustom) {
    return this.instance.post(url, body, this.getConfig(true, headerCustom))
  }
  put(url, body, headerCustom) {
    return this.instance.put(url, body, this.getConfig(true, headerCustom))
  }

  delete(url) {
    return this.instance.delete(url, this.getConfig(true))
  }

  postWithoutAuth(url, body) {
    return this.instance.post(url, body, this.getConfig(false))
  }
}

export default new AxiosServer()
