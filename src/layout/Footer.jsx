
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="rounded-none pt-10 px-10 ">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
        <Link to="/" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Volunteer Board</Link>
          <FooterLinkGroup className="justify-center mt-3">
            <FooterLink> <Link to="/">Home</Link></FooterLink>
            <FooterLink> <Link to="/all-posts">All volunteer Need Posts</Link> </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright  by="Volunteer Board" year={(new Date()).getFullYear()} />
      </div>
    </Footer>
  );
}
