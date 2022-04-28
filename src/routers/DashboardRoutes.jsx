import { Routes, Route} from "react-router-dom";

import { Navbar } from '../components/ui/NavBar'

import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />

            <Route path="search" element={<SearchScreen />} />
            <Route path="hero" element={<HeroScreen />} />


            <Route path="/" element={<MarvelScreen />} />
        </Routes>
    </>
  )
}
