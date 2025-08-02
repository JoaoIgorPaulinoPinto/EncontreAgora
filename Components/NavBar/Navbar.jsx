'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { useRouter } from 'next/navigation';

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const handleClick = (rota) => {router.push(`/${rota}`); setExpanded(false);};

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`${styles.navbar}`} // estilo do módulo CSS
      sticky="top"
    >
      <Container fluid className= {styles.container}>
        <Navbar.Brand className={styles.brand}>EncontreAgora</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNav"
          onClick={() => setExpanded((exp) => !exp)}
          className={styles.toggle}
        />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <button className={styles.link} onClick={() => handleClick('#')}>Home</button>
            <button className={styles.link} onClick={() => handleClick('Buscar')}>Buscar</button>
            <button className={styles.link} onClick={() => handleClick('Perfil')}>Perfil</button>
            {/* <button className={styles.link} onClick={() => handleClick('Configuracoes')}>Configurações</button> */}
            <button disabled className={styles.disabled}>Disabled</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
