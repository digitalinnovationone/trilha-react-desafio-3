import React from 'react';
import { Controller } from 'react-hook-form';

import { InputContainer, InputText, IconContainer } from './styles';

const Input = ({ leftIcon, name, control, rules, ...rest }) => {
    return (
        <InputContainer>
            {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => <InputText {...field} {...rest} />}
            />
        </InputContainer>
    );
};

export { Input };
