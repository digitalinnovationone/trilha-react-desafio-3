import React from 'react';

import { ButtonContainer } from './styles';

const Button = ({ title, variant = 'primary', onClick, type = 'button', ...rest }) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick} type={type} {...rest}>
            {title}
        </ButtonContainer>
    );
};

export { Button };
