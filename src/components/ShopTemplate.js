import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBCardImage } from 'mdb-react-ui-kit';
import download from '../public/images/download.jpeg';
import '../public/shoptemplate.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ShopTemplate extends React.Component {
  render(){
    return (
      <MDBCard className="shopTemplate" style={{ width: '80%', backgroundColor:'#F9F7F1', borderColor: 'transparent' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <img className="imageShop" src={download} alt={this.props.shopName} fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>{this.props.shopName}</MDBCardTitle>
              <MDBCardText>
                {this.props.shopDesc}
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    );
  }
}

export default ShopTemplate;
