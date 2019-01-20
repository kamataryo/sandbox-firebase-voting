import { useState, useEffect } from 'react'

export const useFirebase = () => {
  const [data, setData] = useState(null)
  const [isReady, setLoading] = useState(false)

  useEffect(async () => {
    // const response = await fetch()
    // setData(await response.json())
    setData({ 1: 100, 2: 200, 3: 10 })
    setLoading(true)
  }, [])

  return [{ data, isReady }, setData]
}
