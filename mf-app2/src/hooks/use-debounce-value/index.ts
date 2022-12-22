import { useEffect, useState } from 'react';

export function useDebounceValue<T = any>(value: T, wait: number) {
  const [_value, setValue] = useState<T>(value);

  useEffect(() => {
    setTimeout(() => {
      return setValue(value);
    }, wait);
  }, [value, wait]);

  return [_value];
}
