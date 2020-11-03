import React from 'react';

import * as S from './styled';

const Newsletter = ( ) => {
    return (
        <S.Newsletter id="contato">
            <h2>Entre em contato</h2>
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" placeholder="Nome" name="name" />
                <input type="email" placeholder="Email*" name="email" required/>
                <textarea name="message" placeholder="Digite a mensagem aqui*" required></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </S.Newsletter>
    );
}

export default Newsletter;