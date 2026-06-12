import Hero from "../components/home/Hero";
import QuickExplore from "../components/home/QuickExplore";
import FeaturedEntities from "../components/home/FeaturedEntities";
import RecentArticles from "../components/home/RecentArticles";
import StatsSection from "../components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <QuickExplore />

      <FeaturedEntities />

      <RecentArticles />

      <StatsSection />
    </>
  );
}
