export function generateUserName(){
    const randomNumber = Math.floor(Math.random()*1001); // gera níumero aleatório entre 0 e 1000
    const userName = 'Fulano'+randomNumber;
    return userName;
}