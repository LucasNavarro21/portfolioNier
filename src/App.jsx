import ContactComponent from "./components/contact";
import NierCards from "./components/containers/card-component";
import HeroComponent from "./components/hero";
import NavbarComponent from "./components/navbar";
 
export default function App() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <NavbarComponent />
      <div id="hero-section">
        <HeroComponent />
      </div>
      <NierCards />
      <ContactComponent />
    </div>
  );
}