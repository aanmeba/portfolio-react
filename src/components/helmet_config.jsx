import { Helmet } from "react-helmet";
import Config from "../Config.json";

const HelmetConfig = ({ pageLocation }) => {
  // const { TITLE, DESC, CANONICAL, THEME_COLOR } = props;

  const TITLE = `${pageLocation} | ` + Config.SITE_TITLE;
  const DESC = "Create a React App from an HTML Website.";
  const CANONICAL = Config.SITE_DOMAIN + "/";
  const THEME_COLOR = Config.THEME_COLOR;

  return (
    <Helmet>
      <title>{TITLE}</title>
      <link rel="canonical" href={CANONICAL} />
      <meta name="description" content={DESC} />
      <meta name="theme-color" content={THEME_COLOR} />
    </Helmet>
  );
};

export default HelmetConfig;
