import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { ProjectList } from "../../../data/ProjectData";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineHandRaised } from "react-icons/hi2";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
  @media(min-width:768px){ padding: 0 20px; }
`;

const Wrapper = styled.div`
  display:flex; justify-content:center; position:relative; 
  padding:0 8px;
  @media(min-width:500px){ padding:0 15px; }
`;

const Card = styled.div`
  display:flex; 
  flex-direction:column; 
  background:#fff; 
  border-radius:10px; 
  overflow:hidden;
  box-shadow:0 3px 8px rgba(0,0,0,0.08); 
  transition:.3s; 
  width:100%; 
  border:1px solid rgba(0,0,0,0.05); 
  margin:0;
  
  &:hover{ box-shadow:0 6px 16px rgba(0,0,0,0.12); }
  
  @media(min-width:768px){ 
    flex-direction:row; 
    height:auto; 
    max-width:1000px; 
    margin:0 10px; 
    border-radius:16px; 
  }
`;

const Image = styled.div`
  width: 100%;
  height: 160px; // reduced height for small devices
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media(min-width: 500px){
    height: 200px;
  }
  
  @media(min-width: 768px){
    width: 50%;
    height: auto;
    min-height: 300px;
  }
`;

const GradientOverlay = styled.div`
  position:absolute; bottom:0; left:0; right:0; height:40%; background:linear-gradient(to top, rgba(0,0,0,0.5), transparent);
`;

const Badge = styled.span`
  position:absolute; top:8px; left:8px; background:rgba(0,0,0,0.7); color:#fff; padding:.2rem .6rem; border-radius:16px;
  font-size:.65rem; font-weight:500; backdrop-filter:blur(4px); z-index:2;
  @media(min-width:500px){ font-size:.75rem; padding:.3rem .8rem; }
  @media(min-width:768px){ top:16px; padding:.35rem .9rem; font-size:.85rem; }
`;

const Content = styled.div`
  padding:1rem; flex:1; display:flex; flex-direction:column; justify-content:space-between;
  @media(min-width:500px){ padding:1.2rem; }
  @media(min-width:768px){ width:50%; padding:2rem; }
`;

const Title = styled.h3`
  font-size:1.1rem; margin-bottom:.4rem; color:#111827; font-weight:600; line-height:1.3;
  @media(min-width:500px){ font-size:1.3rem; }
  @media(min-width:768px){ font-size:1.8rem; margin-bottom:.75rem; font-weight:700; }
