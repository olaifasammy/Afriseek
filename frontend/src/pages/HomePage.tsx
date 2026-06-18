import Header from "../components/layout/Header";

import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";
import { OntologySpotlight } from '../components/home/OntologySpotlight';
import RecentEntities from "../components/home/RecentEntities";
import FeaturedKnowledgePaths from "../components/home/FeaturedKnowledgePaths";
import RecentArticles from "../components/home/RecentArticles";
import { TodayInHistory } from "../components/home/TodayInHistory";
import CommunitySection from "../components/home/CommunitySection";
import MissionSection from "../components/home/MissionSection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <Hero />

      <CategoryGrid />
      <OntologySpotlight />

      <RecentEntities />

      <FeaturedKnowledgePaths />

      <RecentArticles />
      <TodayInHistory />
      <CommunitySection/>
      <MissionSection />
      <Footer/>
    </>
  );
}
