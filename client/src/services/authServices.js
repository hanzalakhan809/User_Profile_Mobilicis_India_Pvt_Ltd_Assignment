"use client"
import axios from 'axios';

// Assuming your Express server is running on 'http://localhost:5000', adjust this as necessary
const URL = 'http://localhost:8080/auth/';

class AuthService {
  constructor() {
    this.authenticated = false;
  }


  signup(name, email, password) {
    return axios.post(URL + 'signup', { name, email, password })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => {
        console.log("Signup Error:", err);
      });
  }

  login(email, password) {
    return axios.post('http://localhost:8080/auth/login', { email, password })
      .then(response => {
        if (response.data && response.data.token) {
          this.authenticated = true;
          localStorage.setItem('userToken', response.data.token);
        }
        console.log(response.data.token);
        return response.data;
      })
      .catch(err => {
        console.log("Login Error:", err);
      });
  }

  logoutUser() {
    this.authenticated = false;
    localStorage.removeItem('userToken');
    // If you want to redirect after logout, you can use history object from react-router-dom 
    // e.g., this.history.push('/')
  }

  isAuthenticated() {
    return localStorage.getItem('userToken') ? true : false;
  }


}

export default new AuthService();
