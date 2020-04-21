import Vue from "vue"
import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://mobcor.justweedthoughts.com/",
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
})

apiClient.interceptors.request.use(
  (request) => {
    console.log("intercepted request")
    console.log(request)
    request.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
    return request
  },
  (error) => {
    console.log("intercepted errored request")
    console.error(error)
    return error
  }
)

Vue.prototype.$axios = apiClient
