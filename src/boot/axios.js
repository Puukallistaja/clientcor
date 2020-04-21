import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  baseURL: "https://mobcor.justweedthoughts.com/",
  headers: { Auth: `Bearer ${localStorage.getItem("accessToken")}` },
})
