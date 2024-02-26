import React from "react"
import Navigation from '../components/navbar';
import '../App.css';
import { styled } from '@mui/material/styles';
import Badge from '../components/badgeThing';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import Friend from "../components/friendThing";
import { Button } from "react-bootstrap";

import Pfp from '../images/face_icons/Pfp.jpeg';
import Anne from '../images/face_icons/Anne.png';
import Shreyass from '../images/face_icons/Shreyass.png';
import MJ from '../images/face_icons/MJ.png';

import Oil_Pic from '../images/badge_icons/Oil.png';
import Tree_Pic from '../images/badge_icons/Tree.png';
import Like_Pic from '../images/badge_icons/Like.png';
import Sweet_Pic from '../images/badge_icons/Sweet.png';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

export default function Badges(){
    return(
        <div className="App">
            <nav >
                <Navigation />
            </nav>
            <div className={{display: 'flex'}}>
                <div>
                    <div style={{ height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                        <header>
                            <img src={Pfp} alt="My Image" style={{width: '20vh', height: 'auto', borderRadius: '50%'}} />
                        </header>
                    </div>
                    
                    <div style={{ height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="body2" color="#36455A" fontSize="40px" fontFamily='Monospace' fontWeight='bold'>
                            EJIRO IGUN
                        </Typography>
                    </div>

                    <div style={{ marginBottom: '40px', marginLeft:'100px', marginRight:'100px', backgroundColor:'#C9EAE5', padding:'20px', borderRadius: '15px'}}>
                        <Row style={{padding: '10px'}}>
                            <Typography marginLeft='20px' variant="body2" color="#36455A" fontSize="30px" fontFamily='monospace' fontWeight='bold'>
                                BADGES
                            </Typography>
                        </Row>
                        <Row style={{padding: '10px'}}>
                            <Col>
                                <Badge Image={Tree_Pic} BadgeTitle={"PURVEYOR OF PLANTS"} BadgeDescription={"You just planted a tree. That’s pretty cool."}></Badge>
                            </Col>
                            <Col>
                                <Badge Image={Oil_Pic} BadgeTitle={"ANTI OIL OLIGARCH"} BadgeDescription={"Use a hybrid/electric vehicle. Emission free zoomin’."}></Badge>
                            </Col>
                        </Row>
                        <Row style={{padding: '10px'}}>
                            <Col>
                                <Badge Image={Like_Pic} BadgeTitle={"LIKIN' LOCAL"} BadgeDescription={"Like your first shustainable post. I dare you to save it too :03"}></Badge>
                            </Col>
                            <Col>
                                <Badge Image={Sweet_Pic} BadgeTitle={"SWEET SUSTAINABILITY"} BadgeDescription={"Cash out on some sweet deals at your local farmer’s market. Discounted happiness."}></Badge>
                            </Col>
                        </Row>
                        <Row style={{padding: '10px'}}>
                            <Button style={{ backgroundColor: 'transparent', border: 'none'}}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
                                    <a href="/friends">
                                        <button style={{ backgroundColor:'#F9F7F1', fontWeight: 'bold', fontFamily: 'monospace', color: '#36455A', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                                            MORE
                                        </button>
                                    </a>
                                </div>
                            </Button>
                        </Row>
                    </div>

                    <div style={{ marginBottom: '40px', marginLeft:'100px', marginRight:'100px', backgroundColor:'#F7B492', padding:'20px', borderRadius: '15px'}}>
                        <Row style={{padding: '10px'}}>
                            <Typography marginLeft='20px' variant="body2" color="#36455A" fontSize="30px" fontFamily='monospace' fontWeight='bold'>
                                FRIENDS
                            </Typography>
                        </Row>
                        <Row style={{padding: '10px'}}>
                            <Col>
                                <Friend ProfilePic={Anne} FriendName={"ANNE MAI"} FavStore={"California Sourdough Eatery"}></Friend>
                            </Col>
                            <Col>
                                <Friend ProfilePic={Shreyass} FriendName={"SHREYASS PREM SANKAR"} FavStore={"Campbell Farmer's Market"}></Friend>
                            </Col>
                            <Col>
                                <Friend ProfilePic={MJ} FriendName={"MARLON BUROG"} FavStore={"MLK Library"}></Friend>
                            </Col>
                        </Row>
                        <Row style={{padding: '10px'}}>
                            <Button style={{ backgroundColor: 'transparent', border: 'none'}}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
                                    <a href="/friends">
                                        <button style={{ backgroundColor:'#F9F7F1', fontWeight: 'bold', fontFamily: 'monospace', color: '#36455A', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                                            MORE
                                        </button>
                                    </a>
                                </div>
                            </Button>
                        </Row>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}