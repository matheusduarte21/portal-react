
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Consult } from '../pages/Consult';
import { Companies } from '../pages/Companies';
import { Help } from '../pages/Help';
import { Profile } from '../pages/Profile';
import { Statement } from '../pages/Statement';
import { Prospeccao } from '../pages/Prospeccao';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/prospeccao" element={<Prospeccao/>} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/statement" element={<Statement />} />
      </Route>
    </Routes>
  );
};