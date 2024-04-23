import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { Navigate, useNavigate } from "react-router-dom";

export default function FormHl() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token) {
      navigate("/login");
    }
  }) 

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/bmicalculator", {
        Name: name,
        Height: height,
        Weight: weight,
      });
      setBmiResult(response.data);
    } catch (error) {
      console.error("Error calculating BMI:", error);
    }
  };


  return (
    <>
      <Header />
      <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div className="bg-[#04726C] px-10 py-10 text-center text-white">
          <p className="font-serif text-2xl font-semibold tracking-wider">
            BMI Calculator
          </p>
          <p className="text-center text-blue-100">
            Please input your height & weight here
          </p>
        </div>

        <div className="space-y-4 px-8 py-10">
          <label className="block" htmlFor="name">
            <p className="text-gray-600">Name</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
          <label className="block" htmlFor="height">
            <p className="text-gray-600">Height(cm)</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </label>
          <label className="block" htmlFor="weight">
            <p className="text-gray-600">Weight(kg)</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </label>
          <button
            className="mt-4 rounded-full bg-[#04726C] px-10 py-2 font-semibold text-white"
            onClick={handleSubmit}
          >
            Hitung BMI
          </button>
          {bmiResult && <p>{bmiResult}</p>}
        </div>
      </div>
    </>
  );
}
