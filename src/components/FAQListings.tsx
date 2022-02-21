import React from 'react';
// import '../App.css'
import './FAQListing.css'

import { Typography, Container, Box, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from './FAQListingsTable'


const FAQListings = () => {
    return (
        <>
            <div>
                {/* <Typography variant='h4' component='h1' sx={{padding : '40px'}}> */}
                {/* FAQ Management
            </Typography> */}
                <h2 className='FAQ-Heading'>FAQ Management</h2>
                <Container>
                        <Typography variant='h6' component='h1' sx={{ color: '#242e4c',  fontWeight : 550}}>FAQ Listings(5)</Typography>

                        <div style={{display : 'flex', flexDirection:'row',alignItems: 'center',justifyContent:'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                                    <Typography variant='h6' component='h6' sx={{ color: '#707070', fontSize:'18px' }}>Filter : </Typography>
                                    <FormControl size="small" sx={{ m: 1, minWidth: 160, marginLeft:'1rem'  }}>
                                        <InputLabel id="demo-controlled-open-select-label" sx={{marginRight : '2rem', color : '#242e4c'}}>Type</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // value={age}
                                            label="Age"
                                            // onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>


                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                                <FormControl size="small" sx={{ m: 1, minWidth: 160, marginLeft:'1rem'  }}>
                                        <InputLabel id="demo-controlled-open-select-label" sx={{marginRight : '2rem', color : '#242e4c'}}>Action</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // value={age}
                                            label="Age"
                                            // onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button variant='contained' sx={{backgroundColor : '#272165', color : '#ffffff'}}>Add New FAQ</Button>
                                </div>


                                </div>
                                <hr style={{color : '#979797', marginTop : '1rem'}} />
                    <Box>

                        <Grid container spacing={2}>

                            <Grid item lg={12} sm={12} xs={12}>
                                <DataTable />

                            </Grid>

                        </Grid>

                    </Box>
                </Container>
            </div>
        </>
    )
}

export default FAQListings