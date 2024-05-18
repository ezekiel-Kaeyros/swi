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

export function calculateTotalTime(data: any) {
  return data?.reduce((totalTime: number, route: any) => {
    const routeTotalTime = route?.pointOfSales?.reduce(
      (sum: number, pos: any) =>
        sum +
        (pos?.tasks || []).reduce(
          (taskSum: any, task: { time: any }) =>
            taskSum + (task?.time || 0),
          0
        ),
      0
    );
    return totalTime + routeTotalTime;
  }, 0);
}

export function calculateTotalTimeFormated(data: any) {
  return data?.reduce((totalTime: number, route: any) => {
    const routeTotalTime = route?.pointOfSales?.reduce(
      (sum: number, pos: any) =>
        sum +
        (pos?.tasks || []).reduce(
          (taskSum: any, task: { time: any }) =>
            taskSum + (task?.time || 0),
          0
        ),
      0
    );
    return convertMinutesToHoursAndMinutes(totalTime + routeTotalTime);
  }, 0);
}
