import React, { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { InputWrapper, Label, InputContainer, StyledInput, IconWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
}

export const Input: React.FC<InputProps> = ({ label, icon: Icon, ...props }) => {
  return (
    <InputWrapper>
      <Label htmlFor={props.id}>{label}</Label>
      <InputContainer>
        <IconWrapper>
          <Icon size={20} />
        </IconWrapper>
        <StyledInput {...props} />
      </InputContainer>
    </InputWrapper>
  );
};