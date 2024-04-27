import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Tooltip } from '@mui/material';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dobError, setDobError] = useState(false);
  const [fname, setFname] = useState("");
  const [fnameErr, setFnameErr] = useState(false);
  const [lname, setLname] = useState("");
  const [lnameErr, setLnameErr] = useState(false);
  const [gender, setGender] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [address, setAddress] = useState("");
  const [addressErr, setAddressErr] = useState(false);
  const [course, setCourse] = useState("");
  const [courseErr, setCourseErr] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false); // State to manage upload success message


  const handleName = (tag) => {
    const { id, value } = tag;
    if (id === 'fname') {
      setFname(value);
      setFnameErr(value.trim() === '' || !/^[a-zA-Z ]+$/.test(value));
    } else {
      setLname(value);
      setLnameErr(value.trim() === '' || !/^[a-zA-Z ]+$/.test(value));
    }
  };

  const handleDateChange = (date) => {
  setSelectedDate(date);
  // Check if a valid date is selected
  setDobError(!date); // Set error if date is not selected (null or undefined)
  
};


  const handleGender = (genderval) => {
    setGender(genderval);
  };

  const handleEmail = (emailval) => {
    setEmail(emailval);
    setEmailErr(!emailval.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && emailval.trim() !== '');
  };

  const handlePhone = (phoneval) => {
    setPhone(phoneval);
    setPhoneErr(!phoneval.match(/^\+?[0-9]{10}$/));
  };

  const handleAddress = (addressval) => {
    setAddress(addressval);
    setAddressErr(!addressval.match(/^[a-zA-Z0-9\s.,'-]+$/) && addressval.trim() !== '');
  };

  const handleCourse = (courseval) => {
    setCourse(courseval);
    setCourseErr(courseval.trim() === '');
  };

  const handleReset = () => {
    setFname("");
    setFnameErr(false);
    setLname("");
    setLnameErr(false);
    setSelectedDate(null);
    setDobError(false);
    setGender("");
    setEmail("");
    setEmailErr(false);
    setPhone("");
    setPhoneErr(false);
    setAddress("");
    setAddressErr(false);
    setCourse("");
    setCourseErr(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname && lname && selectedDate && gender && email && phone && address && course && !dobError) {
      setOpenModal(true);
    } else {
      alert('Please fill the form completely!!!');
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleUpload = () => {
    setUploadSuccess(true); // Set upload success to true to show the success message
    setTimeout(() => {
      setUploadSuccess(false); // Reset upload success after 2 seconds
      setOpenModal(false); // Close the modal
      handleReset(); // Reset the form
    }, 3000);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className=" border shadow p-5 bg-light">
          <h1 className="text-dark text-center mb-3"><i className="fa-brands fa-square-pied-piper"></i> YourAcademy</h1>
          <div>
            <h4 className='bg-info rounded p-2 text-light text-center mb-3'>STUDENT REGISTRATION FORM</h4>
            <marquee className="mb-3" direction="alternate">Last date for submission 29/04/2024</marquee>
          </div>
          <form onSubmit={handleSubmit}>
            <h6 className='mb-3 fw-bolder'>Personal Information</h6>
            <Stack className='mb-3' spacing={2} direction={'row'}>
              <Tooltip title='First Name' placement='bottom-end'>
                <TextField value={fname} onChange={(e) => handleName(e.target)} style={{ flex: 1 }} id="fname" label="First Name" variant="outlined" />
              </Tooltip>
              <Tooltip title='Last Name' placement='bottom-end'>
                <TextField value={lname} onChange={(e) => handleName(e.target)} style={{ flex: 1 }} id="lname" label="Last Name" variant="outlined" />
              </Tooltip>
            </Stack>
            <Stack className='mb-3 justify-content-between' spacing={2} direction={'row'}>
              {fnameErr && <div className="mb-2 text-danger fw-bolder">Invalid first Name!!!</div>}
              {lnameErr && <div className="mb-2 text-danger fw-bolder">Invalid Last Name!!!</div>}
            </Stack>
            <Stack className='mb-3' spacing={3} direction={'row'}>
              <DatePicker
                label="Date of Birth"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} style={{ width: '100%' }} variant="outlined" />}
              />
              <FormControl>
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => handleGender(e.target.value)}
                >
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Stack>
            {dobError && <div className="mb-2 text-danger fw-bolder">Please select a valid Date of Birth!!!</div>}
            <h6 className='mb-3 fw-bolder'>Contact Information</h6>
            <Stack className='mb-3' direction={'row'} spacing={2}>
              <TextField value={email} onChange={(e) => handleEmail(e.target.value)} type='email' style={{ flex: 1 }} id="email" label="Email" variant="outlined" placeholder='john@gmail.com' />
              <TextField value={phone} onChange={(e) => handlePhone(e.target.value)} style={{ flex: 1 }} id="phone" label="Phone" variant="outlined" placeholder='10 digits' />
            </Stack>
            <Stack className='mb-3 justify-content-between' spacing={2} direction={'row'}>
              {emailErr && <div className="mb-2 text-danger fw-bolder">Invalid email!!!</div>}
              {phoneErr && <div className="mb-2 text-danger fw-bolder">Invalid phone number format!!!</div>}
            </Stack>
            <Box component="form" sx={{ '& .MuiTextField-root': { width: '100%' } }} noValidate autoComplete="off">
              <TextField
                id="address"
                label="Address"
                multiline
                maxRows={4}
                value={address}
                onChange={(e) => handleAddress(e.target.value)}
                className='mb-3'
              />
            </Box>
            {addressErr && <div className="mb-2 text-danger fw-bolder">Invalid Address!!!</div>}
            <h6 className='mb-3 fw-bolder'>Course</h6>
            <Stack className='mb-3' direction={'row'} spacing={2}>
              <FormControl fullWidth>
                <InputLabel id="course">Course</InputLabel>
                <Select
                  labelId="course"
                  id="course"
                  value={course}
                  label="course"
                  onChange={(e) => handleCourse(e.target.value)}
                >
                  <MenuItem value={'Science'}>Science</MenuItem>
                  <MenuItem value={'Maths'}>Maths</MenuItem>
                  <MenuItem value={'English'}>English</MenuItem>
                  <MenuItem value={'History'}>History</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            {courseErr && <div className="mb-1 text-danger fw-bolder">Invalid Course!!!</div>}
            <Stack spacing={2} direction={'row'} className='pt-3 mb-0 justify-content-center '>
              <Button type='submit' disabled={fnameErr || lnameErr || dobError|| emailErr || phoneErr || addressErr || courseErr} variant="contained" className='p-2'>Register</Button>
              <Button onClick={handleReset} variant="outlined" className='p-2'>Reset</Button>
            </Stack>
          </form>
          <Dialog open={openModal} onClose={handleCloseModal} fullWidth>
            <DialogTitle className='m-2'>Confirm Registration Details</DialogTitle>
            <DialogContent dividers>
            <table className='d-flex align-items-center justify-content-center' style={{borderCollapse: 'collapse', width: '100%',}}>
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'left', paddingRight: '20px' }}>Name:</th>
                    <td style={{ textAlign: 'left', padding: '8px' }}>{`${fname} ${lname}`}</td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', paddingRight: '20px' }}>Date of Birth:</th>
                    <td style={{ textAlign: 'left', padding: '8px' }}>{selectedDate ? selectedDate.format('MM/DD/YYYY') : ''}</td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', paddingRight: '20px' }}>Gender:</th>
                    <td style={{ textAlign: 'left', padding: '8px' }}>{gender}</td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', paddingRight: '20px' }}>Email:</th>
                    <td style={{ textAlign: 'left', padding: '8px' }}>{email}</td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', paddingRight: '20px' }}>Phone:</th>
                    <td style={{ textAlign: 'left', padding: '8px' }}>{phone}</td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', paddingRight: '20px' }}>Address:</th>
                    <td style={{ textAlign: 'left', padding: '8px' }}>{address}</td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', paddingRight: '20px' }}>Course:</th>
                    <td style={{ textAlign: 'left', padding: '8px' }}>{course}</td>
                  </tr>
                </tbody>
             </table>

              
            </DialogContent>
            <DialogActions>
            <Button variant="contained" className='bg-secondary' onClick={handleCloseModal} disabled={uploadSuccess} >Edit</Button>
              <Button variant="contained" className='bg-success' onClick={handleUpload} disabled={uploadSuccess} >Upload</Button>
            </DialogActions>
            {/* Render success alert based on uploadSuccess state */}
          {uploadSuccess && (
              <Alert variant="filled" severity="success">
              Uploaded Successfully!!!
            </Alert>
          )}
          </Dialog>
          
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default App;
