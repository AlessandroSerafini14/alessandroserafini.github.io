import Link from "next/link";
import React from "react";
import { AiOutlineStar, AiOutlineInfoCircle } from "react-icons/ai";
import { BiCode } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { HiOutlineBookOpen, HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { IoSchoolOutline } from "react-icons/io5";

import Chip from "#components/Chip";
import {
  Container,
  Info,
  Contacts,
  Title,
  GoRepoIcon,
  OutlineButton,
  NavLinks,
  NavLink,
} from "#components/Header/styles";
import Text from "#components/Text";

import { MiddleAligned } from "#styles";
import { Anchor, TextSize } from "#types";

const Header: React.FC = () => {
  const anchors: Anchor[] = [
    { text: "Experience", target: "experience", icon: <AiOutlineStar /> },
    { text: "About", target: "about", icon: <AiOutlineInfoCircle /> },
    { text: "Skills", target: "skills", icon: <BiCode /> },
    { text: "Education", target: "education", icon: <IoSchoolOutline /> },
    {
      text: "Publications",
      target: "publication",
      icon: <HiOutlineBookOpen />,
    },
    { text: "Companies", target: "used-by", icon: <HiOutlineOfficeBuilding /> },
    { text: "Languages", target: "languages", icon: <HiOutlineLanguage /> },
  ];

  const goTo = (url: string) => {
    if (!window) return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.open(url, "_blank").focus();
  };

  return (
    <Container>
      <Info>
        <MiddleAligned>
          <GoRepoIcon />
          <Title>
            <Link href={"/"}>AlessandroSerafini</Link>
            <Text size={TextSize.XLARGE}>&nbsp;/&nbsp;</Text>
            <Link href={"/"}>
              <strong>me</strong>
            </Link>
          </Title>
          <Chip>Public</Chip>
        </MiddleAligned>
        <Contacts>
          <OutlineButton
            onClick={() => goTo("https://www.linkedin.com/in/aleserafiniweb/")}
            icon={<FaLinkedinIn />}
          >
            Linkedin
          </OutlineButton>
          <OutlineButton
            onClick={() => goTo("mailto:sera-92@hotmail.it")}
            icon={<GoMail />}
          >
            Email
          </OutlineButton>
        </Contacts>
      </Info>
      <NavLinks>
        {anchors.map((anchor) => (
          <NavLink
            key={anchor.target}
            activeClass="active"
            to={anchor.target}
            spy={true}
            smooth={true}
            offset={-16}
            duration={500}
          >
            {anchor.icon}
            {anchor.text}
          </NavLink>
        ))}
      </NavLinks>
    </Container>
  );
};

export default Header;
