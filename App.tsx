import * as React from 'react';
import './style.css';

import i18n from './i18n';

i18n.changeLanguage('en');

export default function App() {
  return (
    <div>
      <h1>{i18n.t('hello_world').toString()}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
