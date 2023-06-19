const names = ["Guadalupe", "Ollie", "Aki"]
//const event = 'surprise'

function writeCards(names, event){
    const newArray= [];
    for (let i = 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        newArray.push(message);
    }
    return newArray;
}
console.log(writeCards(names, 'surprise'))

function countDown(){
    let countDown= 0
    while(countDown < 11){
        console.log(countDown++)
    }
}