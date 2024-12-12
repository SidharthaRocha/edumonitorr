import React from 'react';
import { FaDownload, FaVideo, FaFilePdf, FaLink, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const recursosData = [
  { id: 1, tipo: 'PDF', nome: 'Material de Estudo de Matemática', link: '/materiais/matematica.pdf', icone: <FaFilePdf /> },
  { id: 2, tipo: 'Vídeo', nome: 'Aula de Física - Leis de Newton', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icone: <FaVideo /> },
  { id: 3, tipo: 'PDF', nome: 'Guia de Química - Tabela Periódica', link: '/materiais/quimica.pdf', icone: <FaFilePdf /> },
  { id: 4, tipo: 'Link', nome: 'Site de Referências de História', link: 'https://www.historia.com.br', icone: <FaLink /> },
];

const Recursos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-orange-100 to-orange-200 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Botão de Voltar */}
        <div className="mb-6">
          <Link
            to="/Dashboard-aluno"
            className="inline-flex items-center text-orange-600 font-semibold text-lg bg-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaArrowLeft className="mr-2" />
            Voltar
          </Link>
        </div>

        {/* Título da Página */}
        <h1 className="text-5xl font-bold text-orange-600 text-center mb-12 animate__animated animate__fadeInDown">
          Meus Recursos de Estudo
        </h1>

        {/* Listagem de Recursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {recursosData.map((recurso) => (
            <div
              key={recurso.id}
              className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg ease-in-out duration-300"
            >
              {/* Cabeçalho do Card */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-orange-600">{recurso.nome}</h2>
                <div className="text-orange-600 text-3xl">{recurso.icone}</div>
              </div>

              {/* Tipo do Recurso */}
              <p className="text-lg text-gray-600 mb-6">{recurso.tipo}</p>

              {/* Botão de Ação */}
              <a
                href={recurso.link}
                target={recurso.tipo === 'Link' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 ease-in-out">
                  {recurso.tipo === 'PDF'
                    ? 'Baixar PDF'
                    : recurso.tipo === 'Vídeo'
                    ? 'Assistir Vídeo'
                    : 'Acessar Site'}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recursos;
