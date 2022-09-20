import React from 'react'
import 'animate.css';
import { Container, Col, Row } from 'react-bootstrap'
import Logo from '../../photos/LOGO-RAMEL.png';
import Lemon from '../../photos/MainLemon.png';

const Animated = () => {
  return (
    <>
    <Col className='AnimatedStartLogo' col={12}>
        <div col={4} className='LeftANimatedMain'>
    <svg xmlns="http://www.w3.org/2000/svg" width="603.094" height="758.914" viewBox="0 0 603.094 758.914">
        <path id="Rectangle_79" data-name="Rectangle 79" d="M305.738,0h0a122.3,122.3,0,0,1,122.3,122.3V356.989A305.738,305.738,0,0,1,122.3,662.727h0A122.3,122.3,0,0,1,0,540.432V305.738A305.738,305.738,0,0,1,305.738,0Z" transform="translate(0 125.145) rotate(-17)" fill="#379fcf"/>
    </svg>
    <div className='DivLemonANimate' >
    <h4>
    <span className='LemonOnSliceMainAnimat'>
     <img src={Lemon} className="MainLemon" width="35px" height="35px"/>
       <svg  className="MainLemonSliceAnimat" xmlns="http://www.w3.org/2000/svg" width="18.357" height="18.357" viewBox="0 0 18.357 18.357">
           <circle id="Ellipse_2" data-name="Ellipse 2" cx="9.178" cy="9.178" r="9.178" fill="#fdde47"/>
       </svg>
       </span>
        
        
        قبة
    
       
    </h4>
    </div>
    </div>
    <div col={4} className='CentANimatedMain'>
    <img class="animate__animated  animate__pulse" width="180px" height="60px" src={Logo} />
    </div>
    <div col={4} className='RightANimatedMain'>
    <svg xmlns="http://www.w3.org/2000/svg" width="584.975" height="750.929" viewBox="0 0 584.975 750.929">
  <     path id="Rectangle_3" data-name="Rectangle 3" d="M305.738,0h0a122.3,122.3,0,0,1,122.3,122.3V356.989A305.738,305.738,0,0,1,122.3,662.727h0A122.3,122.3,0,0,1,0,540.432V305.738A305.738,305.738,0,0,1,305.738,0Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 171.526, 0)" fill="#5eb253"/>
    </svg>
    <h4>نسوي</h4>
    </div>
    </Col>

    <div col={4} className='ButCenterANimatedMain'>
    <svg xmlns="http://www.w3.org/2000/svg" width="584.975" height="750.929" viewBox="0 0 584.975 750.929">
  <path id="Rectangle_78" data-name="Rectangle 78" d="M305.738,0h0a122.3,122.3,0,0,1,122.3,122.3V356.989A305.738,305.738,0,0,1,122.3,662.727h0A122.3,122.3,0,0,1,0,540.432V305.738A305.738,305.738,0,0,1,305.738,0Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 171.526, 0)" fill="#f8c459"/>
</svg>
<h4>من الحبة</h4>
</div>
    
    </>
  )
}

export default Animated