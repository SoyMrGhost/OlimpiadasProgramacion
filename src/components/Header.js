// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Adidas-Logo-1971.jpeg'; // Ruta correcta desde el archivo actual
import user from '../assets/images/User.jpg'; 
import './styles/Header.css';
import Modal from './Modal';
import Login from './Login'; // Asegúrate de importar el componente Login

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Cambia esto según tu lógica de autenticación
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/miperfil');
    } else {
      navigate('/login');
    }
  };

  const handleLoginTest = () => {
    setIsLoggedIn(true); // Cambia el estado a `true` para probar la funcionalidad
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Cambia el estado a `false` para probar la funcionalidad
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className="user-options">
        <img
          className="user-icon"
          src={user}
          alt="User Icon"
          onClick={handleDropdownToggle}
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              {isLoggedIn ? (
                <>
                  <li><Link to="/miperfil">Mi Perfil</Link></li>
                  <li><Link to="/micarrito">Ver Carrito</Link></li>
                  <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                </>
              ) : (
                <>
                  <li><Link to="/Register">Registarse</Link></li>
                  <li><button onClick={openModal}>Iniciar Sesion</button></li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Login />
        </Modal>
      )}
      
        <div className="auth-buttons">
          <button onClick={handleLoginTest} className="login-test-button">Log In Test</button>
          <button onClick={handleLogout} className="login-test-button">Log out Test</button>
        </div>
      
    </header>
  );
};

export default Header;
