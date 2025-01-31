import { useState } from "react";
import { useUserContext } from "./useUserContext";
import { useRouter } from "next/navigation";

export const useLogin = () => {
    const router = useRouter();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { user, dispatch } = useUserContext()

    const login = async (email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch("http://ec2-51-20-31-127.eu-north-1.compute.amazonaws.com/api/users/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        console.log(json, response);
        console.log(json.role);

        if (!response.ok) {
            setLoading(false)
            setError(json.message)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch(({ type: 'LOGIN', payload: json }))

            setLoading(false)

            // if (json.role === "manager") {
            //     navigate('/manager-dashbord')
            // } else if (json.role === "admin") {
            //     navigate('/admin-dashbord')
            // } else if (json.role === "client") {
            //     navigate('/')
            // }
            router.push("/")
        }
    }

    return { login, loading, error }
}