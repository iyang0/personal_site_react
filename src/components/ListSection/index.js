import React from 'react';
import {
  ListContainer,
  ListTitle,
  ItemsWrapper,
  ItemCard,
  ItemImage,
  ItemTitle,
  ItemDescription
} from './ListSectionElements';

export default function ListSection() {
  return (
    <ListContainer id="projects">
      <ListTitle>Projects</ListTitle>
      <ItemsWrapper>
        <ItemCard>
          <a href="https://ivan-yang.xyz/">deployed</a>
          <a href="https://github.com/iyang0/personal_site_react">github</a>
          <ItemImage />
          <ItemTitle>
            This Personal Site
          </ItemTitle>
          <ItemDescription>
            A wholely react project to mess around with styled components
          </ItemDescription>
        </ItemCard>
        <ItemCard>
          <a href="https://jobly-backend-ivan.herokuapp.com/companies">deployed</a>
          <a href="https://github.com/iyang0/jobly-backend">github</a>
          <ItemImage />
          <ItemTitle>
            Jobly Backend
          </ItemTitle>
          <ItemDescription>
            The backend to an API to a mock jobs listing site made using JS/express and a postgres db.
            The main points of interest here is authentication and authorization using JWTs.
          </ItemDescription>
        </ItemCard>
        <ItemCard>
          <a href="https://jobly-ivan.surge.sh/">deployed</a>
          <a href="https://github.com/iyang0/jobly-backend">github</a>
          <ItemImage />
          <ItemTitle>
            Jobly Frontend
          </ItemTitle>
          <ItemDescription>
            The frontend for the API backend. Uses react and bootstrap. 
            Use testuser/password for username/password if you want to try it out.
          </ItemDescription>
        </ItemCard>
        <ItemCard>
          <a href="https://warbler-ivan-lance.herokuapp.com/">deployed</a>
          <a href="https://github.com/iyang0/warbler">github</a>
          <ItemImage />
          <ItemTitle>
            Warbler
          </ItemTitle>
          <ItemDescription>
            A small clone of twitter made with Python/Flask.
          </ItemDescription>
        </ItemCard>
      </ItemsWrapper>
    </ListContainer>
  )
}
