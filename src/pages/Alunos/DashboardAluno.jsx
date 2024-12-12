import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Navegação com react-router-dom
import {
  FaUser,
  FaChartLine,
  FaBell,
  FaCalendarAlt,
  FaCogs,
  FaEllipsisV,
} from 'react-icons/fa'; // Ícones
import { motion } from 'framer-motion';

function DashboardAluno({ theme }) {
  const userName = "João"; // Nome fictício do aluno (substituir com a lógica real)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Animações de entrada
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Função para alternar a visibilidade do dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      } min-h-screen`}
    >
      {/* Header com navegação horizontal */}
      <motion.header
        className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 p-4 fixed w-full top-0 left-0 z-10 shadow-md"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Portal do Aluno</h1>

          {/* Navegação no topo */}
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li>
                <NavLink
                  to="/meudesempenho-aluno"
                  className={`text-white hover:text-indigo-300 transition-all duration-300 ease-in-out flex items-center space-x-2`}
                  activeClassName="font-semibold"
                >
                  <FaUser className="text-lg" />
                  <span>Meu Desempenho</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/meucomportamento-aluno"
                  className={`text-white hover:text-indigo-300 transition-all duration-300 ease-in-out flex items-center space-x-2`}
                  activeClassName="font-semibold"
                >
                  <FaChartLine className="text-lg" />
                  <span>Meu Comportamento</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notificacoes-aluno"
                  className={`text-white hover:text-indigo-300 transition-all duration-300 ease-in-out flex items-center space-x-2`}
                  activeClassName="font-semibold"
                >
                  <FaBell className="text-lg" />
                  <span>Notificações</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendario-aluno"
                  className={`text-white hover:text-indigo-300 transition-all duration-300 ease-in-out flex items-center space-x-2`}
                  activeClassName="font-semibold"
                >
                  <FaCalendarAlt className="text-lg" />
                  <span>Calendário</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recursos-aluno"
                  className={`text-white hover:text-indigo-300 transition-all duration-300 ease-in-out flex items-center space-x-2`}
                  activeClassName="font-semibold"
                >
                  <FaCogs className="text-lg" />
                  <span>Recursos</span>
                </NavLink>
              </li>
            </ul>

            {/* Menu Hamburguer para telas pequenas */}
            <div className="md:hidden">
              <button onClick={toggleDropdown} className="text-white">
                <FaEllipsisV className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Menu Dropdown em tela cheia */}
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-indigo-900 bg-opacity-95 flex flex-col items-center justify-center z-20">
          <ul className="space-y-6 text-center">
            <li>
              <NavLink
                to="/meudesempenho-aluno"
                className="text-white text-2xl flex items-center justify-center space-x-4 hover:text-indigo-300"
                onClick={toggleDropdown}
              >
                <FaUser /> <span>Meu Desempenho</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meucomportamento-aluno"
                className="text-white text-2xl flex items-center justify-center space-x-4 hover:text-indigo-300"
                onClick={toggleDropdown}
              >
                <FaChartLine /> <span>Meu Comportamento</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notificacoes-aluno"
                className="text-white text-2xl flex items-center justify-center space-x-4 hover:text-indigo-300"
                onClick={toggleDropdown}
              >
                <FaBell /> <span>Notificações</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendario-aluno"
                className="text-white text-2xl flex items-center justify-center space-x-4 hover:text-indigo-300"
                onClick={toggleDropdown}
              >
                <FaCalendarAlt /> <span>Calendário</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recursos-aluno"
                className="text-white text-2xl flex items-center justify-center space-x-4 hover:text-indigo-300"
                onClick={toggleDropdown}
              >
                <FaCogs /> <span>Recursos</span>
              </NavLink>
            </li>
          </ul>
          <button
            className="mt-12 text-white text-xl underline hover:text-indigo-300"
            onClick={toggleDropdown}
          >
            Fechar Menu
          </button>
        </div>
      )}

      {/* Main Content */}
      <motion.main
        className="pt-20 px-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-indigo-800">
            Bem-vindo, {userName || 'Aluno'}
          </h2>
          <div>
            <NavLink
              to="/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Logout
            </NavLink>
          </div>
        </header>

        {/* Dashboard Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Meu Desempenho
            </h3>
            <p className="text-gray-600">
              Acompanhe seu desempenho acadêmico ao longo do semestre.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Meu Comportamento
            </h3>
            <p className="text-gray-600">
              Verifique o seu comportamento e participação nas atividades.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Notificações
            </h3>
            <p className="text-gray-600">
              Fique por dentro das atualizações e mensagens importantes.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Calendário
            </h3>
            <p className="text-gray-600">
              Visualize e organize as atividades e eventos importantes do semestre.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Recursos</h3>
            <p className="text-gray-600">
              Acesse recursos educacionais, materiais e guias.
            </p>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}

export default DashboardAluno;
