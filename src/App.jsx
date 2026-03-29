import NierCards from "./components/containers/card-component";
import HeroComponent from "./components/hero";

export default function App() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <HeroComponent />
      <NierCards />
    </div>
  );
}