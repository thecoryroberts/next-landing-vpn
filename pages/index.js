import Feature from "../components/Feature";
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
      </Layout>
    </>
  );
}
