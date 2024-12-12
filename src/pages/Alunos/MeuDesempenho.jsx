import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChartBar, FaFilePdf, FaEye } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-200 to-blue-100 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Botão de Voltar */}
        <div className="mb-6">
          <Link
            to="/Dashboard-aluno"
            className="inline-flex items-center text-[#6a0dad] font-semibold text-lg bg-white px-4 py-2 rounded-full shadow-md hover:bg-[#6a0dad] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaArrowLeft className="mr-2" />
            Voltar
          </Link>
        </div>

        {/* Título da Página */}
        <h1 className="text-5xl font-extrabold text-[#6a0dad] text-center mb-12 animate__animated animate__fadeIn">
          Meu Desempenho Acadêmico
        </h1>

        {/* Cards de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visualizar Notas */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300">
            <div className="flex flex-col items-center">
              <FaEye className="text-[#6a0dad] text-6xl mb-4" />
              <h2 className="text-2xl font-semibold text-[#6a0dad] mb-4">Visualizar Notas</h2>
              <p className="text-gray-700 mb-4 text-center">Veja todas as notas recebidas em provas e trabalhos com facilidade.</p>
              <button className="bg-[#6a0dad] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-[#5a0ca3] duration-300">
                Acessar Notas
              </button>
            </div>
          </div>

          {/* Gráficos de Desempenho */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300">
            <div className="flex flex-col items-center">
              <FaChartBar className="text-[#6a0dad] text-6xl mb-4" />
              <h2 className="text-2xl font-semibold text-[#6a0dad] mb-4">Gráficos de Desempenho</h2>
              <p className="text-gray-700 mb-4 text-center">Acompanhe a evolução das suas notas ao longo do tempo.</p>
              <button className="bg-[#6a0dad] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-[#5a0ca3] duration-300">
                Ver Gráficos
              </button>
            </div>
          </div>

          {/* Relatórios */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300">
            <div className="flex flex-col items-center">
              <FaFilePdf className="text-[#6a0dad] text-6xl mb-4" />
              <h2 className="text-2xl font-semibold text-[#6a0dad] mb-4">Relatórios</h2>
              <p className="text-gray-700 mb-4 text-center">Gere um relatório PDF com o desempenho acadêmico em um período específico.</p>
              <button className="bg-[#6a0dad] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-[#5a0ca3] duration-300">
                Gerar Relatório
              </button>
            </div>
          </div>
        </div>

        {/* Gráfico de Desempenho (exemplo) */}
        <div className="mt-12 bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300">
          <h3 className="text-3xl font-semibold text-[#6a0dad] mb-6">Evolução das Notas</h3>
          <div className="h-72 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-xl p-4 flex items-center justify-center text-white">
            <p className="text-lg">Gráfico interativo (exemplo de espaço para gráfico)</p>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="mt-12 text-center">
          <button className="bg-[#6a0dad] text-white px-6 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105 hover:bg-[#5a0ca3] duration-300">
            Gerar Relatório PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
