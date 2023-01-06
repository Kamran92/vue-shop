export default <T>(callback: (value: T) => Promise<void>, delay = 1000) => {
  let timeout: number;
  return (value: Parameters<typeof callback>[0]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(value), delay);
  };
};
