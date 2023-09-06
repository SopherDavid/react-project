import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


interface TripDetails {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}

export default function TripDetail() {
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
  const { id } = useParams();

 useEffect(() => {
  console.log('Fetching data for ID:', id);
  fetch(`http://localhost:3000/api/trips/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data: TripDetails) => {
      console.log('Fetched data:', data);
      setTripDetails(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // You can set an error state here to display an error message
    });
}, [id]);


async function deleteTrip() {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'authorization': 'test-token',
          'Content-Type': 'application/json', // Specify the content type
        },
      };
      const response = await fetch(`http://localhost:3000/api/trips/${id}`, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      window.location.href = '/trips';
    } catch (error) {
      console.error(error);
    }
  }

  if (!tripDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div id='tripCard'>
        <img src={tripDetails.image} alt={tripDetails.name} />
        <h3 className="info">{tripDetails.name}</h3>
        <p className="info"> Destination: {tripDetails.destination}</p>
        <p className="info"> Leaving On: {tripDetails.startDate}</p>
        <p className="info"> Returning: {tripDetails.endDate}</p>
        <p className="info"> Pricing: {tripDetails.price}</p>
        <p className="info">{tripDetails.description}</p>
        <h3 style={{padding:'0 2ch'}}> Activities:</h3>
            <ul >
            {tripDetails.activities.map((activity, index) => (
                <li key={index} >{activity}</li>
            ))}
            </ul>
        <button id="delete" onClick={() => { deleteTrip() }}>Delete</button>
      </div>
      <Link to="/trips">
        <button>   Back to all trips </button>
      </Link>
    </div>
  );
}
