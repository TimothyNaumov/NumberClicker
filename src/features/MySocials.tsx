import { IconButton } from "@mui/material";
import { GitHub, LinkedIn, Description } from "@mui/icons-material";

const SocialMediaButtons = () => {
  const linkedinUrl = "https://www.linkedin.com/in/timothy-naumov/";
  const githubUrl = "https://github.com/TimothyNaumov";
  const mediumUrl = "https://medium.com/@TimothyNaumov";

  return (
    <div>
      <IconButton
        component="a"
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </IconButton>

      <IconButton
        component="a"
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        aria-label="GitHub"
      >
        <GitHub />
      </IconButton>

      <IconButton
        component="a"
        href={mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        aria-label="Medium"
      >
        <Description />
      </IconButton>
    </div>
  );
};

export default SocialMediaButtons;
