import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Coopyright";
import logo from "../../images/white_logo.svg";
import styles from "./styles.module.scss";

const navLinks = [
  { name: "Premium", link: "#" },
  { name: "Support", link: "#" },
  { name: "Download", link: "#" },
  { name: "Sign Up", link: "/signup" },
  { name: "Log In", link: "/login" },
];

const companyLinks = ["About", "Jobs", "For the record"];

const communitiesLinks = [
  "For Artists",
  "Developers",
  "Advertising",
  "Investors",
  "Vendors",
  "Spotify For Work"
];

const usefulLinks = ["Support", "Web Player", "Free Mobile App", "Desktop App"];

const footerLinks =[
    "Legal",
    "Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",

]

const footerIcons = [<InstagramIcon/>,<TwitterIcon/>,<FacebookIcon/>]
