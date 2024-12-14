import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage/SignupPage';
import TodoPage from './pages/TodoPage';
import { LoadingProvider, ToastProvider } from './contexts';
import Loader from './components/organism/Loader';

const App: React.FC = () => {
    return (
        <PrimeReactProvider>
            <LoadingProvider>
                <ToastProvider>
                    <Loader />
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/login" />}
                            />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route path="/todo" element={<TodoPage />} />
                        </Routes>
                    </Router>
                </ToastProvider>
            </LoadingProvider>
        </PrimeReactProvider>
    );
};

export default App;
