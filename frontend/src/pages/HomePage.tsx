import Header from "../components/layout/Header";

import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";
import RecentEntities from "../components/home/RecentEntities";
import FeaturedKnowledgePaths from "../components/home/FeaturedKnowledgePaths";
import RecentArticles from "../components/home/RecentArticles";
import CommunitySection from "../components/home/CommunitySection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <Hero />

      <CategoryGrid />

      <RecentEntities />

      <FeaturedKnowledgePaths />

      <RecentArticles />
      
      <CommunitySection/>
      
      <Footer/>
    </>
  );
}
