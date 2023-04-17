/*
chiedere mail all'utente e metterla nella variabile email
creare lista mail accessibili
    SE la email è presente nella lista mail accessibili
     ALLORA stampa messaggio positivo
    FINE SE
*/

const mailRequest = prompt('inserisci email');

const mailArray =['andrealorenzi@gmail.com', 'vincenzo@gmail.com', 'bobovieri@alice.it', 'toniocartonio@libero.it']

console.log("User mail: " + mailRequest)
console.log("Mail array: " + mailArray)

if (mailArray.includes(mailRequest)) {
    console.log('Mail accepted')
    alert('bentornato')
} else{
    console.log('Mail not accepted');
    alert('email non valida')
}