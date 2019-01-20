import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import config from '../config'

// Initialize Firebase
firebase.initializeApp(config)
const database = firebase.database()
const dataRef = database.ref('/data')

export const resetFirebase = () => dataRef.set({})

export const useFirebase = () => {
  const [data, setData] = useState({})
  const [isReady, setLoading] = useState(false)

  useEffect(() => {
    dataRef.once('value').then(data => {
      setData(data.toJSON() || {})
      setLoading(true)
    })

    dataRef.on('value', snapshot =>
      setTimeout(() => setData(snapshot.val() || {}, 300)),
    )
  }, [])

  const incrementValueOf = id => {
    const ref = database.ref(`/data/${id}`)
    ref.once('value').then(value => {
      const nextValue = (parseInt(value.toJSON(), 10) || 0) + 1
      ref.set(nextValue)
    })
  }

  return [{ data, isReady }, incrementValueOf]
}
