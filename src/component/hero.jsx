import React from 'react';
import "./hero.css"
// import IMG1 from "../esset/img2.jpg"
// import IMG2 from "../esset/img3.jpg"
import Carousel from './Carousels';
import {BsFacebook} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {PiMicrophoneLight} from "react-icons/pi";
import {LuMicroscope} from "react-icons/lu";
const Hero = () => {
    return (
        <div>
            <div className="container1">

                <div className="container">

                    <div className="main-tringle">
                        <div className="nav">
                            <div className="logo">Logo</div>

                            <div className="about">
                                <p>About</p>
                                <p>Pricing</p>
                                <p>Review</p>
                            </div>
                        </div>
                        <div className="hero">
                            <div className="content">
                                <h1>Learn how to launch a successful podcast</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi possimus veritatis atque maiores, est quae eveniet neque facere, ipsam delectus repellat sapiente nostrum soluta! Suscipit natus officiis</p>
                                <button>Sign Up Now</button>
                            </div>
                            <div className="img">
                                <div className="pic">
                                    <img src="https://images.pexels.com/photos/8453941/pexels-photo-8453941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img1' alt="" />
                                    <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img2' alt="" />

                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <p><LuMicroscope className="p"/></p>
                                        <li></li>
                                        <li></li>
                                        <li></li>

                                    </ul>
                                    <p className="mic">
                                        <li></li>
                                        <p><PiMicrophoneLight className='p'/></p>
                                    </p>
                                </div>
                                <div className="dot">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="circle">

                        </div>
                        <div className="parallelogram"></div>
                    </div>
                    
                </div>
                
                <br />
                <div className="feature">
                    <div className="feature-interactive">
                        <div className="interactive1">
                            <div className="int">
                                <h3>Interactive features</h3>
                                <p>Lorem ipsum dolor sit, amet dummy consectetur adipisicing elit. hence, Recusandae beatae iure autem,</p>
                            </div>
                            <div className="int">
                                <h3>Interactive features</h3>
                                <p>Lorem ipsum dolor sit, amet dummy consectetur adipisicing elit. hence, Recusandae beatae iure autem,</p>
                            </div>
                        </div>
                        <div className="interactive2">
                            <div className="int">
                                <h3>Interactive features</h3>
                                <p>Lorem ipsum dolor sit, amet dummy consectetur adipisicing elit. hence, Recusandae beatae iure autem,</p>
                            </div>
                            <div className="int">
                                <h3>Interactive features</h3>
                                <p>Lorem ipsum dolor sit, amet dummy consectetur adipisicing elit. hence, Recusandae beatae iure autem,</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-about">
                        <h1>About the course</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta, eius ullam iste quam similique, quis molestias commodi fuga, sapiente velit. Nisi praesentium eos sequi quos.</p>
                        <button>Explore Now</button>
                    </div>
                    <div className="bg"></div>
                </div>
                <div className="plan">
                    <div className="choose_your_Plan">
                        <h1>
                            Choose your plan
                        </h1>
                        <p>
                            Lorem iqsum is simply dummy text of the printing and type setting
                            industry. Lorem iqsum has been the industr's
                        </p>
                    </div>
                    <div className="pod">
                        <p>Podcast</p>
                    </div>
                    <div className='plan-container'>
                        <div className='plan-content' >
                            <span>
                                <h1 >
                                    Basic Plan
                                </h1>

                                <p

                                >
                                    Loram lpsum is simply dummy text of the printing and
                                    typesestting
                                </p>

                                <p className='price'> $ 54 <span >/month</span></p>
                                <ul>
                                    <li>Free access to video class </li>
                                    <li>Free access to video class </li>
                                    <li>Free access to video class </li>
                                </ul>

                                <button >
                                    Start Free Trail
                                </button>
                            </span>
                        </div>

                        <div className='plan-content' >
                            <span>
                                <h1>
                                    Premium Plan
                                </h1>

                                <p>
                                    Loram lpsum is simply dummy text of the printing and
                                    typesestting{" "}
                                </p>
                                <p className='price'>$ 54 <span >/month</span></p>
                                <ul >
                                    <li>Free access to video class </li>
                                    <li>Free access to video class </li>
                                    <li>Free access to video class </li>
                                </ul>

                                <button >
                                    Start Free Trail
                                </button>
                            </span>
                        </div>

                        <div className='plan-content'
                        >
                            <span>
                                <h1 > Basic Plan </h1>
                                <p >
                                    Loram lpsum is simply dummy text of the printing and
                                    typesestting{" "}
                                </p>
                                <p className="price"> $ 54 <span>/month </span></p>
                                <ul >
                                    <li>Free access to video class </li>
                                    <li>Free access to video class </li>
                                    <li>Free access to video class </li>
                                </ul>

                                <button>
                                    Start Free Trail
                                </button>
                            </span>

                        </div>

                    </div>
                </div>
                <div className="review">
                    <div className='review-content'>
                                    <h1>Review from the customer</h1>
                                    <p >
                                        Lorem iqsum is simply dummy text of the printing and type
                                        setting industry. Lorem iqsum has been the industr's
                                    </p>
                                </div>
                    <Carousel />
                </div>
                <div className="footer">
                    <div className="square">

                        <div className="triangle-right">

                        </div>
                        <div className="footer-text">
                            <h2>We have what you're looking for</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus assumenda laborum eligendi repudiandae eveniet animi iusto libero. Consectetur fuga quibusdam </p>
                            <button>Get Started Now</button>
                        </div>
                        <div className="footer-bar">
                            <hr />
                            <div className="allright">
                                <div className="copyright">
                                    <span>All Right Reserved @Copyright 2023</span>

                                </div>
                                <div className="policy">
                                    <span>Terms of Service</span>
                                    <span>Privacy Policy</span>
                                    <span>Product</span>
                                </div>
                                <div className="social-icon">
                                    <p><BsFacebook/></p>
                                    <p><BsYoutube/></p>
                                    <p><BsInstagram/></p>
                                    <p><BsTwitter/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Hero;