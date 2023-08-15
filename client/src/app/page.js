"use client"
import Login from '@/components/Login';
import AuthService from '../services/authServices';
import { useState } from 'react';


export default function Home() {

    const [show, setShow] = useState(AuthService.isAuthenticated())
 

    return (!show && <Login />);
}
