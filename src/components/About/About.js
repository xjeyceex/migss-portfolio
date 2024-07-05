import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/anime-self.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hi there! My name is <strong>Jc Miguel Beltran</strong> from the Philippines, and I currently live in Quezon City.
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
              My love for problem-solving led me to study Computer Science. During my freshman year, I found my passion for solving problems and building application and websites. I was fascinated by how an application work and enjoyed making them better and more user-friendly. Despite the tough times, my determination kept me going, and I made great friends who supported me throughout my studies.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              As a full stack developer, I really enjoy working with a team to achieve shared goals. I love the excitement of creating both the visible parts of websites and the behind-the-scenes functionality. My skills have grown a lot, and I'm confident in working with various technologies. I'm looking forward to applying what I know to new and exciting projects.
              <div className="tagline2">
                I've gained confidence in working with the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
