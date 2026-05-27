import Nav from '../../components/Nav.jsx';
import Footer from '../../components/Footer.jsx';
import Hero from './Hero.jsx';
import HowItWorks from './HowItWorks.jsx';
import Specialties from './Specialties.jsx';
import MatchForm from './MatchForm.jsx';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <Specialties />
      <MatchForm />
      <Footer />
    </>
  );
}
