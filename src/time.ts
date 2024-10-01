export type TimeConfig = {
  hours?: number,
  minutes?: number,
  seconds?: number,
  milliseconds?: number,
};

export const millisecond = 1;
export const second = millisecond * 1000;
export const minute = second * 60;
export const hour = minute * 60;

export const time = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0
}: TimeConfig) => {
  return (
    milliseconds
    + (seconds * second)
    + (minutes * minute)
    + (hours * hour)
  );
}