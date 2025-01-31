import { useRouter } from "next/navigation";
import { useState } from "react";

export const useRegister = () => {
    const router = useRouter();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const register = async (username, email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('http://ec2-51-20-31-127.eu-north-1.compute.amazonaws.com/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setLoading(false)
            setError(json.message)
        }
        if (response.ok) { 
            localStorage.setItem('user', JSON.stringify(json))

            dispatch(({ type: 'LOGIN', payload: json }))

            setLoading(false)

            router.push("/");
        }
    }

    return { register, loading, error }
}