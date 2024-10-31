import React from 'react';
import './HeroSection.scss';
import LineDivider from '../line-divider/LineDivider';

export default function HeroSection  () {
return(
  <div>
        <section className="hero-section">
      <h1>
        Seu site feito da melhor forma para <br /> <span id='blue'>impulsionar</span> <span id='red'>seu</span> <span id='yellow'>negócio.</span>
      </h1>
    </section>
    <LineDivider/>
  
  </div>
)
}
