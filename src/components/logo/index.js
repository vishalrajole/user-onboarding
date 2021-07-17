import logo from "../../assets/kadmos_logo_black@2x.png";
import { LogoWrapper } from "./styles";

// sourced from https://images.squarespace-cdn.com/content/v1/60bf815d3b6e5e189298eb04/1623270756271-RJ7ZU20NVQ8AX6OGEMT2/kadmos_logo_black%402x.png?format=1500w
// better to use SVG than png

const Logo = ({ height = "50px", width = "auto" }) => {
  return (
    <LogoWrapper>
      <img src={logo} alt="logo" height={height} width={width} />
    </LogoWrapper>
  );
};

export default Logo;
