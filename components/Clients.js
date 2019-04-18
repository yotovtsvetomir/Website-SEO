import { h } from 'preact';
import render from 'preact-render-to-string';

const Clients = () => (
	<div className="section">
    <div className="shell">
      <div className="section_head">
        <h2>Awesome clients</h2>
        <p>Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit amet viverra diam. Nulla ac nisi rhoncus.</p>
      </div>
      <div className="section_body">
        <div className="clients">
          <a className="client">
            <img src="../assets/cocacola.png" />
          </a>
          <a className="client">
            <img src="../assets/cisco.png" />
          </a>
          <a className="client">
            <img src="../assets/vodafone.png" />
          </a>
          <a className="client">
            <img src="../assets/walmart.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Clients;