`;

const Meta = styled.div`
  display:flex; flex-wrap:wrap; gap:.4rem; font-size:.7rem; color:#6b7280; margin-bottom:.8rem; align-items:center;
  span:not(:first-of-type){ display:flex; align-items:center; &::before{ content:"•"; margin:0 0.2rem; color:#d1d5db; } }
  @media(min-width:500px){ font-size:.8rem; gap:.5rem; margin-bottom:1rem; }
  @media(min-width:768px){ font-size:.95rem; gap:1rem; margin-bottom:1.25rem; }
`;

const Desc = styled.p`
  color:#4b5563; line-height:1.5; margin-bottom:1rem; font-size:.8rem; word-wrap:break-word;
  overflow-y:visible;
  @media(min-width:500px){ font-size:.9rem; }
  @media(min-width:768px){ font-size:1.05rem; margin-bottom:1.75rem; line-height:1.7; }
`;

const TechStack = styled.div`
  display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:1rem; overflow-x:auto; padding-bottom:3px;
  @media(min-width:500px){ gap:.5rem; margin-bottom:1.2rem; }
  @media(min-width:768px){ gap:.75rem; margin-bottom:1.5rem; overflow-x:visible; }
`;

const Tech = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 0.65rem;
  font-weight: 500;
  color: #374151;
  flex-shrink: 0;

  &:hover {
    background: #f3f4f6;
  }

  @media(min-width:500px){
    font-size: 0.7rem;
    padding: 0.3rem 0.5rem;
    gap: 0.3rem;
  }
  
  @media(min-width:768px){
    font-size: 0.85rem;
    padding: 0.5rem 0.9rem;
    border-radius: 8px;
    gap: 0.5rem;
  }
`;

const TechIcon = styled.img`
  width:12px; height:12px; object-fit:contain;
  @media(min-width:500px){ width:14px; height:14px; }
  @media(min-width:768px){ width:16px; height:16px; }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.4rem;
  margin-top: auto;
  overflow-x: auto;

  @media(min-width:500px){
    gap: 0.5rem;
  }
  
  @media(min-width:768px){
    flex-wrap: wrap;
    gap: 0.8rem;
    overflow-x: visible;
  }
`;

const Btn = styled.a`
  padding:.5rem .8rem; border-radius:6px; text-align:center; font-weight:600; min-width:80px;
  display:inline-flex; align-items:center; justify-content:center; gap:.3rem; font-size:.8rem; transition:.2s ease;
  &.primary{ background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%); color:white;
    box-shadow:0 2px 4px rgba(59,130,246,.2);
    &:hover{ background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%); transform:translateY(-1px); box-shadow:0 4px 8px rgba(59,130,246,.3); } }
  &.secondary{ background:#fff; color:#374151; border:1px solid #e5e7eb;
    &:hover{ background:#f9fafb; transform:translateY(-1px); border-color:#d1d5db; } }
  @media(min-width:500px){ padding:.6rem 1rem; min-width:100px; font-size:.85rem; }
  @media(min-width:768px){ padding:.75rem 1.25rem; font-size:1rem; border-radius:10px; min-width:120px; }
`;

const NavButton = styled.button`
  position:absolute; top:50%; transform:translateY(-50%); width:30px; height:30px; border-radius:50%; border:none;
  background:white; color:#3b82f6; cursor:pointer; font-size:14px; z-index:10; display:flex; align-items:center; justify-content:center;
  transition:.2s ease; box-shadow:0 3px 8px rgba(0,0,0,.1); opacity:.9;
  &:hover{ background:#3b82f6; color:#fff; transform:translateY(-50%) scale(1.05); opacity:1; }
  &.prev{ left:-5px; } &.next{ right:-5px; }
  &:disabled{ opacity:.3; cursor:not-allowed; &:hover{ background:white; color:#3b82f6; transform:translateY(-50%); } }
  @media(min-width:500px){ width:36px; height:36px; font-size:16px; &.prev{ left:0; } &.next{ right:0; } }
  @media(min-width:768px){ width:44px; height:44px; font-size:18px; &.prev{ left:-22px; } &.next{ right:-22px; } }
  @media(min-width:992px){ width:52px; height:52px; font-size:20px; &.prev{ left:-26px; } &.next{ right:-26px; } }
`;

const Dots = styled.div`
  display:flex; justify-content:center; gap:.4rem; margin-top:1rem; padding:0 8px;
  @media(min-width:500px){ gap:.5rem; margin-top:1.5rem; padding:0 15px; }
  @media(min-width:768px){ margin-top:2rem; gap:.6rem; padding:0; }
`;

const Dot = styled.button`
  width:8px; height:8px; border-radius:50%; border:none; cursor:pointer;
  background:${p=>p.active?"#3b82f6":"#e5e7eb"}; transition:.2s ease;
  &:hover{ background:${p=>p.active?"#2563eb":"#d1d5db"}; transform:scale(${p=>p.active?"1.1":"1.2"}); }
  @media(min-width:500px){ width:10px; height:10px; }
  @media(min-width:768px){ width:12px; height:12px; }
`;

const Counter = styled.div`
  position:absolute; top:8px; right:8px; background:rgba(0,0,0,.7); color:#fff; padding:.2rem .6rem;
  border-radius:16px; font-size:.7rem; font-weight:500; backdrop-filter:blur(4px); z-index:2;
  @media(min-width:500px){ top:12px; right:12px; padding:.3rem .8rem; font-size:.8rem; }
  @media(min-width:768px){ top:16px; right:16px; padding:.4rem .9rem; font-size:.9rem; }
`;

const SwipeHint = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 60px;
  background: linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.15), rgba(255,255,255,0.05));
  border-radius: 15px;
  z-index: 1;
  pointer-events: none;
  opacity: 0.7;
  animation: swipeHintPulse 3s infinite ease-in-out;
  
  &.left {
    left: 10px;
    animation-delay: 0s;
  }
  
  &.right {
    right: 10px;
    animation-delay: 1.5s;
  }

  @keyframes swipeHintPulse {
    0%, 20%, 100% { opacity: 0; transform: translateY(-50%) scale(0.8); }
    10% { opacity: 0.4; transform: translateY(-50%) scale(1); }
  }

  @media(min-width: 768px) {
    display: none; /* Hide on desktop since navigation buttons are visible */
  }
