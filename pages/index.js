import Feature from "../components/Feature";
import Team from ".../components/Team";
import WishList from ".../components/WishList"
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Give Comfort, Inc.' />
      <Layout>
        <Hero />
        <Feature />
        <WishList />
        <Team />
      </Layout>
    </>
  );
}
