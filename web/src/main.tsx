import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { isEnvBrowser } from './utils/misc';
import LocaleProvider from './providers/LocaleProvider';
import ConfigProvider from './providers/ConfigProvider';
import ErrorBoundary from './providers/errorBoundary';

library.add(fas as IconPack, far as IconPack, fab as IconPack);

if (isEnvBrowser()) {
  const root = document.getElementById('root');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://r2.fivemanage.com/SYRx3cyrEwopShAM4Qm5t/images/Screenshot_2024-07-17_125405.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <LocaleProvider>
      <ConfigProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ConfigProvider>
    </LocaleProvider>
  </StrictMode>
);
