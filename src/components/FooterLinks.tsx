import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </footer>
  );
};

export default FooterLinks;
