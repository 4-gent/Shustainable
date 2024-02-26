import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/navbar.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

export default function SavedList({icon, title, color}){

    return(
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 300,
                minHeight: 190,
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? {color} : '#fff',
                display: 'block',

            }}
            >
            <Grid container spacing={2} className="" style={{marginLeft:'8%'}}>
                <Grid item style={{marginTop: '5px'}}>
                   <a href="/shop"> {icon} </a>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom fontSize="25px" variant="subtitle1" component="div" color="#36455A" fontFamily='Monaco' >
                            {title}
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}