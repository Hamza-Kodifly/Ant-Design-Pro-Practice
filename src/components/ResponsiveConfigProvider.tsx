import React, { ReactNode, useEffect, useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { SettingDrawer } from '@ant-design/pro-components'; // ✅ ADD THIS
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
interface ResponsiveConfigProviderProps {
  children: ReactNode;
  isDev: boolean;
  settings: Partial<LayoutSettings>;
  onSettingChange: (settings: Partial<LayoutSettings>) => void;
}

export const ResponsiveConfigProvider: React.FC<ResponsiveConfigProviderProps> = ({ children, isDev, settings, onSettingChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1400);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(isMobile)

  const currentAlgorithm = isMobile ? theme.compactAlgorithm : theme.defaultAlgorithm;

  return (
    <ConfigProvider
      theme={{
        algorithm: currentAlgorithm,
      }}
    >
      {children}
      {isDev && (
        <SettingDrawer
          disableUrlParams
          enableDarkTheme
          settings={settings}
          onSettingChange={onSettingChange}
        />
      )}
    </ConfigProvider>
  );
};
