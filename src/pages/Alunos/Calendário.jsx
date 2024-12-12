import React, { useState } from 'react';
import dayjs from 'dayjs'; // Para lidar com datas
import { Transition } from '@headlessui/react'; // Para animações suaves
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Data selecionada
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Função para gerar as semanas do mês
  const generateCalendar = (month) => {
    const startOfMonth = month.startOf('month');
    const endOfMonth = month.endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');

    const daysInCalendar = [];
    let currentDay = startOfWeek;

    while (currentDay.isBefore(endOfWeek)) {
      daysInCalendar.push(currentDay);
      currentDay = currentDay.add(1, 'day');
    }

    return daysInCalendar;
  };

  // Exemplo de evento ou tarefa
  const events = [
    { date: '2024-11-05', title: 'Reunião com equipe' },
    { date: '2024-11-10', title: 'Entrega de projeto' },
    { date: '2024-11-15', title: 'Análise de código' },
  ];

  // Filtra eventos para o mês atual
  const currentMonthEvents = events.filter((event) =>
    dayjs(event.date).isSame(selectedDate, 'month')
  );

  const daysInCalendar = generateCalendar(selectedDate);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-6">
      {/* Botão de Voltar */}
      <div className="mb-6 w-full max-w-md">
        <Link
          to="/Dashboard-aluno"
          className="inline-flex items-center text-indigo-700 font-semibold text-lg bg-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Voltar
        </Link>
      </div>

      {/* Calendário */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
        {/* Cabeçalho do Calendário */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setSelectedDate(selectedDate.subtract(1, 'month'))}
            className="text-lg text-gray-700 hover:text-indigo-700 transition-transform transform hover:scale-105"
          >
            ←
          </button>
          <h2 className="text-2xl font-bold text-indigo-800">
            {selectedDate.format('MMMM YYYY')}
          </h2>
          <button
            onClick={() => setSelectedDate(selectedDate.add(1, 'month'))}
            className="text-lg text-gray-700 hover:text-indigo-700 transition-transform transform hover:scale-105"
          >
            →
          </button>
        </div>

        {/* Dias da Semana */}
        <div className="grid grid-cols-7 gap-4 text-center text-indigo-600 font-medium">
          {daysOfWeek.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>

        {/* Dias do Calendário */}
        <div className="grid grid-cols-7 gap-2 mt-4">
          {daysInCalendar.map((day, index) => {
            const isToday = day.isSame(dayjs(), 'day');
            const isSelected = day.isSame(selectedDate, 'day');
            const eventForDay = currentMonthEvents.find((event) =>
              day.isSame(event.date, 'day')
            );

            return (
              <Transition
                key={index}
                show={true}
                enter="transition-all duration-300 ease-in"
                leave="transition-all duration-300 ease-out"
              >
                <div
                  className={`relative p-4 rounded-lg text-center cursor-pointer text-sm font-medium transition-all duration-300 ${
                    isToday ? 'bg-indigo-300 text-white' : 'bg-gray-100'
                  } ${isSelected ? 'ring-2 ring-indigo-500' : ''} hover:bg-indigo-200`}
                  onClick={() => setSelectedDate(day)}
                >
                  <span>{day.date()}</span>
                  {eventForDay && (
                    <div
                      className="absolute top-2 right-2 bg-indigo-500 text-white text-xs rounded-full px-2 py-1"
                      title={eventForDay.title}
                    >
                      Evento
                    </div>
                  )}
                </div>
              </Transition>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
