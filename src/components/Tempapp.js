import React, { useEffect, useState } from 'react';
import "./css/style.css"

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Karachi");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=35b90a604a6206db3ad30002e2daa477`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);

    }

    fetchApi();
  }, [search])

  return (
    <>
      <div className='Main_center'>
        <div className="box">
          <div className="input_Data">
            <div className='input-search'>
              <input placeholder='City' type="search" className='inputField' onChange={(event) => {
                setSearch(event.target.value);

              }} />
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </div>
            
            {!city ? (
              <p>No Data Found <span>😢</span></p>
            ) : (
              <div className="data_info">
                <h2 className='Location'>
                  <i className="fa-solid fa-street-view"></i> {search}
                </h2>
                <h1 className='temp-deg'> {`${city.temp} °Cel`}</h1>
                <h4 className='tempmin_max'> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h4>
              </div>
            )}

          </div>

        </div>
      </div>

    </>
  )
}

export default Tempapp;