import React from "react";
import {
  ListContainer,
  ListTitle,
  ItemsWrapper,
  ItemCard,
  ItemImage,
  ItemTitle,
  ItemDescription,
  LinkLeft,
  LeftLinkWrap,
  RightLinkWrap,
  LinkRight,
} from "./ListSectionElements";
import personal from "../../images/project1.png";
import joblyBack from "../../images/project2.png";
import joblyFront from "../../images/project3.png";
import warbler from "../../images/project4.png";

export default function ListSection() {
  return (
    <ListContainer id="projects">
      <ListTitle>Projects</ListTitle>
      <ItemsWrapper>
        <ItemCard>
          <LinkLeft
            href="https://ivan-yang.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LeftLinkWrap>deployed</LeftLinkWrap>
          </LinkLeft>
          <LinkRight
            href="https://github.com/iyang0/personal_site_react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RightLinkWrap>github</RightLinkWrap>
          </LinkRight>
          <ItemImage src={personal} />
          <ItemTitle>This Personal Site</ItemTitle>
          <ItemDescription>
            A wholely react project to mess around with styled components.
          </ItemDescription>
        </ItemCard>
        <ItemCard>
          <LinkLeft
            href="https://jobly-backend-ivan.herokuapp.com/companies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LeftLinkWrap>deployed</LeftLinkWrap>
          </LinkLeft>
          <LinkRight
            href="https://github.com/iyang0/jobly-backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RightLinkWrap>github</RightLinkWrap>
          </LinkRight>
          <ItemImage src={joblyBack} />
          <ItemTitle>Jobly Backend</ItemTitle>
          <ItemDescription>
            The backend to an API to a mock jobs listing site made using
            JS/express. The main point of interest is authentication and
            authorization using JWTs.
          </ItemDescription>
        </ItemCard>
        <ItemCard>
          <LinkLeft
            href="https://jobly-ivan.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LeftLinkWrap>deployed</LeftLinkWrap>
          </LinkLeft>
          <LinkRight
            href="https://github.com/iyang0/react-jobly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RightLinkWrap>github</RightLinkWrap>
          </LinkRight>
          <ItemImage src={joblyFront} />
          <ItemTitle>Jobly Frontend</ItemTitle>
          <ItemDescription>
            The frontend for the API backend. Uses react and bootstrap. Use
            testuser/password for username/password if you want to try it out.
          </ItemDescription>
        </ItemCard>
        <ItemCard>
          <LinkLeft
            href="https://warbler-ivan-lance.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LeftLinkWrap>deployed</LeftLinkWrap>
          </LinkLeft>
          <LinkRight
            href="https://github.com/iyang0/warbler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RightLinkWrap>github</RightLinkWrap>
          </LinkRight>
          <ItemImage src={warbler} />
          <ItemTitle>Warbler</ItemTitle>
          <ItemDescription>
            A small clone of twitter made with Python/Flask. Use
            tuckerdiane/passowrd for username/password if you want to use a test
            account.
          </ItemDescription>
        </ItemCard>
      </ItemsWrapper>
    </ListContainer>
  );
}
