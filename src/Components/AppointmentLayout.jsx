import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Button from "@mui/material/Button";
import { BiWorld } from "react-icons/bi";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import TL_Logo from "../images/Logo-TL.png";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiGooglemybusiness } from "react-icons/si";
import { HiOfficeBuilding } from "react-icons/hi";

const AppointmentLayout = () => {
  // Tooltip component with styled customization
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} placement="right" />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#777777",
      color: "rgba(255, 255, 255)",
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    persons: "",
    destination: "",
    message: "",
    fromDate: null,
    toDate: null,
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  // Handler for form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1,4})(\d{1,3})?(\d{1,3})?$/);

    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join(" ");
    }

    return value;
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormData({
      ...formData,
      [name]: formattedValue,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleClick = () => {
    window.location.href = "http://gkumar2018-001-site2.ktempurl.com/";
  };

  const handlePersonChanges = (e) => {
    const { name, value } = e.target;
    // Ensure only numbers are entered and limit to 10 characters
    const newValue = value.replace(/\D/g, "").slice(0, 3);
    setFormData({
      ...formData,
      [name]: newValue,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const currentDate = dayjs();

  // Handler for DatePicker input change
  const handleDateChange = (date, field) => {
    setFormData({
      ...formData,
      [field]: date,
    });
    // Clear error message when user starts typing
    if (
      field === "fromDate" &&
      formData.toDate &&
      date &&
      date.isAfter(formData.toDate)
    ) {
      setErrors({
        ...errors,
        [field]: "From Date should not be after To Date",
      });
    } else if (
      field === "toDate" &&
      formData.fromDate &&
      date &&
      date.isBefore(formData.fromDate)
    ) {
      setErrors({
        ...errors,
        [field]: "To Date should not be before From Date",
      });
    } else {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };
  const [formValid, setFormValid] = useState(true);
  // Form validation
  const validateForm = () => {
    let formValid = true;
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please Enter Your Name";
      formValid = false;
      toast.error("Please Enter Your Name");
    } else if (!/^[A-Za-z.]{3,}$/.test(formData.name.trim())) {
      newErrors.name = "Please Enter a Valid Name";
      formValid = false;
      toast.error("Please Enter a Valid Name");
    }
    
    if (!formData.number.trim() || formData.number.replace(/\D/g, "").length !== 10) {
      newErrors.number = "Please Enter Your 10 Digit Phone Number";
      formValid = false;
      toast.error("Please Enter Your 10 Digit Phone Number");
    }
    if (formData.persons === "" || formData.persons <= 0) {
      newErrors.persons = "Please Enter Number of Persons greater than 0";
      formValid = false;
      toast.error("Please Enter Number of Persons greater than 0");
    }
    if (!formData.destination.trim()) {
      newErrors.destination = "Please Enter Your Destination";
      formValid = false;
      toast.error("Please Enter Your Destination");
    }
    if (!formData.fromDate) {
      newErrors.fromDate = "Please Select From Date";
      formValid = false;
      toast.error("Please Select From Date");
    } else if (formData.fromDate.isBefore(currentDate)) {
      newErrors.fromDate = "From Date cannot be before today";
      formValid = false;
      toast.error("From Date cannot be before today");
    }
  
    if (!formData.toDate) {
      newErrors.toDate = "Please Select To Date";
      formValid = false;
      toast.error("Please Select To Date");
    } else if (
      formData.fromDate &&
      formData.toDate &&
      formData.fromDate.isAfter(formData.toDate)
    ) {
      newErrors.toDate = "To Date should not be before From Date";
      formValid = false;
      toast.error("To Date should not be before From Date");
    }
  
    setErrors(newErrors);
    setFormValid(formValid);
    return formValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const name = encodeURIComponent(formData.name);
      const destination = encodeURIComponent(formData.destination);
      const phoneNumber = encodeURIComponent(formData.number.replace(/\D/g, ""));
      const persons = encodeURIComponent(formData.persons);
      const userMessage = encodeURIComponent(formData.message);
      const fromDate = formData.fromDate
        ? dayjs(formData.fromDate).format("DD/MMM/YYYY")
        : "";
      const toDate = formData.toDate
        ? dayjs(formData.toDate).format("DD/MMM/YYYY")
        : "";
      const message = `Name: ${name}%0ADestination: ${destination}%0APhone Number: ${phoneNumber}%0ANo. of Persons: ${persons}%0AFrom Date: ${fromDate}%0ATo Date: ${toDate}%0AUser Message: ${userMessage}`;
      const whatsappUrl = `https://wa.me/918086407979?text=${message}`;
      window.open(whatsappUrl, "_blank");
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };


  return (
    <>
      <ToastContainer />
      <Box
        className="boxx w-[335px] md:w-[480px] md:h-auto md:min-h-[720px] rounded-md"
        style={{
          backgroundColor: "rgba(255, 255, 255 , .9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} className="ml-5 mt-5 ">
          <h2 className="mt-10 md:mr-0 md:mt-3">Book your Trip !</h2>
          {/* Input section starts here */}
          <div
            className="inputt w-[280px] md:w-[350px] text-center"
            style={{ display: "flex" }}
          >
            <TextField
              id="name"
              name="name"
              label="Name *"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    •Please enter your full name.
                    <br />• Use your first name and last name.
                    <br />• Ensure there are no numbers.
                    <br />• Only use alphabetic characters. eg: "Jone Das"
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {/* phone number inputs with tooltips */}
          <div
            className="inputt w-[280px] md:w-[350px] mt-3"
            style={{ display: "flex" }}
          >
            <TextField
              id="number"
              name="number"
              label="Phone Number *"
              fullWidth
              type="tel"
              value={formData.number}
              onChange={handleInputChanges}
              error={!!errors.number}
              helperText={errors.number}
              inputProps={{
                maxLength: 12, // 10 digits + 3 spaces
              }}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Enter your 10-digit phone number.
                    <br />• Do not include spaces or special characters.
                    <br />• Only use numeric characters.
                    <br />• eg: 8547854785
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {/* Destination */}
          <div
            className="inputt w-[280px] md:w-[350px] mt-3"
            style={{ display: "flex" }}
          >
            <TextField
              id="outlined-destination"
              name="destination"
              label="Destination *"
              fullWidth
              value={formData.destination}
              onChange={handleInputChange}
              error={!!errors.destination}
              helperText={errors.destination}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Enter the destination you are traveling to.
                    <br />• Be specific about the location.
                    <br />• Use common place names.
                    <br />• Avoid abbreviations.
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {/* Number of Persons */}
          <div
            className="inputt w-[280px] md:w-[350px] mt-3"
            style={{ display: "flex" }}
          >
            <TextField
              id="outlined-number-person"
              name="persons"
              label="No of Persons *"
              type="number"
              fullWidth
              value={formData.persons}
              onChange={handlePersonChanges}
              error={!!errors.persons}
              helperText={errors.persons}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Enter the total number of persons traveling, including
                    adults and children.
                    <br />• Use only numeric characters.
                    <br />• Do not include spaces or special characters.
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {/* From Date and To Date */}
          <div
            className="w-[280px] md:w-[350px] mt-3"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    id="fromDate"
    label="From Date *"
    value={formData.fromDate}
    minDate={currentDate}
    onChange={(date) => handleDateChange(date, "fromDate")}
    renderInput={(params) => (
      <TextField
        {...params}
        fullWidth
        error={!!errors.fromDate}
        helperText={errors.fromDate}
      />
    )}
  />
  <DatePicker
    id="toDate"
    label="To Date *"
    value={formData.toDate}
    minDate={formData.fromDate || currentDate}
    onChange={(date) => handleDateChange(date, "toDate")}
    renderInput={(params) => (
      <TextField
        {...params}
        fullWidth
        error={!!errors.toDate}
        helperText={errors.toDate}
      />
    )}
  />
</LocalizationProvider>

            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Select the start and end dates of your trip.
                    <br />• Use the date picker provided.
                    <br />• Format as MM/DD/YYYY.
                    <br />• Ensure the start date is before the end date and the
                    end date is after the start date.{" "}
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {/* Message */}
          <div
            className="inputt w-[280px] md:w-[350px] mt-3"
            style={{ display: "flex" }}
          >
            <TextField
              id="outlined-multiline-flexible"
              name="message"
              label="Message (Optional)"
              multiline
              maxRows={4}
              fullWidth
              value={formData.message}
              onChange={handleInputChange}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Enter any additional information or special requests.
                    <br />• Use full sentences for clarity.
                    <br />• Include any dietary needs.
                    <br />• Provide other relevant details.{" "}
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          <div
            style={{ display: "grid", placeItems: "center", marginTop: "20px" }}
          >
            <Button
              variant="contained"
              color="success"
              type="submit"
              className="h-12 w-36"
              style={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              Contact us
            </Button>
          </div>
        </form>
        <div className="countries flex mt-4">
        <span className="mt-2 flex font-extrabold">
          <HiOfficeBuilding className="mr-1 ml-2 mt-1 " /> TRIVANDRUM
        </span>
        <span className="flex mt-2 font-extrabold">
          <HiOfficeBuilding className="mr-1 ml-2 mt-1 " /> KOCHI
        </span>
        <span className="flex mt-2 font-extrabold">
          <HiOfficeBuilding className="mr-1 ml-2 mt-1 " /> UAE
        </span>
      </div>
        {/* <===============Social media icons starts here =============>*/}
        <div className="social-media mt-4 md:mt-6 flex items-center">
          <a
            href="https://wa.me/+918086407979?text=Hello,%20I%20am%20interested%20to%20know%20more%20about%20your%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconButton>
              <FaWhatsapp className="text-green-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://keraladrives.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconButton>
              <BiWorld className="text-gray-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/keraladrivestourstravel/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconButton>
              <FaFacebookF className="text-blue-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/kerala_drives/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconButton>
              <FaInstagram className="text-pink-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.youtube.com/channel/UC3tmfmBZf5Ufqo2JSEwj6BA"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconButton>
              <FaYoutube className="text-red-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.pinterest.com/keraladrives195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FaPinterest className="text-red-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://g.page/r/CbTiY7yPalgcEB0/review"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3"
          >
            <IconButton>
              <SiGooglemybusiness className="text-blue-600 text-3xl" />
            </IconButton>
          </a>
        </div>
        {/*<================ Social media icons end here====================> */}

        {/* <=================Footer section starts here====================> */}
      <div className="flex row md:mt-4 mt-4 md:mb-0 mb-4">
          <Button
            onClick={handleClick}
            style={{
              display: "block",
              textAlign: "left",
              padding: 10,
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
              backgroundColor: "white",
            }}
            className="footer-container p-4 md:p-6 mt-2 md:mt-4 md:mb-3 mb-3"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-black">
            <span
              style={{ color: "red" }}
              className="text-sm text-color-red md:text-base mr-0 md:mr-0 mb-4 md:mb-0"
            >
              Your IT & Marketing Partner<br />
            </span>
          </div>
          </Button>
          <div className="flex items-end text-xs md:text-sm">
            <img
              src={TL_Logo}
              className="h-12 w-12 ml-4 md:ml-2 mb-2 md:h-16 md:w-16 "
              alt="TL Technologies Logo"
            />
          </div>
        </div>

      {/*<======================== Footer section ends Here=====================> */}
      </Box>
    </>
  );
};

export default AppointmentLayout;
