import { useState } from "react";
import axios from "axios";

const AddCar = () => {
  const [car, setCar] = useState({
    registration_number: "",
    brand: "",
    model: "",
    vehicle_type: "",
    fuel_type: "",
    transmission: "",
    seating_capacity: "",
    rent_per_day: "",
    city: "",
    availability_status: "Available",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://host-demo-app.onrender.com/api/add-car",
        {
          ...car,
          seating_capacity: Number(car.seating_capacity),
          rent_per_day: Number(car.rent_per_day),
        }
      );

      setMessage(response.data.message);
      setIsError(false);

      setCar({
        registration_number: "",
        brand: "",
        model: "",
        vehicle_type: "",
        fuel_type: "",
        transmission: "",
        seating_capacity: "",
        rent_per_day: "",
        city: "",
        availability_status: "Available",
      });

    } catch (error) {

      setIsError(true);

      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server not responding");
      }
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">

              <h3 className="text-center">
                Add Car
              </h3>

            </div>

            <div className="card-body">

              {message && (
                <div
                  className={`alert ${
                    isError ? "alert-danger" : "alert-success"
                  }`}
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="registration_number"
                    value={car.registration_number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    name="brand"
                    value={car.brand}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Model</label>
                  <input
                    type="text"
                    className="form-control"
                    name="model"
                    value={car.model}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Vehicle Type</label>

                  <select
                    className="form-select"
                    name="vehicle_type"
                    value={car.vehicle_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>MUV</option>
                    <option>Luxury</option>
                  </select>

                </div>

                <div className="mb-3">

                  <label>Fuel Type</label>

                  <select
                    className="form-select"
                    name="fuel_type"
                    value={car.fuel_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                    <option>CNG</option>
                  </select>

                </div>

                <div className="mb-3">

                  <label>Transmission</label>

                  <select
                    className="form-select"
                    name="transmission"
                    value={car.transmission}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>

                </div>

                <div className="mb-3">

                  <label>Seating Capacity</label>

                  <input
                    type="number"
                    className="form-control"
                    name="seating_capacity"
                    value={car.seating_capacity}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-3">

                  <label>Rent Per Day</label>

                  <input
                    type="number"
                    className="form-control"
                    name="rent_per_day"
                    value={car.rent_per_day}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-3">

                  <label>City</label>

                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={car.city}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label>Availability Status</label>

                  <select
                    className="form-select"
                    name="availability_status"
                    value={car.availability_status}
                    onChange={handleChange}
                  >
                    <option>Available</option>
                    <option>Booked</option>
                    <option>Maintenance</option>
                  </select>

                </div>

                <div className="d-grid">

                  <button
                    className="btn btn-success"
                    type="submit"
                  >
                    Add Car
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AddCar;