import React from 'react';

import { Container, NameText, Progress, UserPicture } from './styles';

const UserInfo = ({ nome, image, percentual }) => {
    return (
        <Container>
            <UserPicture src={image} alt={`Foto de ${nome}`} />
            <div>
                <NameText>{nome}</NameText>
                <Progress
                    percentual={percentual}
                    role="progressbar"
                    aria-valuenow={percentual}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Desempenho de ${nome}`}
                />
            </div>
        </Container>
    );
};

export { UserInfo };
