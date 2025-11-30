// src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
	<Layout
	  title="UAH Marketing Lab"
	  description="Documentación del ecosistema de aplicaciones docentes de marketing"
	>
	  <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
		<h1>UAH Marketing Lab — Documentación</h1>
		<p>
		  Bienvenido a la documentación del ecosistema de aplicaciones interactivas
		  de marketing desarrollado en la Universidad de Alcalá.
		</p>

		<p>
		  Puedes empezar por la introducción en español:
		</p>
		<ul>
		  <li>
			<Link to="/es/intro">📘 Introducción (ES)</Link>
		  </li>
		</ul>
	  </main>
	</Layout>
  );
}