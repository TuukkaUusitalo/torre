import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./App.css";
import Parnerships from "./components/Parnerships";
import CommunitiesPage from "./components/CommunitiesPage";
import Mission from "./components/Mission";
import BlogiPage from "./components/BlogiPage";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      
      {/*<Tours />*/}
      {/*<CommunityAchievements />*/}
      <CommunitiesPage />
      <BlogiPage />
      <Parnerships />
      <Footer />
    </div>
  );
}

export default App;
