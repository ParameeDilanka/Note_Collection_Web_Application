import React from "react";
import Footer from '../components/footer'
import Icons from "../components/icons";
import './Footer.css';

export function FooterContainer() {

    return(
        <Footer>
            <Footer.Wrapper>
                <br></br>  <br></br>
            <Footer.Row>
                <Footer.Title>Follow Us on</Footer.Title>
                    <Footer.Link href="https://github.com/ParameeDilanka"><Icons className="fab fa-github" />Github</Footer.Link>
                    <Footer.Link href="https://www.linkedin.com/in/paramee-weesinghe-976059220/"><Icons className="fab fa-linkedin" />LinkedIn</Footer.Link>
                    <Footer.Link href="https://www.facebook.com/"><Icons className="fab fa-facebook-f" />facebook</Footer.Link>
            </Footer.Row>
            <div className="col-xl-12 text-center"> 
                    <h7 className ="mb-0"> Developed by Paramee Dilanka © 2022 - All Rights Reserved</h7>
                </div> 
            </Footer.Wrapper>
        </Footer>
    )

}