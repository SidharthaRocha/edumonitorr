import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaChartLine, FaBell, FaCalendarAlt, FaCogs, FaFileAlt, FaEllipsisV } from 'react-icons/fa';
import { motion } from 'framer-motion';

function DashboardProfessor({ theme }) {
  const userName = "João"; // Substitua por lógica real para obter o nome do usuário
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animações de entrada
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fullScreenMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  // Função para alternar a visibilidade do menu responsivo
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      {/* Header com navegação horizontal */}
      <motion.header
        className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 p-4 fixed w-full top-0 left-0 z-10 shadow-md"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Portal do Professor(a)</h1>

          {/* Navegação no topo */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/Meusalunos-professor" className="text-white hover:text-indigo-300 transition-all duration-300 flex items-center space-x-2" activeClassName="font-semibold">
              <FaUser className="text-lg" />
              <span>Meus Alunos</span>
            </NavLink>
            <NavLink to="/desempenho-professor" className="text-white hover:text-indigo-300 transition-all duration-300 flex items-center space-x-2" activeClassName="font-semibold">
              <FaChartLine className="text-lg" />
              <span>Desempenho</span>
            </NavLink>
            <NavLink to="/notificacoes-professor" className="text-white hover:text-indigo-300 transition-all duration-300 flex items-center space-x-2" activeClassName="font-semibold">
              <FaBell className="text-lg" />
              <span>Notificações</span>
            </NavLink>
            <NavLink to="/calendario-professor" className="text-white hover:text-indigo-300 transition-all duration-300 flex items-center space-x-2" activeClassName="font-semibold">
              <FaCalendarAlt className="text-lg" />
              <span>Calendário</span>
            </NavLink>
            <NavLink to="/configuracoes-professor" className="text-white hover:text-indigo-300 transition-all duration-300 flex items-center space-x-2" activeClassName="font-semibold">
              <FaCogs className="text-lg" />
              <span>Configurações</span>
            </NavLink>
            <NavLink to="/relatorios-professor" className="text-white hover:text-indigo-300 transition-all duration-300 flex items-center space-x-2" activeClassName="font-semibold">
              <FaFileAlt className="text-lg" />
              <span>Relatórios</span>
            </NavLink>
          </nav>

          {/* Menu Hamburguer para telas pequenas */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <FaEllipsisV className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu responsivo de tela cheia */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-indigo-800 bg-opacity-95 z-20 flex flex-col items-center justify-center space-y-6"
          variants={fullScreenMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <NavLink to="/Meusalunos-professor" className="text-white text-2xl" onClick={toggleMobileMenu}>Meus Alunos</NavLink>
          <NavLink to="/desempenho-professor" className="text-white text-2xl" onClick={toggleMobileMenu}>Desempenho</NavLink>
          <NavLink to="/notificacoes-professor" className="text-white text-2xl" onClick={toggleMobileMenu}>Notificações</NavLink>
          <NavLink to="/calendario-professor" className="text-white text-2xl" onClick={toggleMobileMenu}>Calendário</NavLink>
          <NavLink to="/configuracoes-professor" className="text-white text-2xl" onClick={toggleMobileMenu}>Configurações</NavLink>
          <NavLink to="/relatorios-professor" className="text-white text-2xl" onClick={toggleMobileMenu}>Relatórios</NavLink>
          <button onClick={toggleMobileMenu} className="text-white text-xl mt-6">Fechar</button>
        </motion.div>
      )}

      {/* Main Content - Espaço abaixo do header */}
      <motion.main
        className="pt-20 px-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-indigo-800">Bem-vindo, {userName || 'Professor'}</h2>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300 ease-in-out">Logout</button>
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
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Meus Alunos</h3>
            <p className="text-gray-600">Acesse o perfil dos alunos, veja suas notas e históricos de atividades.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Desempenho</h3>
            <p className="text-gray-600">Acompanhe o desempenho dos alunos ao longo do semestre.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Notificações</h3>
            <p className="text-gray-600">Fique por dentro das atualizações e mensagens importantes.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Calendário</h3>
            <p className="text-gray-600">Visualize e organize as atividades e eventos importantes do semestre.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Relatórios</h3>
            <p className="text-gray-600">Gere relatórios de desempenho e atividades dos alunos.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Configurações</h3>
            <p className="text-gray-600">Altere configurações da conta e personalize sua experiência.</p>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}

export default DashboardProfessor;
