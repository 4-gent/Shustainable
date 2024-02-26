import React from "react"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Friend({ProfilePic, FriendName, FavStore}){
    return(
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 350,
                minHeight: 175,
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#F9F7F1' : '#fff',
            }}
            >
            <Grid container spacing={3}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={ProfilePic} style={{width: '128px', height: 'auto', borderRadius: '50%'}}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={3}>
                        <Grid item xs>
                        <Typography gutterBottom fontSize="20px" variant="subtitle1" component="div" color="#36455A" fontFamily='Monaco' >
                            {FriendName}
                        </Typography>
                        <Typography fontSize="15px" variant="body2" color="#67717F" >
                            My Favorite Place: {FavStore}
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}