import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Speeladvies from './pages/Speeladvies';
import MijnBacklog from './pages/MijnBacklog';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ComingSoon title="The Classy Gamer" />} />
          <Route path="/reviews" element={<ComingSoon title="Reviews" />} />
          <Route path="/discover" element={<ComingSoon title="Discover" />} />
          <Route path="/speeladvies" element={<Speeladvies />} />
          <Route path="/guides" element={<ComingSoon title="Guides" />} />
          <Route path="/mijn-backlog" element={<MijnBacklog />} />
          <Route path="/backlog-club" element={<ComingSoon title="Backlog Club" />} />
          <Route path="/community" element={<ComingSoon title="Community" />} />
          <Route path="/zo-beoordeel-ik" element={<ComingSoon title="Zo beoordeel ik" />} />
          <Route path="*" element={<ComingSoon title="Pagina niet gevonden" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
