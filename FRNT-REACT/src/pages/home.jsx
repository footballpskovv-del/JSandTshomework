import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Works from "../components/works/works";
import Contacts from "../components/contacts/contacts";

function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
      <Contacts />
    </Layout>
  );
}

export default Home;
