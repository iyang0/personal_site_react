import profile from "../../images/profile.jpg";
import hobbies from "../../images/hobbies.jpg";
import { ExternalLink } from "./ContentElements";

export const aboutMeContent = {
  id: "about",
  lightTheme: false,
  topLine: "Hi, I'm Ivan Yang",
  headLine: "Fullstack Developer",
  description: (
    <>
      I am a native San Franciscan born and raised, graduated from SFSU in
      Economics and have turned to Software Engineering; I've had an interesting
      path taking me from underwriting for credit card processors to developing
      software. I have experience working with HTML, CSS, JavaScript(Express,
      Node, React), Python(Flask), and PostgreSQL.
      <br /> <br />
      Currently, I am working as a backend engineer at{" "}
      <ExternalLink
        href="https://www.joinuplift.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        UpLift
      </ExternalLink>
      .
    </>
  ),
  imgStart: false,
  img: profile,
  alt: "It's me",
  lightNext: true,
};

export const interestsContent = {
  id: "interests",
  lightTheme: true,
  topLine: "I'm a geek",
  headLine: "Interests",
  description: `I am a lover of the usual staples of geek culture.
  I play lots of Magic: the Gathering, mainly limited and commander;
  read manga, some of my favorites like Spirit Circle are pictured;
  and like many people, I love video-games.`,
  imgStart: true,
  img: hobbies,
  alt: "My hobbies: manga, mtg, and games",
  lightNext: false,
};
