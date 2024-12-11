import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    const pageContent = document.getElementById("pageContent");
    pageContent.classList.add("animate__animated", "animate__fadeIn");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-600 text-white">
      {/* Cabeçalho */}
      <header className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Acompanhe o Desenvolvimento do Seu Filho
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Com nossa plataforma de monitoria online, você tem tudo que precisa para acompanhar o progresso escolar em tempo real.
        </p>
      </header>

      {/* Conteúdo principal */}
      <main
        id="pageContent"
        className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mx-4 lg:mx-auto max-w-6xl space-y-12"
      >
        {/* Imagem destacada */}
        <div className="relative w-full rounded-3xl overflow-hidden">
          <img
            src="https://via.placeholder.com/1200x500?text=Educação+e+Tecnologia"
            alt="Imagem ilustrativa"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
        </div>

        {/* Benefícios */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
            Benefícios da Plataforma
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
            <li className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-purple-700 text-3xl">🚀</span>
              <span>Acompanhamento em tempo real do desempenho escolar.</span>
            </li>
            <li className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-purple-700 text-3xl">🔔</span>
              <span>Notificações instantâneas sobre tarefas e avaliações.</span>
            </li>
            <li className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-purple-700 text-3xl">📊</span>
              <span>Relatórios detalhados sobre o progresso de cada aluno.</span>
            </li>
            <li className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-purple-700 text-3xl">💬</span>
              <span>Comunicação direta com os professores.</span>
            </li>
            <li className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-purple-700 text-3xl">👨‍👩‍👧‍👦</span>
              <span>Acompanhamento da evolução ao longo do ano letivo.</span>
            </li>
            <li className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-purple-700 text-3xl">🌟</span>
              <span>Facilidade no acompanhamento de metas escolares.</span>
            </li>
          </ul>
        </section>

        {/* Texto explicativo */}
        <section className="space-y-6 text-gray-700">
          <p className="text-lg">
            A educação dos filhos é uma prioridade, e com a nossa plataforma, você pode acompanhar o desempenho escolar em tempo real, garantindo o apoio necessário para que eles alcancem seu potencial máximo.
          </p>
          <p className="text-lg">
            Com relatórios detalhados e comunicação direta com professores, você tem controle sobre a evolução acadêmica de seu filho, ajudando-o em sua jornada educacional.
          </p>
        </section>

        {/* Botão de voltar */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
          >
            Voltar
          </Link>
        </div>
      </main>
    </div>
  );
};

export default App;
