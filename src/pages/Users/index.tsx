import React, { useState } from 'react';
import { Building2, Eye, EyeOff, User, Search, Phone, Mail, Lock } from 'lucide-react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  FormCard,
  FormHeader,
  FormContent,
  CompanySelector,
  CompanyDropdown,
  SearchInput,
  CompanyList,
  CompanyActions,
  FormFooter,
} from './styles';
import { UserList } from './UserList/userList';

export const Users = () => {
  
  return (
    <Container>
      <UserList/>
    </Container>

  );
};