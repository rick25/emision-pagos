import { useState, useEffect } from 'react'

export function postHeaders(token) {
  return {
    ...authHeaders(token),
    'text-plain': '*/*',
    'Content-Type': 'application/json'
  }
}

export function authHeaders(token) {
  return {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}

export function useFetchJSON(url, setFn) {
  // const token = useSelector(state => state.usuario.datos.token)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let cancelar = false
    setIsLoading(true)
    setIsError(false)

    const fetchData = async () => {
      try {
        // const res = await fetch(url, { headers: authHeaders(token) })
        const res = await fetch(url)
        const json = await res.json()
        if (!cancelar) setFn(json)
      } catch (error) {
        if (!cancelar) setIsError(true)
      }

      setIsLoading(false)
    }

    if (!cancelar) fetchData()

    return () => {
      cancelar = true
    }
  }, [url, setFn])

  return [isLoading, isError]
}
