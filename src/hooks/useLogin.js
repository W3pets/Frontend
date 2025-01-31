import { useState } from "react";
import { useUserContext } from "./useUserContext";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/api/route";

export const useLogin = () => {
    const router = useRouter();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { dispatch } = useUserContext()

    const login = async (email, password) => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`${baseUrl}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const json = await response.json()

            console.log(json, response);
            console.log(json.role);

            if (!response.ok) {
                setError(json.message)
            }
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(json.user))
                localStorage.setItem('token', json.token)
                dispatch(({ type: 'LOGIN', payload: json }))
                router.push("/")
            }
        } catch (error) {
            setError('An error occurred. Please try again.')
            console.error('Login error:', error)
        } finally {
            setLoading(false);
        }
    }

    return { login, loading, error }
}