import GalleryNavbar from "@/components/GalleryNavbar";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/home/HeroSection";
import MuseumPartners from "@/components/home/MuseumPartners";
import CurrentExhibitions from "@/components/home/CurrentExhibitions";
import PrivateViewingRooms from "@/components/home/PrivateViewingRooms";
import AuctionMetrics from "@/components/home/AuctionMetrics";
import FeaturedMasterpieces from "@/components/home/FeaturedMasterpieces";
import TheCurators from "@/components/home/TheCurators";
import GalleryInterior from "@/components/home/GalleryInterior";
import ArtworksPlaced from "@/components/home/ArtworksPlaced";
import CollectorsJournal from "@/components/home/CollectorsJournal";
import ArtAuthentication from "@/components/home/ArtAuthentication";
import CollectorTestimonials from "@/components/home/CollectorTestimonials";
import { CatalogCTA, GalleryFooter } from "@/components/home/CatalogAndFooter";

const Index = () => {
  return (
    <div className="cursor-none md:cursor-none">
      <CustomCursor />
      <GalleryNavbar />
      <main>
        <HeroSection />
        <MuseumPartners />
        <CurrentExhibitions />
        <PrivateViewingRooms />
        <AuctionMetrics />
        <FeaturedMasterpieces />
        <TheCurators />
        <GalleryInterior />
        <ArtworksPlaced />
        <CollectorsJournal />
        <ArtAuthentication />
        <CollectorTestimonials />
        <CatalogCTA />
      </main>
      <GalleryFooter />
    </div>
  );
};

export default Index;
