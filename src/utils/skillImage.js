export const skillImage = (skill) => {
  const skillId = skill.toLowerCase();

  switch (skillId) {
    case "html":
      return "/skill/html.svg";
    case "css":
      return "/skill/css.svg";
    case "javascript":
      return "/skill/javascript.svg";
    case "react":
      return "/skill/react.svg";
    case "tailwind":
      return "/skill/tailwind.svg";
    case "git":
      return "/skill/git.svg";
    case "github":
      return "/skill/github.svg";
    case "nodejs":
      return "/skill/node.svg";
    case "npm":
      return "/skill/npm.svg";
    case "bootstrap":
      return "/skill/bootstrap.svg";
    case "figma":
      return "/skill/figma.svg";
    default:
      return null;
  }
};
