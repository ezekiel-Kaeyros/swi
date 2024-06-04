import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertMinutesToHoursAndMinutes(minutes: number) {
  if (isNaN(minutes) || minutes < 0) {
    return 'Invalid input';
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedHours = hours?.toString().padStart(2, '0');
  const formattedMinutes = remainingMinutes?.toString()?.padStart(2, '0');

  return `${formattedHours}h:${formattedMinutes}min`;
}

function parseTime(timeStr: string): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  return { hours, minutes, seconds };
}

function timeToSeconds(
  hours: number,
  minutes: number,
  seconds: number
): number {
  return hours * 3600 + minutes * 60 + seconds;
}

function secondsToTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export function countUp(timeStr: string): number {
  let { hours, minutes, seconds } = parseTime(timeStr);
  let totalSeconds = timeToSeconds(hours, minutes, seconds);

  setInterval(() => {
    totalSeconds += 1;
    console.log(secondsToTime(totalSeconds));
  }, 1000);

  return totalSeconds;
}
