import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const HelmetComponent = () => {
  const location = useLocation();
  const baseTitle = "Volunteer Board";


  let pageTitle;

  switch (location.pathname) {
    case "/":
      pageTitle = "Home";
      break;
    case "/register":
      pageTitle = "Register";
      break;
    case "/login":
      pageTitle = "Login";
      break;
    case "/add-post":
      pageTitle = "Add Volunteer Need Post";
      break;
    case "/all-posts":
      pageTitle = "All Volunteer Need Posts";
      break;
    case "/manage-posts":
      pageTitle = "Manage Posts";
      break;
    default:
      pageTitle = "Page Not Found";

      if (location.pathname.includes("/post-details/")) {
        pageTitle = "Volunteer Need Post Details";

      } else if (location.pathname.includes("/update-post/")) {
        pageTitle = "Update Volunteer Need Post";
      }
  }

  const fullTitle = `${baseTitle} - ${pageTitle}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
};

export default HelmetComponent;
