"use client";
import { useState, useEffect, FC, useCallback } from "react";
import dayjs from "dayjs";
import "./styles.css";

// Definir el componente CountdownTimer
export interface CountdownTimerI {
  targetDate: string;
}

const CountdownTimer: FC<CountdownTimerI> = ({ targetDate }) => {
  // Estado para los días, horas, minutos y segundos restantes
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // Estado para controlar si la fecha ya ha pasado
  const [isPast, setIsPast] = useState(false);

  // Función para calcular el tiempo restante
  const calculateTimeLeft = useCallback(() => {
    const now = dayjs(); // Fecha actual
    const target = dayjs(targetDate); // Fecha objetivo

    // Diferencia en milisegundos entre la fecha objetivo y la fecha actual
    const difference = target.diff(now);

    if (difference > 0) {
      // Calcular días, horas, minutos y segundos restantes
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      // Actualizar el estado
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      // Si se ha alcanzado la fecha objetivo, establecer todos los valores en 0
      setIsPast(true);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [targetDate]);

  useEffect(() => {
    // Actualizar el temporizador cada segundo
    const timerId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearInterval(timerId);
  }, [targetDate, calculateTimeLeft]);

  return isPast ? (
    <></>
  ) : (
    <div className='custom-countdown'>
      <div>
        <span>{timeLeft.days}</span>d
      </div>
      <div>
        <span>{timeLeft.hours}</span>h
      </div>
      <div>
        <span>{timeLeft.minutes}</span>m
      </div>
      <div>
        <span>{timeLeft.seconds}</span>s
      </div>
    </div>
  );
};

export default CountdownTimer;
