import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch locations from Strapi
  useEffect(() => {
    fetch("http://localhost:1337/api/location?populate=image")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data.data);
        setFilteredLocations(data.data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.data.map((loc) => loc.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter locations based on selected category
  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    
    if (selected === "") {
      setFilteredLocations(locations);
    } else {
      setFilteredLocations(locations.filter((loc) => loc.category === selected));
    }
  };

  // Get Image URL from Strapi response
  const getImageUrl = (imageArray) => {
    if (!imageArray || imageArray.length === 0) return "/default-icon.png";
    return `http://localhost:1337${imageArray[0].url}`;
  };

  return (
    <div className="map-container">
      {/* Styled Dropdown */}
      <div className="dropdown-container">
        <select value={selectedCategory} onChange={handleCategoryChange} className="dropdown">
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Full-Width Map */}
      <MapContainer center={[23.0225, 72.5714]} zoom={12} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {filteredLocations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>
              <div className="popup-content">
                <h3>{location.name}</h3>
                <p>{location.description}</p>
                {location.image && (
                  <img src={getImageUrl(location.image)} alt={location.name} className="popup-image" />
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Styles */}
      <style jsx>{`
        .map-container {
          position: relative;
          width: 100vw;
          height: 100vh;
        }

        .map {
          width: 100%;
          height: 100%;
        }

        .dropdown-container {
          position: absolute;
          top: 15px;
          left: 45px;
          z-index: 1000;
          background: rgba(81, 99, 139, 0.9);
          padding: 8px 12px;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .dropdown {
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
          background: rgba(26, 64, 78, 0.9);
          font-color:black;
          cursor: pointer;
        }

        .popup-content {
          text-align: center;
        }

        .popup-image {
          width: 200px;
          height: auto;
          border-radius: 8px;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
