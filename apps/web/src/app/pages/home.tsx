import { HowItWorks, Prices, Web3Community, WhyOur } from "@/components";
import { Layout } from "@/components/ui/Layout";

export const Home = () => {
  return (
    <Layout>
      <>
        <HowItWorks />
        <WhyOur />
        <Web3Community />
        <Prices />
      </>
    </Layout>
  );
};
