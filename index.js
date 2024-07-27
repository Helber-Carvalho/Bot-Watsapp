// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'Bot Marcenaria' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  function start(client) {
    client.onMessage((message) => {
      if (message.body === 'Bom dia' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'aoa, quem ousa incomodar meu dia, verme insolente, fala logo que ce que.')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      } else if (message.body === 'Oi' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Oi, tudo bem?')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      } else if (message.body === 'Boa noite' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Boa noite, durma bem!')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        }
          else if (message.body && message.isGroupMsg === false) {
            client
              .sendText(message.from, 'no momento estou longe do celular, aguarde!')
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
              });
      } 
    });
  }