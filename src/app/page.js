import WaIcon from "./ui/WaIcon";
import Cover from "./ui/cover/Cover";
import TeamCarrousel from "./ui/cover/TeamCarrousel";
import Footer from "./ui/footer/footer";
import MusicProd from "./ui/musicProd/MusicProd";
import Testimonials from "./ui/musicProd/Testimonials";
import RecordingStudio from "./ui/recordingStudio/RecordingStudio";
import StudioCarousel from "./ui/recordingStudio/StudioCarousel";
import Session from "./ui/session/Session";
import Video from "./ui/session/Video";

export default function Home() {
  return (
    <main>
      <Cover />
      <TeamCarrousel />
      <MusicProd />
      <Testimonials />
      <Session />
      <Video />
      <RecordingStudio />
      <StudioCarousel />
      <Footer />
      <WaIcon />
    </main>
  )
}
