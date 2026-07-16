import { RouterProvider } from 'react-router';
import { router } from './routes';
import { I18nProvider } from './i18n/context';
import { translations } from './i18n/translations';

export default function App() {
  return (
    <I18nProvider translations={translations}>
      <RouterProvider router={router} />
    </I18nProvider>
  );
}
