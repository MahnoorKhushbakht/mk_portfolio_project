// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { ThemeProvider, useTheme } from '@mui/material/styles';
// import customTheme from './theme';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
// import axios from 'axios';
// import { Typography } from '@mui/material';
// import 'aos/dist/aos.css';

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
//   message: Yup.string().required('Required'),
// });

// const Contact = () => {
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const outerTheme = useTheme();
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const handleSubmit = (formData, resetFormFields) => {
//     setIsLoading(true);
  
//     axios
//       .post(`${apiUrl}/contactme`, formData)
//       .then((res) => {
//         setIsSuccess(true);
//         resetFormFields();
//       })
//       .catch((error) => {
//         setIsError(true);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };
  
//   const cardStyle = {
//     backgroundColor: 'white',
//     border: 'transparent',
//     maxWidth: { xs: '90%', md: '70%' },
//     width: { xs: '90%', md: '70%' },
//   };

//   const textStyle = {
//     fontFamily: 'Helvetica, Arial',
//     color: '#6c58a3',
//   };

//   return (
//     <div id='contact' >
//       <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems="center"  marginBottom='50px' marginTop='50px'>
//         <Card
//           variant="outlined"
//           sx={cardStyle}
//           data-aos="fade-down" data-aos-delay='100' 
//         >
//           <CardContent>
//         <Typography sx={{fontSize: { xs: '25px', md: '30px' }}} data-aos="fade-down" data-aos-delay='100'  color={'#6c58a3'}  marginBottom={'5px'} fontFamily= 'Helvetica, Arial'>
//               Send me a Message
//             </Typography>
//                   <Typography sx={{fontSize: { xs: '15px', md: '20px' }}} data-aos="fade-down" data-aos-delay='100'  color={'#6c58a3'}  marginBottom={'15px'} fontFamily= 'Helvetica, Arial'>
//               Let's get this conversation started
//             </Typography>
//             <Formik
//               initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 message: '',
//               }}
//               validationSchema={SignupSchema}
//               onSubmit={(values, { resetForm }) => {
//                 handleSubmit(values, resetForm);
//               }}
//             >
//               {({ errors, touched, isValid }) => (
//                 <Form>
//                   <ThemeProvider theme={customTheme(outerTheme)}>
//                     <div>
//                       <Field
//                         name="firstName"
//                         type="text"
//                         as={TextField}
//                         label="First Name"
//                         variant="standard"
//                         margin="dense"
//                         fullWidth
//                         error={touched.firstName && errors.firstName}
//                         sx={{ ...textStyle, color: '#6c58a3' }}
//                         InputProps={{ sx: textStyle }}
//                         InputLabelProps={{ sx: textStyle }}
//                       />
//                       <ErrorMessage name="firstName">
//                         {msg => (
//                           <div className="error"
//                             style={{
//                               color: '#6c58a3',
//                               position: 'relative',
//                               margin: '2px 0',
//                               left: '5px',
//                               display: 'flex',
//                               alignItems: 'left'
//                             }}>
//                             {msg}
//                           </div>
//                         )}
//                       </ErrorMessage>
//                     </div>
//                     <div>
//                       <Field
//                         name="lastName"
//                         type="text"
//                         as={TextField}
//                         label="Last Name"
//                         variant="standard"
//                         margin="dense"
//                         fullWidth
//                         error={touched.lastName && errors.lastName}
//                         sx={{ ...textStyle, color: '#6c58a3' }}
//                         InputProps={{ sx: textStyle }}
//                         InputLabelProps={{ sx: textStyle }}
//                       />
//                       <ErrorMessage name="lastName">
//                         {msg => (
//                           <div className="error"
//                             style={{
//                               color: '#6c58a3',
//                               position: 'relative',
//                               margin: '2px 0',
//                               left: '5px',
//                               display: 'flex', alignItems: 'left'
//                             }}>
//                             {msg}
//                           </div>
//                         )}
//                       </ErrorMessage>
//                     </div>
//                     <div>
//                       <Field
//                         name="email"
//                         type="text"
//                         as={TextField}
//                         label="Email"
//                         variant="standard"
//                         margin="dense"
//                         fullWidth
//                         error={touched.email && errors.email}
//                         sx={{ ...textStyle, color: '#6c58a3' }}
//                         InputProps={{ sx: textStyle }}
//                         InputLabelProps={{ sx: textStyle }}
//                       />
//                       <ErrorMessage name="email">
//                         {msg => (
//                           <div className="error"
//                             style={{
//                               color: '#6c58a3',
//                               position: 'relative',
//                               margin: '2px 0',
//                               left: '5px',
//                               display: 'flex', alignItems: 'left'
//                             }}>
//                             {msg}
//                           </div>
//                         )}
//                       </ErrorMessage>
//                     </div>
//                     <div>
//                       <Field
//                         name="message"
//                         type="text"
//                         as={TextField}
//                         label="Message"
//                         multiline
//                         variant="standard"
//                         margin="dense"
//                         fullWidth
//                         sx={{ ...textStyle, color: '#6c58a3' }}
//                         InputProps={{ sx: textStyle }}
//                         InputLabelProps={{ sx: textStyle }}
//                       />
//                       <ErrorMessage name="message">
//                         {msg => (
//                           <div className="error"
//                             style={{
//                               color: '#6c58a3',
//                               position: 'relative',
//                               margin: '2px 0',
//                               left: '5px',
//                               display: 'flex', alignItems: 'left'
//                             }}>
//                             {msg}
//                           </div>
//                         )}
//                       </ErrorMessage>
//                     </div>
//                   </ThemeProvider>
//                   <Button
//                     type="submit"
//                     sx={{
//                       border:'2px solid #6c58a3',
//                       color: '#6c58a3',
//                       '&:hover': {
//                         background: '#6c58a3',
//                         color: 'white',
//                       },
//                       marginTop: '16px',
//                       marginBottom:'4px',
//                       fontFamily: 'Helvetica, Arial',
//                     }}
//                     variant="outlined"
//                     disabled={!isValid}
//                   >
//                     {isLoading ? 'Submitting...' : 'Submit'}
//                   </Button>
//                   <Snackbar
//                     open={isSuccess}
//                     autoHideDuration={6000}
//                     onClose={() => setIsSuccess(false)}
//                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//                   >         
//                     <Alert severity="success" 
//     sx={{
//       backgroundColor: '#6c58a3',  
//       color: 'white', 
//       fontFamily: 'Helvetica, Arial',          
//       '& .MuiAlert-icon': {
//         color: 'green',        
//       },
//       width: '100%',
//     }}
//                      onClose={() => setIsSuccess(false)}>
//                      Thanks for Contacting!
//                     </Alert>
//                   </Snackbar>
//                   <Snackbar
//                     open={isError}
//                     autoHideDuration={6000}
//                     onClose={() => setIsError(false)}
//                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//                   >
//                       <Alert
//     severity="error"
//     sx={{
//       backgroundColor: '#6c58a3',  
//       color: 'white', 
//       fontFamily: 'Helvetica, Arial',           
//       '& .MuiAlert-icon': {
//         color: 'red',  
//       },
//       width: '100%',
//     }}
//     onClose={() => setIsError(false)}
//   >
//                     There was an issue with your submission. Please try again later.
//                     </Alert>
//                   </Snackbar>
//                 </Form>
//               )}
//             </Formik>
//           </CardContent>
//         </Card>
//       </Box>
//     </div>
//   );
// };

// export default Contact;





import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import customTheme from './theme';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { Typography } from '@mui/material';
import ContactUs from './ContactUs';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const outerTheme = useTheme();
  const apiUrl = process.env.REACT_APP_API_URL;
  
  const handleSubmit = (formData, resetFormFields) => {
    setIsLoading(true);
  
    axios
      .post(`${apiUrl}/contactme`, formData)
      .then((res) => {
        setIsSuccess(true);
        resetFormFields();
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  const cardStyle = {
    backgroundColor: 'white',
    borderColor:'white',
    borderRadius: '16px',
    maxWidth: '80%',
    width: '80%',
  };

  const textStyle = {
    fontFamily: "Helvetica, Arial",
    color: '#6c58a3',
  };

  return (
    <div id='contact' >
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Card
          variant="filled"
          sx={cardStyle}
        >
          <CardContent>
            <Typography sx={{ fontSize: { xs: '25px', md: '35px' } }} color={'#6c58a3'}  marginBottom={'15px'} fontFamily= "Helvetica, Arial">
              Get in Touch
            </Typography>
            <ContactUs/>
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({ errors, touched, isValid }) => (
                <Form>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <div>
                      <Field
                        name="name"
                        type="text"
                        as={TextField}
                        label="Name"
                        variant="filled"
                        margin="dense"
                        fullWidth
                        error={touched.lastName && errors.lastName}
                        sx={{ ...textStyle, color: '#6c58a3' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="name">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#6c58a3',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left',
                              fontFamily: "Helvetica, Arial"
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="email"
                        type="text"
                        as={TextField}
                        label="Email"
                        variant="filled"
                        margin="dense"
                        fullWidth
                        error={touched.email && errors.email}
                        sx={{ ...textStyle, color: '#6c58a3' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="email">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#6c58a3',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left',
                              fontFamily: "Helvetica, Arial"
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="message"
                        type="text"
                        as={TextField}
                        label="Message"
                        multiline
                        variant="filled"
                        margin="dense"
                        fullWidth
                        sx={{ ...textStyle, color: '#6c58a3' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="message">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#6c58a3',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left',
                              fontFamily: "Helvetica, Arial"
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                  </ThemeProvider>
                  <button
  type="submit"
  style={{
    background: '#6c58a3',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '16px',
    fontFamily: "Helvetica, Arial",
    opacity: isValid ? 1 : 0.5,
  }}
  disabled={!isValid}
>
  {isLoading ? 'Loading...' : 'Submit'}
</button>

                  <Snackbar
                    open={isSuccess}
                    autoHideDuration={6000}
                    onClose={() => setIsSuccess(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                  >         
                    <Alert severity="success" 
    sx={{
      backgroundColor: '#6c58a3',  
      color: 'white', 
      fontFamily: "Helvetica, Arial",          
      '& .MuiAlert-icon': {
        color: 'green',        
      },
      width: '100%',
    }}
                     onClose={() => setIsSuccess(false)}>
                     Thanks for Contacting!
                    </Alert>
                  </Snackbar>
                  <Snackbar
                    open={isError}
                    autoHideDuration={6000}
                    onClose={() => setIsError(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                  >
                      <Alert
    severity="error"
    sx={{
      backgroundColor: '#6c58a3',  
      color: 'white', 
      fontFamily: "Helvetica, Arial",           
      '& .MuiAlert-icon': {
        color: 'red',  
      },
      width: '100%',
    }}
    onClose={() => setIsError(false)}
  >
                    There was an issue with your submission. Please try again later.
                    </Alert>
                  </Snackbar>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Contact;