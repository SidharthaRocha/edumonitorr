import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Logo from '../assets/Logo.png';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm text-center relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-900 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
        >
          &times;
        </button>

=======
import Logo from '../assets/Logo.png'; // Substitua pelo caminho do seu logo
import { FaChalkboardTeacher, FaUserGraduate, FaHome } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-900 p-4">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm text-center"
        initial={{ opacity: 0, y: -20 }} // Estado inicial da animação
        animate={{ opacity: 1, y: 0 }} // Estado final da animação
        transition={{ duration: 0.5 }} // Duração da animação
      >
>>>>>>> 36c1b7b6466b0752465598448f3ffcf02bb15126
        {/* Logotipo */}
        <img
          src={Logo}
          alt="Logotipo do Site"
          className="mb-6 w-32 mx-auto"
        />

        {/* Título com quebra de linha */}
        <h2 className="text-2xl font-semibold mb-4 text-purple-900 font-poppins">
          Quem é você?<br />
          <span className="text-lg font-normal">Conta tudo :)</span>
        </h2>

<<<<<<< HEAD
=======
        {/* Botão Voltar para Home */}
        <Link
          to="/"
          className="flex items-center justify-center p-4 bg-gray-300 text-black rounded-lg shadow-md mb-4 hover:bg-gray-400 transition"
        >
          <FaHome className="mr-2" />
          Voltar para Home
        </Link>

>>>>>>> 36c1b7b6466b0752465598448f3ffcf02bb15126
        {/* Opções de Login */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/professor"
            className="flex items-center justify-start p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            <FaChalkboardTeacher className="mr-2" />
            Entrar como Professor
          </Link>
          <Link
            to="/aluno"
            className="flex items-center justify-start p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            <FaUserGraduate className="mr-2" />
            Entrar como Aluno
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
