import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./LandingStyles.css";
import styled from 'styled-components';
import BgImg from '../assets/image.jpg';


const Section = styled.section`
    background: url(${BgImg});
    height:700px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 120px;
`;

const Content = styled.div`
    width: 100%;
    height: 100px;
`;

const Left = styled.div`
    padding-left: 220px;
    padding-top: 143px;
`;

const Title = styled.p`
    font-size: 55px;
    color: #ffff;
    font-weight: 400;
    
`;

const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea0ac;
    line-height: 30px;
    margin-top: 10px;
`;

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 10px;
    width: 260px;
    height: 55px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #0546d6, #3f89fc);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;



function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
<div className="home_page">
<Section>
<Content>
<Left>
<Title style={{color:"Green"}}>
<br/><b>Our Service</b><br/>
</Title>
<Desc style={{color:"Purple"}}><b>We are providing safe, one place for your
  all notes</b>
</Desc>
<Button href ='http://localhost:3000/login'
target ='_blank' >
 <span>Login Now</span>
</Button>
</Left>
</Content>
</Section>
</div>
)
}

export default LandingPage;
