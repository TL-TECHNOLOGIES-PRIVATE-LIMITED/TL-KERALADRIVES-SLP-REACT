import "./App.css";
import logo from "./images/KERALADRIVES LOGO ROUND PNG.png";
import BasicSlider from "./Components/BasicSlider";
import Tooltip from "@mui/material/Tooltip";
import AppointmentLayout from "./Components/AppointmentLayout";
import React from "react";
import websiteIcon from './images/website-icon-29494-removebg-preview.png';

function App() {
   // <======================================== NOTES START ==============================================>

  // Libraries used : "material-ui" , "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code:
  // First install all dependencies :- npm intsall
  // Then run the code :- npm start

  // created date : May/22/2024 || created by : Abid NK   || module : Being Digital ||
  // modified date : May/23/2024 || modified by : Abid NK  || module : change text, Images and input feilds ||
  // modified date : May/24/2024 || modified by : Abid NK  || module : changes made on tooltip text ||
  // modified date : May/27/2024 || modified by : Abid NK  || module : Website icon changed ||
  // modified date : May/29/2024 || modified by : Abid NK  || module : Changed the cover Image ||
  // modified date : May/30/2024 || modified by : Abid NK  || module : Changed the footer ||
  // modified date : May/31/2024 || modified by : Abid NK  || module : Change the phone number format ||

  // Technical summary(Pre-setups) created date/by :  Abid NK ||
  // Domain : godaddy || https://booking.keraladrives.com/  ||
  // Hosting : SmarterASP.net  || https://booking.keraladrives.com/ ||
  // SSL :  cloudflare(Confidential Sangi) ||
  // Database : {.env} ||

  // Phase summary : SLP for Kerala Drives    || created date/by :Abid NK May/22/2024 ||
  // Phase 1 :  SetUps: Clone github rep for the template  || 
  // Phase 2 :  Development/Main page creation: Implementing frontend layouts and user interfaces using React ||
  // Phase 3 :  Production: Deploying the application to SmarterASP.net .  ||

  // <======================================== NOTES END ==============================================>
  return (
    <>
      <div className="backgroundImg flex justify-center w-full h-screen">
        {/* <==================== Webiste link as sticky ====================> */}
        <div className="globe absolute top-[90vh] left-8 hidden md:block">
          <Tooltip title="Visit Our Site" placement="right-start" arrow>
            <a href="https://www.keraladrives.com/" title="Image from freeiconspng.com">
              <img
                alt="Visit our site"
                src={websiteIcon}
                className="w-20"
              />
            </a>
          </Tooltip>
        </div>
        <div className="globe absolute top-[80vh] left-10 hidden md:block">
          <Tooltip title="Let's talk!" placement="right" arrow>
            <a
              href="https://wa.me/+918086407979?text=Hello,%20I%20am%20interested%20to%20know%20more%20about%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9ImZpbGw6IzQwQzA1NzsiPgogICAgPHBhdGggZD0iTTI1LDJDMTIuMzE4LDIsMiwxMi4zMTgsMiwyNWMwLDMuOTYsMS4wMjMsNy44NTQsMi45NjMsMTEuMjlMMi4wMzcsNDYuNzNjLTAuMDk2LDAuMzQzLTAuMDAzLDAuNzExLDAuMjQ1LDAuOTY2IEMyLjQ3Myw0Ny44OTMsMi43MzMsNDgsMyw0OGMwLjA4LDAsMC4xNjEtMC4wMSwwLjI0LTAuMDI5bDEwLjg5Ni0yLjY5OUMxNy40NjMsNDcuMDU4LDIxLjIxLDQ4LDI1LDQ4YzEyLjY4MiwwLDIzLTEwLjMxOCwyMy0yMyBTMzcuNjgyLDIsMjUsMnogTTM2LjU3LDMzLjExNmMtMC40OTIsMS4zNjItMi44NTIsMi42MDUtMy45ODYsMi43NzJjLTEuMDE4LDAuMTQ5LTIuMzA2LDAuMjEzLTMuNzItMC4yMzEgYy0wLjg1Ny0wLjI3LTEuOTU3LTAuNjI4LTMuMzY2LTEuMjI5Yy01LjkyMy0yLjUyNi05Ljc5MS04LjQxNS0xMC4wODctOC44MDRDMTUuMTE2LDI1LjIzNSwxMywyMi40NjMsMTMsMTkuNTk0IHMxLjUyNS00LjI4LDIuMDY3LTQuODY0YzAuNTQyLTAuNTg0LDEuMTgxLTAuNzMsMS41NzUtMC43M3MwLjc4NywwLjAwNSwxLjEzMiwwLjAyMWMwLjM2MywwLjAxOCwwLjg1LTAuMTM3LDEuMzI5LDEuMDAxIGMwLjQ5MiwxLjE2OCwxLjY3Myw0LjAzNywxLjgxOSw0LjMzYzAuMTQ4LDAuMjkyLDAuMjQ2LDAuNjMzLDAuMDUsMS4wMjJjLTAuMTk2LDAuMzg5LTAuMjk0LDAuNjMyLTAuNTksMC45NzMgcy0wLjYyLDAuNzYtMC44ODYsMS4wMjJjLTAuMjk2LDAuMjkxLTAuNjAzLDAuNjA2LTAuMjU5LDEuMTljMC4zNDQsMC41ODQsMS41MjksMi40OTMsMy4yODUsNC4wMzkgYzIuMjU1LDEuOTg2LDQuMTU4LDIuNjAyLDQuNzQ4LDIuODk0YzAuNTksMC4yOTIsMC45MzUsMC4yNDMsMS4yNzktMC4xNDZjMC4zNDQtMC4zOSwxLjQ3Ni0xLjcwMywxLjg2OS0yLjI4NiBzMC43ODctMC40ODcsMS4zMjktMC4yOTJjMC41NDIsMC4xOTQsMy40NDUsMS42MDQsNC4wMzUsMS44OTZjMC41OSwwLjI5MiwwLjk4NCwwLjQzOCwxLjEzMiwwLjY4MSBDMzcuMDYyLDMwLjU4NywzNy4wNjIsMzEuNzU1LDM2LjU3LDMzLjExNnoiPjwvcGF0aD4KPC9zdmc+"
              />
            </a>
          </Tooltip>
        </div>
        <div className="zoom w-[60%] pt-10 pb-10">
          {/* <==================== HEADER ====================>  */}
          <div className="">
            <div className="flex justify-between h-[100px]">
              <div className="nav justify-center">
                <p
                  className="text-white text-5xl font-bold tracking-wider text-shadow"
                  style={{
                    fontSize: '3.1rem',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  KERALA DRIVES
                  <br />
                  <span style={{ fontSize: '2.1rem' }}>Tours & Travels</span>
                </p>
              </div>

              <img
                src={logo}
                alt="landingPageLogo"
                className="p-1 w-[100px]  md:w-auto md:h-auto md:mr-10 hidden sm:block lg-max:hidden"
              />
            </div>
          </div>
          {/* <==================== BODY ====================>  */}
          <div className="grid lg-max:grid-cols-1 grid-cols-2 h-auto gap-x-5 justify-center items-center">
            <div className="col-span-2 md:col-span-1">
              <BasicSlider />
            </div>
            <div className="col-span-2 md:col-span-1">
              <AppointmentLayout />
            </div>
          </div>
          {/* <==================== FOOTER ====================>  */}
          <div className="md:w-[1020px] lg-max:w-[480px] sm-max:w-[335px] mt-[20px] md:mt-2">
            <div className="mt-0">
              <p className="bg-white rounded-lg p-1 text-center">
                Copyright © 2024
                <a
                  href="https://tltechnologies.net/"
                  target="_blank"
                  className="font-bold text-red-600 mr-1 ml-1"
                >
                  TL TECHNOLOGIES PVT LTD
                </a>
                All Rights Reserved.
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
