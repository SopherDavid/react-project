
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
// מייצר ינטרפיס לכל אחב מה id
interface Trip {
  destination: string;
  endDate: string;
  id: string;
  image: string;
  name: string;
  startDate: string;
}
// מייבא את הקוד מהשרת לקונסול
export default function AllTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/trips')
      .then((response) => response.json())
      .then((data: Trip[]) => setTrips(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(trips);


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

  return (
    <main>
      <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={'/trips'}>
          <button>New Trips</button>
      </Link>
      <div id="allCards">
        {trips.map((trip) => (
          <Link to={'/trips/'+trip.id}> 
          <div className="card" key={trip.id}>
            <img src={trip.image} alt={trip.name}/>
            <h3 className="info">{trip.name}</h3>
            <p className="info">{trip.destination}</p>
            <button id="delete" onClick={() => { deleteTrip() }}> Delete</button>
            <button id="update" onClick={() => { deleteTrip() }}> Update</button>
          </div>
          </Link>
        ))}
      </div>
    </div>
  </main>
  );
}