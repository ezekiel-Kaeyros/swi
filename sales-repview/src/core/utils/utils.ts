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
