import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
  height: 80px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  transition: background-color 0.3s ease;
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1000px;
`;

export const NavLink = styled(ScrollLink)`
  color: ${props => props.scrolled ? 'rgba(221, 221, 221, 1)' : 'rgb(119, 119, 121)'};
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #f6f6f6;
  }
`;

export const Logo = styled('div')`
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;