`;

const TouchIndicator = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(0,0,0,0.6);
  color: rgba(255,255,255,0.8);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 500;
  z-index: 2;
  animation: touchHintFade 4s infinite ease-in-out;
  backdrop-filter: blur(4px);

  @keyframes touchHintFade {
    0%, 15%, 85%, 100% { opacity: 0; transform: translateX(-50%) translateY(5px); }
    25%, 75% { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @media(min-width: 768px) {
    display: none; /* Hide on desktop */
  }

  .swipe-icon {
    animation: swipeGesture 2s infinite ease-in-out;
  }

  @keyframes swipeGesture {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    75% { transform: translateX(3px); }
  }
`;

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [slideDirection, setSlideDirection] = useState(1); // 1 for right, -1 for left
  const [hasInteracted, setHasInteracted] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if(!autoPlay) return;
    const interval = setInterval(()=>{
      setSlideDirection(1); // Auto-play always goes forward
      setCurrent(prev => (prev+1)%ProjectList.length);
    },6000);
    return ()=>clearInterval(interval);
  }, [autoPlay]);

  const goSlide = (i, direction = 1) => { 
    setAutoPlay(false); 
    setSlideDirection(direction);
    setHasInteracted(true);
    setCurrent(i); 
  };
  
  const goPrev = () => {
    const newIndex = current === 0 ? ProjectList.length - 1 : current - 1;
    goSlide(newIndex, -1); // Set direction to left for previous
  };
  
  const goNext = () => {
    const newIndex = (current + 1) % ProjectList.length;
    goSlide(newIndex, 1); // Set direction to right for next
  };
  
  const handleTouch = e => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if(Math.abs(diff) > 20) setHasInteracted(true); // Mark as interacted on any significant swipe
    
    if(diff > 50) {
      // Swiped right - show previous project, animate to right
      const newIndex = current === 0 ? ProjectList.length - 1 : current - 1;
      goSlide(newIndex, 1); // Animate to right (positive direction)
    } else if(diff < -50) {
      // Swiped left - show next project, animate to left  
      const newIndex = (current + 1) % ProjectList.length;
      goSlide(newIndex, -1); // Animate to left (negative direction)
    }
  };

  const p = ProjectList[current];

  const BtnLabel = ({ desktop, mobile }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    return <>{isMobile ? mobile : desktop}</>;
  };

  return (
    <Container>
      <Wrapper
        onMouseEnter={()=>setAutoPlay(false)}
        onMouseLeave={()=>setAutoPlay(true)}
        onTouchStart={e=>touchStartX.current=e.touches[0].clientX}
        onTouchEnd={handleTouch}
      >
        <Counter>{current+1}/{ProjectList.length}</Counter>
        
        {/* Swipe hints - only show on mobile and if user hasn't interacted yet */}
        {!hasInteracted && (
          <>
            <SwipeHint className="left" />
            <SwipeHint className="right" />
            <TouchIndicator>
              <HiOutlineHandRaised size={10} className="swipe-icon" />
              Swipe
            </TouchIndicator>
          </>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{opacity:0, x: slideDirection * 50}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x: slideDirection * -50}}
            transition={{duration:.4,ease:"easeInOut"}}
          >
            <Card>
              <Image>
                <img src={p.img} alt={p.title} loading="lazy"/>
                <GradientOverlay/>
                {p.category && <Badge>{p.category}</Badge>}
              </Image>
              <Content>
                <div>
                  <Title>{p.title}</Title>
                  <Meta>
                    <span>{p.role}</span>
                    <span>{p.year}</span>
                    {p.duration && <span>{p.duration}</span>}
                  </Meta>
                  <Desc>{p.description}</Desc>
                  <TechStack>
                    {p.tech_stack.map((t,i)=>(
                      <Tech key={i}>
                        <TechIcon src={t.icon} alt={t.name}/>
                        <span>{t.name}</span>
                      </Tech>
                    ))}
                  </TechStack>
                </div>
                <Buttons>
                  {p.github_url && (
                    <Btn
                      className="secondary"
                      href={p.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={12} /> <BtnLabel desktop="View Code" mobile="Code" />
                    </Btn>
                  )}
                  {p.demo_url && (
                    <Btn
                      className="primary"
                      href={p.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={12} /> <BtnLabel desktop="Live Demo" mobile="Demo" />
                    </Btn>
                  )}
                </Buttons>
              </Content>
            </Card>
          </motion.div>
        </AnimatePresence>

        {ProjectList.length>1 && <>
          <NavButton className="prev" onClick={goPrev} aria-label="Previous project"><FaChevronLeft/></NavButton>
          <NavButton className="next" onClick={goNext} aria-label="Next project"><FaChevronRight/></NavButton>
        </>}
      </Wrapper>

      {ProjectList.length>1 && <Dots>
        {ProjectList.map((_,i)=><Dot key={i} active={i===current} onClick={()=>goSlide(i, i > current ? 1 : -1)} aria-label={`Go to project ${i+1}`}/>)}
      </Dots>}
    </Container>
  );
}