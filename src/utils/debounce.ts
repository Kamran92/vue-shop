type TCallback = <T>(value: T) => Promise<void>;

export default (callback: TCallback, delay = 1000) => {
  let timeout: number;
  return <T>(value: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(value), delay);
  };
};
