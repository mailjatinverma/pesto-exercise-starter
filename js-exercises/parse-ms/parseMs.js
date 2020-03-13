function parseMs(ms) {
  // ToDo: reduce magic numbers. use functions/constants.
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const hours = Math.floor((ms - (days * 24 * 60 * 60 * 1000)) / 3600000);
  const minutes = Math.floor((ms - (hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000)) / 60000);
  const seconds = Math.floor((ms - (minutes * 60 * 1000 + hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000)) / 1000);
  const milliseconds = ((ms - (seconds * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000)) / 1);
  const microseconds = ((ms - (milliseconds + seconds * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000)) * 1000) / 1;
  const nanoseconds = (ms - (microseconds * (10 ** 3)+milliseconds + seconds * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000)) / 10 ** 6;

  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'milliseconds': milliseconds,
    'microseconds': microseconds,
    'nanoseconds': nanoseconds,
  };
};

export { parseMs };
