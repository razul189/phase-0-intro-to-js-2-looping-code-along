// const gifts = ["teddy bear", "drone", "doll"]
// for (let i = 0; i < gifts.length; i++) {
//     console.log (`wrapped ${gifts[i]} and added a bow!`)
//     debugger
// }
// return gifts 
// wrappedGifts(gifts)

const names = ['Guadalupe', 'Ollie', 'Aki']
function writeCards (names){
    let messages = []
    for (let i = 0; i < names.length; i++){
        let  message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        messages.push(message)
    }
    return messages
}

function countDown(num){
    while (num >= 0) {
        console.log(num)
        num-- 
    }
} 

