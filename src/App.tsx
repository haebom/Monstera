// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForexView from './widgets/ForexView';
import StockView from './widgets/StockView';
import CalendarView from './widgets/CalendarView';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        margin: 0,
        padding: 0,
        height: '100vh',
        overflow: 'hidden'
      }}>
        <Routes>
          <Route path="/forex" element={<ForexView />} />
          <Route path="/stock" element={<StockView />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/" element={<StockView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;