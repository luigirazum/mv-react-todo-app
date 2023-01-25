import React from 'react';
import { createRoot } from 'react-dom/client';

// BrowserRoutes to set routes
import { BrowserRouter as Router } from 'react-router-dom';

// component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
