"use client"

import { secureStorage } from "@/lib/secureStorage";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async(e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username,email,password})
            })
           
    
            const data = await res.json()

            if(!res.ok) throw new Error(data.error || "Error while register")
            secureStorage.setItem("accessToken", data.data.accessToken)
            secureStorage.setItem("refreshToken", data.data.refreshToken)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="w-full h-full grid items-center justify-center">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit">Register</button>
        </form>
        </div>
    );
    }
