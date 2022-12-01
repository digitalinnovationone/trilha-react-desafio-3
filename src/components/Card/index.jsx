import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';


import { CardContariner, Content, HasInfo, ImageBackground, PostInfo, UserInfor, UserPicture } from './styles';

const Card = () => {
  return (
    <CardContariner>
      <ImageBackground src="https://mevivu.com/wp-content/uploads/2021/08/html-va-css.jpg"/>
      <Content>
        <UserInfor>
          <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <div>
              <h4>Pablo Henrique</h4>
              <p>Há 8 minutos</p>
          </div>
        </UserInfor>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Ver Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContariner>
  )
}


export { Card }