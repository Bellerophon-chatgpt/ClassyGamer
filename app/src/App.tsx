import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Speeladvies from './pages/Speeladvies';
import MijnBacklog from './pages/MijnBacklog';
import Reviewpagina from './pages/Reviewpagina';
import ZoBeoordeelIk from './pages/ZoBeoordeelIk';
import Guides from './pages/Guides';
import BacklogClub from './pages/BacklogClub';
import Community from './pages/Community';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviewpagina />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/speeladvies" element={<Speeladvies />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/mijn-backlog" element={<MijnBacklog />} />
          <Route path="/backlog-club" element={<BacklogClub />} />
          <Route path="/community" element={<Community />} />
          <Route path="/zo-beoordeel-ik" element={<ZoBeoordeelIk />} />
          <Route path="*" element={<ComingSoon title="Pagina niet gevonden" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
