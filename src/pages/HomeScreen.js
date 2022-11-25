import React from "react";
import RegisteredDays from "../components/Days/RegisteredDays";
import { Helmet } from "react-helmet";

function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <RegisteredDays />
    </>
  );
}

export default HomeScreen;
