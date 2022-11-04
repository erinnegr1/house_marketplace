import React from 'react'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom' 
import { 
    collection, 
    getDocs, 
    query, 
    where, 
    orderBy, 
    limit, 
    startAfter } from 'firebase/firestore'
import { db } from '../firebase.config'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'


const Category = () => {

    const [listing, setListings]= useState(null)
    const [loading, setLoading]= useState(true)

    const params = useParams()

    useEffect(()=> {
        const fetchListings = async () => {
            try {

            } catch (error) {

            }
        }
        fetchListings()
    })

  return (
    <div>Category</div>
  )
}


export default Category
