import "./Layout.css";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
