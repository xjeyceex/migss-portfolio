import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";
import { theme } from "../../theme";

export const Nav = styled.nav`
  background: ${(props) =>
    props.scrolled ? theme.colors.overlay : "transparent"};
  height: ${theme.layout.headerHeight};
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  transition: background-color 0.35s ${theme.motion.easeOut},
    backdrop-filter 0.35s ${theme.motion.easeOut};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(12px)" : "none")};`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
  max-width: ${theme.layout.maxWidth};
`;

export const NavLink = styled(ScrollLink)`
  color: ${(props) =>
    props.scrolled ? "rgba(248, 250, 252, 0.95)" : theme.colors.textSubtleOnDark};
  display: flex;
  font-size: 1.05rem;
  font-weight: 500;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: color 0.25s ${theme.motion.easeOut};
  &:hover {
    color: ${theme.colors.textOnDark};
  }
`;

export const Logo = styled(ScrollLink)`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 72px;
    height: 72px;
    object-fit: contain;
    transition: transform 0.25s ${theme.motion.easeOut};
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media screen and (max-width: 768px) {
    img {
      width: 56px;
      height: 56px;
    }
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