import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Category = () => {
  const [listing, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // get a reference
        const listingsRef = collection(db, "listings");

        // create a query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // when you execute the query you get a snapshot of that data
        //gets docs (table rows) for that specific query
        const querySnap = await getDocs(q);

        // A firebase thing - loop through the snapshot, so initialize empty array

        const listings = [];

        querySnap.forEach((doc) => {
          console.log("categories", doc.data());
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    }

    fetchListings();
  }, [params.categoryName]);

  return (
    <div className='category'>
      <header>
        <p className='pageHeader'>
          {params.categoryName === 'rent'
            ? 'Places for rent'
            : 'Places for sale'}
        </p>
      </header>

     {loading ? (
        <Spinner />
     ) : listings && listings.length > 0 ? (
        <></>
     ) : (
        <p> No Listings For {params.categoryName}</p>
     )}

      </div>
    )
};

export default Category;
