import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importando Link do react-router-dom


const App = () => {
  useEffect(() => {
    const pageContent = document.getElementById("pageContent");
    pageContent.classList.add("animate__animated", "animate__fadeIn");
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div
        id="pageContent"
        className="text-center p-8 md:p-12 max-w-4xl bg-white shadow-xl rounded-xl space-y-8"
      >
        {/* Imagem de destaque */}
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/800x400?text=Imagem+de+Destaque"
            alt="Imagem ilustrativa"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Título da página */}
        <h1 className="text-5xl font-bold text-purple-900 mb-4 animate__animated animate__fadeIn">
          Acompanhe o Desenvolvimento do Seu Filho
        </h1>

        {/* Subtítulo explicativo */}
        <h2 className="text-xl text-gray-700 mb-6">
          Com nossa plataforma de monitoria online, os pais podem acompanhar o progresso escolar dos alunos em tempo real.
        </h2>

        {/* Corpo do texto com explicações */}
        <div className="text-lg text-gray-600 space-y-4">
          <p>
            A educação dos filhos é uma das maiores preocupações dos pais, e, com a tecnologia, ficou mais fácil acompanhar o desenvolvimento acadêmico. Nossa plataforma oferece uma solução prática e eficiente, permitindo que você acompanhe o progresso escolar de seu filho diretamente do seu dispositivo, de forma rápida e intuitiva.
          </p>

          <p>
            Através de relatórios em tempo real, você pode observar o desempenho nas avaliações, as atividades realizadas, e até mesmo interagir com os professores para garantir que seu filho esteja recebendo a atenção necessária para seu crescimento.
          </p>

          <p>
            Além disso, nossa plataforma permite que os pais recebam notificações instantâneas sobre qualquer atualização relevante, seja uma nova tarefa, uma nota ou uma observação do professor. A comunicação eficiente entre pais e escola é essencial para o sucesso educacional, e estamos aqui para facilitar esse processo.
          </p>

          <p>
            Se você deseja ter uma visão clara do desenvolvimento escolar do seu filho e participar ativamente de sua trajetória educacional, nossa plataforma é a solução ideal para você.
          </p>
        </div>

        {/* Benefícios adicionais */}
        <div className="mt-8 bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-purple-900 mb-4">Benefícios da Plataforma</h3>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>🚀 Acompanhamento em tempo real do desempenho escolar.</li>
            <li>🔔 Notificações instantâneas sobre tarefas e avaliações.</li>
            <li>📊 Relatórios detalhados sobre o progresso de cada aluno.</li>
            <li>💬 Comunicação direta com os professores.</li>
            <li>👨‍👩‍👧‍👦 Acompanhamento da evolução ao longo do ano letivo.</li>
          </ul>
        </div>

        {/* Botão de Voltar */}
        <Link
          to="/"  // Ou para qualquer página específica onde deseja voltar
          className="mt-6 px-6 py-3 bg-purple-700 text-white font-bold rounded-lg shadow-md hover:bg-purple-600 transition duration-200"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default App;
