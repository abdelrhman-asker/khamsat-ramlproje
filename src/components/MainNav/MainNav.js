import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Input } from 'reactstrap';
import Logo from '../../photos/LOGO-RAMEL.png';
import { BsSearch } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { RiSnapchatLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';

const MainNav = () => {
  return (
    <div>
        <Container className='MainNavCon'>
            <Row col={12}>
                <Col col={5} className="LeftManCont">
                <div class="wrapper" col={3}>
                  <div class="search-input">
                    <Input id="myInput" type="text" placeholder=" ...بحث "/>
                    <div class="autocom-box on">
                    </div>
                    <div class="icon" id="iconSearch"><BsSearch /></div>
                  </div>
                </div>
                <div className='MainNavLeftText' col={9}><h3>
                  المدونه | اعمالنا
                  </h3></div>
                </Col>
                <Col col={3}>
                    <img width="120px" height="40px" src={Logo} />
                </Col>
                <Col col={4} className="RightManCont">
                <div className='MainNavlinks'>
                    <a href='https://wa.me/966552580070' target="_blank"><AiOutlineWhatsApp /></a>
                    <a href='https://twitter.com/ramelag2' target="_blank"><FiTwitter /></a>
                    <a href='https://www.instagram.com/ramel_ag/' target="_blank"><AiOutlineInstagram /></a>
                    <a href='https://www.snapchat.com/add/ag_ramel'target="_blank"><RiSnapchatLine /></a>
                    <a href='https://www.tiktok.com/@ramel_ag?_t=8VNkBgXR6oQ&_r=1' target="_blank"><FaTiktok /></a>
                  </div>
                  <h5><span>|</span> تواصل معنا</h5>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MainNav