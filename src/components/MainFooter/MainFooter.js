import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FaTiktok } from 'react-icons/fa';
import { RiSnapchatLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import LogoFooter from "../../photos/FooterLogo.png"
const MainFooter = () => {
  return (
    <div col={12} className='MainFooterdiv'>
      
      < hr />
      <Row>
      <h4 className='FooterMainText'>تواصل معنا</h4></Row>
      <Row>
      <div className='FooterIconsContact'>
        <a href='https://wa.me/966552580070' target="_blank"><AiOutlineWhatsApp /></a>
        <a href='https://twitter.com/ramelag2' target="_blank"><FiTwitter /></a>
        <a href='https://www.instagram.com/ramel_ag/' target="_blank"><AiOutlineInstagram /></a>
        <a href='https://www.snapchat.com/add/ag_ramel'target="_blank"><RiSnapchatLine /></a>
        <a href='https://www.tiktok.com/@ramel_ag?_t=8VNkBgXR6oQ&_r=1' target="_blank"><FaTiktok /></a>

      </div>
      </Row>
    <Container col={12} className='LastfooterSec'>
    <Col className='RightLastFooterSec' >
      <div col={12} className='RightLastFooterSecdiv'>
        <h5>الملف التعريفي للشركه -</h5>
        <h5>بعض عملائنا -</h5>
        <h5>سياسه الخصوصيه -</h5>
        <h5>الشروط والاحكام -</h5>
        <h5>خريطه الموقع الالكتروني</h5>
      </div>
      </Col>
      <Col className='RightLastFooterSec' col={12}>
        <div className='RightLastFooterSecimg'>
        <img width="55px" height="76px" src={LogoFooter} />
        </div>
      </Col>

      <Col className='RightLastFooterSec' >
        <div>
        <div className='RightLastFooterSecdiv' >
        <h4>العنوان</h4>
        <span>الأحساء . الهفوف . يجوار البستان مول</span>
        </div>
        <div className='RightLastFooterSecdiv'>
        <h4>الهاتف</h4>
        <span>+966543216785</span>
        <span>+966784321356</span>
        </div>
        <div className='RightLastFooterSecdiv'>
        <h4>اوقات الدوام</h4>
        <span>السبت الي الخميسمن 8 ص : 6م</span>
        </div>
        </div>
      </Col>



    </Container>
    </div>
  )
}

export default MainFooter