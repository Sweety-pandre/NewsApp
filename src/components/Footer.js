import React, { Component } from 'react'
import './Footer.css';

export class Footer extends Component {
    static propTypes = {}

    render() {
        return (


            <div className="contact">
                <div className="container d-flex ">
                    <div className="container contactItems">
                        <img src="imgs/logos/person.png" alt="" />
                        <h3>Get in Touch</h3>
                        <p><a href="tel:+1234567890">Call Now</a>
                            +91 989143xxxx <br /><a href="mailto:bethefreef9@gmail.com">bethefreef9@gmail.com </a><br />Located At :
                            Gokuldham Society, Gurgaon East, C-wing First floor</p>
                    </div>

                    <div className="container contactItems">
                        <div className="container"><img src="imgs/logos/globe.png" alt="" /></div>
                        <h3>Social Media</h3>
                        <p>See below where you can find us</p>
                        <div className="logos">
                            <a href=" "><img src="imgs/logos/telegram.png" alt="" /></a>
                            <a href="https://www.linkedin.com/in/sweety-pandre-473585237 ">
                                <img src="imgs/logos/linkedin.jpg" alt="" /></a>
                            <a href=" https://instagram.com/sweety_pandre?igshid=NGExMmI2YTkyZg==">
                                <img src="imgs/logos/instagram.png" alt="" /></a>
                        </div>
                    </div>

                    <div className="container contactItems">
                        <div className="container "> <img src="imgs/logos/link.jpg" alt="" /></div>
                        <h3>Useful Links</h3>
                        <p><a href="">Cookies & policies</a><br />
                            <a href="">Terms and Conditions </a><br />
                            <a href="https://www.linkedin.com/in/sweety-pandre-473585237">Developer Behind
                                Landing page</a> </p>
                    </div>

                </div>
                <footer>created by
                    <a href="https://www.linkedin.com/in/sweety-pandre-473585237 " style={{ textDecoration: 'none', color: 'rgb(74, 139, 74)'}}>
                    @sweety_pandre
                    </a>
                </footer>

            </div >
        );
    }
}
export default Footer