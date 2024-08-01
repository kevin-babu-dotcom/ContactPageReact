
  import "./App.css";
  import { Card, CardContent, Grid, TextField, Button, Typography } from "@mui/material";
  import React from "react";

  
  function App() {

    const submitHandler = (e) => {
      e.preventDefault()
    }

    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" ,  background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)"}}>

      
      <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px",borderRadius: 16, boxShadow: '0 4px 8px rgba(0,0,0,0.2)'}}>
        <CardContent>
          <Typography gutterBottom variant="h6" align="center" style={{  marginBottom: '1rem'}}>CONTACT US</Typography>
          <form>

          <Grid container spacing={1}>  
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                placeholder="Enter Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter your Email-ID"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="number"
                label="Phone"
                placeholder="Enter your Phone.No"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Enter your Message"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }} onClick={submitHandler}>
                Submit
                {/* e.preventDefault() */}
              </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
      </div>
    );
  }

  export default App;