import React from 'react'

import { Container, NameText, Progress, UserPicture} from './styles';
import { IUserInfo } from './types';

const UserInfo = ({nome,image, percentual}: IUserInfo) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }