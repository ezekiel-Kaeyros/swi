import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

interface OnlineStatusContextType {
  isOnline: boolean;
}

const OnlineStatusContext = createContext<OnlineStatusContextType>({
  isOnline: false,
});

export const useOnlineStatus = () => useContext(OnlineStatusContext);

interface statusProviderProps {
  children: ReactNode;
}
export const OnlineStatusProvider: React.FC<statusProviderProps> = ({
  children,
}) => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={{ isOnline }}>
      {children}
    </OnlineStatusContext.Provider>
  );
};
