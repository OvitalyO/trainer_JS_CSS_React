import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
   // </React.StrictMode>
)
//StrictMod вызывает эквивалентные рендеры, чтобы помочь разработчикам избегать сайт эффектов и внутри хуков.
//зачем StrictMode нужен: указывает на старые API, которыми уже не пользуются
