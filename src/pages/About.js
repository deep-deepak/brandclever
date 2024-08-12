import React, { Component } from 'react'
import OwnerInfo from '../components/OwnerInfo';
import AboutInfo from '../components/AboutInfo';
import Gallery from '../components/Gallery';
import Counter from '../components/Counter';
import JoinTeam from '../components/JoinTeam';
import TopHeader from '../components/TopHeader';
import { Container } from 'react-bootstrap';
import MetaTitleDes from '../components/MetaTitleDes';
import { Helmet } from 'react-helmet';
import Team from '../components/Team';




export default class About extends Component {
  render() {
    const aboutInfo = [
      process.env.PUBLIC_URL + '/images/about.jpg',
      process.env.PUBLIC_URL + '/images/crown.png',
    ];

    const ownerImg = process.env.PUBLIC_URL + '/images/owner.png';
    const ownersign = process.env.PUBLIC_URL + '/images/signature.png';

    //const bannerImage = process.env.PUBLIC_URL + '/images/banner/about.png';

    const canonicalUrl = "https://brandclever.in/about"

    return (
      <>
        <Helmet>
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <MetaTitleDes title={"BrandClever - Leading IT Service Provider In India"} description={"To Know More. How we different from others. We aim to provide ideal solutions to our clients using the latest innovative technology strategies."} />

        <TopHeader title="About us" description="Brandclever a premier fast growing company in India is committed
                    to hepling business become more adaptive competitive & profitable. We
                    have the Attitude, Skills, And Knowledge to deliver the Right Solutions."/>

        <div className='page-about'>

          <OwnerInfo />


          <div className="about_third">
            <Container>
              <div className='about_page'>
                <AboutInfo imgAbout={aboutInfo} />
                <Counter />
              </div>
            </Container>
          </div>

          <section>

            <div className="founder_section">
              <Container>
                <div className="founder_section_content">
                  <div className="img_of_founder">
                    <img src={ownerImg} alt='about_brandclever' />
                  </div>
                  <div className="content_of_founder">
                    <h2>Founder & CEO</h2>
                    <p>Founder & MD Mr. Manish Verma Brandclever, an India-based IT software company, on March 6th, 2022. Brandclever specialises in HTML5/CSS3/WordPress/Custom PHP/Shopify/Wix websites that are innovative, responsive (mobile friendly), and effective. From the year 2022, we completed almost 450 projects. The majority of our customers are regulars. You may inquire as to how we manage this, as well as why we have so many long-term clientele. It’s a really straightforward procedure. We understand that you have a number of options when it comes to web hosting. We also understand how challenging it may be to switch web vendors. As a result, we provide personalised web design and development services to each of our customers</p>
                    <img src={ownersign} className='signature' alt="Signature" />
                  </div>
                </div>
              </Container>
            </div>
          </section>
          <div className='team'>
            <Team />
          </div>
          <Gallery />
          <JoinTeam />

        </div>
      </>
    )
  }
}
