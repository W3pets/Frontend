import { baseUrl } from "@/api/route";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useRegister = () => {
    const router = useRouter();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const register = async (username, email, password) => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`${baseUrl}/api/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            })
            const json = await response.json()

            if (!response.ok) {
                setError(json.message)
            }
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(json.user))
                localStorage.setItem('token', json.token)
                dispatch(({ type: 'LOGIN', payload: json }))
                router.push("/");
            }
        } catch (error) {
            setError('An error occurred. Please try again.')
            console.error('Register error:', error)
        } finally {
            setLoading(false);
        }
    }

    return { register, loading, error }
}