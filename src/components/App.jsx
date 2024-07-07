import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Initial } from './Initial/initial.jsx';
import { About } from './About/about.jsx';
import { Gallery } from './Gallery/gallery.jsx';
import { Contacts } from './Contacts/contacts.jsx';
import { NotFoundPage } from './NotFound/notfoundpage.jsx';
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/gallery" className={buildLinkClass}>
          Gallery
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Initial />}>
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
