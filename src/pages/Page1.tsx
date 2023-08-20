import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function SignUp(){
    
  const navigate = useNavigate();
    interface FormData {
      name: string;
      phone: number|null;
      email: string;
    }
    const[formData,setFormData] = React.useState<FormData>({
      name:"",
      phone:null,
      email:"",
    })
    const [formErrors, setFormErrors] = React.useState({
      name: "",
      phone: "",
      email: "",
    });

   async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (formData.name && formData.phone !== null && formData.email) {
          await localStorage.setItem("userData", JSON.stringify(formData));
          navigate('/page2');

        } else {
          setFormErrors({
            name: formData.name ? "" : "Name is required",
            phone: formData.phone !== null ? "" : "Phone number is required",
            email: formData.email ? "" : "Email is required",
          });
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
      const{name,value} = event.target; 
      setFormData((prevData)=>(
            {
              ...prevData,
              [name]:[value]
            }
      ))
    }
    
    return(
        <>
         <CssBaseline/>
         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <PersonOutlineIcon fontSize='medium' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField
                   onChange={handleChange}
                   id="name"
                  name="name" 
                  label="Name" 
                  variant="standard" 
                  value={formData.name} 
                  required 
                  autoFocus 
                  fullWidth
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                  />
                 </Box>
              </Grid>


              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <LocalPhoneOutlinedIcon fontSize='medium' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField 
                  onChange={handleChange} 
                  id="phone" 
                  name="phone" 
                  label="Phone Number" 
                  value={formData.phone || ""} 
                  variant="standard" 
                  required 
                  autoFocus 
                  fullWidth
                  error={!!formErrors.phone}
                  helperText={formErrors.phone}
                  />
                 </Box>
              </Grid>

              <Grid item xs={12}>
                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <EmailOutlinedIcon fontSize='medium' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField 
                  onChange={handleChange} 
                  id="email" 
                  name="email" 
                  label="Email Address" 
                  value={formData.email} 
                  variant="standard" 
                  required 
                  autoFocus 
                  fullWidth
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                  />
                 </Box>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </>
    )
}