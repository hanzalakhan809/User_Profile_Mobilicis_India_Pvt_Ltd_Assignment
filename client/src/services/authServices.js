"use client"
import axios from 'axios';

const URLFORAUTH = 'http://localhost:8080/auth/';
const URLFORUSER = 'http://localhost:8080/user/';

class AuthService {
  constructor() {
    this.authenticated = false;
  }


  signup(name, email, password) {
    return axios.post(URLFORAUTH + 'signup', { name, email, password })
      .then(response => {
        console.log(response.data);
        alert('Signup successful! You can now login.');

        return response.data;
      })
      .catch(err => {
        console.log("Signup Error:", err);

        if (err.response && err.response.data && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert('An error occurred during the signup process. Please try again later.');
        }
        throw err;
      });
  }


  
  login(email, password) {
    return axios.post(URLFORAUTH + 'login', { email, password })
      .then(response => {
        if (response.data && response.data.token) {
          this.authenticated = true;
          localStorage.setItem('userToken', response.data.token);
          localStorage.setItem('mobilicisEmail', email);
        }
        console.log(response.data.token);
        return response.data;
      })
      .catch(err => {
        console.log("Login Error:", err);
        if (err.response && err.response.data && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert('An error occurred during the Login process. Please try again later.');
        }
        throw err;
      });
  }



  logoutUser() {
    this.authenticated = false;
    localStorage.removeItem('userToken');
    localStorage.removeItem('mobilicisEmail');
   
  }


  async getMyProfileData() {
    const token = await localStorage.getItem('userToken');
    console.log(token, "iam token")

    return axios.get(URLFORUSER + 'userProfile', {
      headers: {
        'x-auth-token': token
      }
    })
      .then(response => {
        console.log(response.data);
        //  RETURN RESPONSE/MY PROFILE DATA
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }

  async updateUserProfile(updatedData) {
    const token = localStorage.getItem('userToken');  

    try {
      const response = await axios.put(URLFORUSER + "updateUserProfile", updatedData, {
        headers: {
          'x-auth-token': token,  
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating user profile:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  isAuthenticated() {
    return localStorage.getItem('userToken') ? true : false;
  }


}

export default new AuthService();
