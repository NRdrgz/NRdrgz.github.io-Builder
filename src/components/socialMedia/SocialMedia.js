import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia({ mediaName }) {
  // If mediaName is provided, filter the links to find the one that matches. Otherwise, return all links.
  const filteredLinks = mediaName
    ? socialMediaLinks.filter((media) => media.name === mediaName)
    : socialMediaLinks;

  return (
    <div className="social-media-div">
      {filteredLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
