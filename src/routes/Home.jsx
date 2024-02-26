import React from 'react'
import dude from '../public/images/dude.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../public/home.css'
import icons from '../public/icons'
import places from '../public/icons'
import Card from 'react-bootstrap/Card';
import SavedList from '../components/savedList'

import { FaHeart } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import Navigation from '../components/navbar'

function home() {
  return (
    <>
    <div className=''>
        <Navigation/>
        <div>
            <img className="topImg" src={dude} alt="" style={{position: 'absolute'}} />   
        </div>
        <div className='tip' style={{marginTop: '20%'}} >
            <h1 className='tipHead'>Tip of the Day</h1>
            <p className='tipPg'>Stacking bananas on top of your head makes you taller.</p>
        </div>
        <div className='weirdThing'>
            <Row className='cards'>
            {icons.map((icon) => (
                <Col className='mb-5 '>
                    <a href="/shop">

                    <Card className='acard' style={{ width: '14rem'}}>
                    <Row className='randCol'>
                        <Col className='randcol'>
                        <p className='' style={{ fontSize: '38px'}}>
                            {icon.icon}
                        </p>
                        </Col>
                        <Col>
                        <p style={{ margin:'25px 0',fontSize: '15px', fontWeight: '500'}}>
                           {icon.name}
                        </p>
                        </Col>
                    </Row>
                    </Card>
                    </a>
                </Col>
            ))}
            </Row>
        </div>

        <div style={{backgroundColor: '#F7B492', padding: '30px'}}className='mt-5'>
            <h2 style={{padding: '10px', fontFamily: 'monospace', fontWeight: 'bold', color:'#36455A'}} className='text-center'>YOUR PLACES</h2>
            <Row>
                <Col>
                    <SavedList icon={<FaHeart fontSize='200px' color='36455A'/>} title="MY FAVORITES">
                    </SavedList>
                </Col>
                <Col>
                    <SavedList icon={<FaPersonRunning fontSize='200px' color='36455A'/>} title="WOULD GO AGAIN">
                    </SavedList>
                </Col>
                <Col>
                    <SavedList icon={<BsStars fontSize='200px' color='36455A'/>} title="SURPRISE ME">
                    </SavedList>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default home