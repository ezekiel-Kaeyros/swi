import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date; // Optional prop to set a specific target date/time
  initialTime?: string; // Optional prop to set the initial countdown time (defaults to "01:10:03")
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  initialTime = '01:10:03',
}) => {
  const [currentTime, setCurrentTime] = useState(initialTime);
  let intervalId: any;
  useEffect(() => {
    setInterval(() => {
      const parts = currentTime.split(':');
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      const seconds = parseInt(parts[2], 10);

      if (seconds > 0) {
        setCurrentTime(
          `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${(seconds - 1).toString().padStart(2, '0')}`
        );
      } else if (minutes > 0) {
        setCurrentTime(
          `${hours.toString().padStart(2, '0')}:${(minutes - 1)
            .toString()
            .padStart(2, '0')}:59`
        );
      } else if (hours > 0) {
        setCurrentTime(`${(hours - 1).toString().padStart(2, '0')}:59:59`);
      } else {
        clearInterval(intervalId);
        // Handle countdown completion (e.g., display "Finished!")
        setCurrentTime('Finished!');
      }
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentTime]);

  if (targetDate) {
    const targetTime = targetDate.getTime();
    const now = new Date().getTime();
    const difference = Math.floor((targetTime - now) / 1000);

    if (difference > 0) {
      const hours = Math.floor(difference / 3600);
      const minutes = Math.floor((difference % 3600) / 60);
      const seconds = difference % 60;
      setCurrentTime(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    } else {
      clearInterval(intervalId);
      setCurrentTime('Finished!');
    }
  }

  return <div>{currentTime}</div>;
};

export default Countdown;
