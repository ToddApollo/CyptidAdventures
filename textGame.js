console.log("Connected");

const enter = "Please enter 1 or 2 for your answer";
const gameOver = "Sorry GAME OVER!"
const start = `Welcome to the Cryptid Text Adventure Game. Click 'OK' to start the game.`
const q1 = `You are walking through the woods in Virginia, searching for the infamous mothman but have not seen him yet. Should you...
1. Walk deeper into the forest and continue your search?
OR
2. Decide to head back into the town and get some hot chocolate.
${enter}`
const gameOver1 = `You never see Mothman. You continue back to your lonely boring life with a significant lack of Mothman. ${gameOver}`
const q2 = `When you start to head deeper into the woods you see something rustling behind a tree. Do you...
1. Approach it quietly and slowly to see if it's Mothman?
OR
2. Throw a rock at it because it startled you?
${enter}`
const gameOver2 = `You hear "Ow!" and then a thud. You approach and realize it was another person who was looking for mothman. The large rock killed them with blunt force trauma. You're charged with murder and go to jail for 30 years. ${gameOver}`
const q3 = `It was just another person looking for mothman. They also say they haven't found him and they decide to go home. You on the other hand decide to carry on. So you walk around to look for Mothman and You Spot Him down by the river! Should you...
1. Call to let the other person know you found him
OR
2. Hide and wait to see where he goes
${enter}`
const gameOver3 = `Mothman hears you, immediately flies at you, digs its claws into your shoulder and throws you into the river ${gameOver}`
const q4 = `You see that Mothman perches by the river, he appears to be washing off some berries and shiny rocks Should you...
1. Offer him a shiny crystal you brought with you as an offering.
OR
2. Offer him some bologna? He would like that right?
${enter}`
const gameOver4 = `He hisses and scratches your face. You black out and wake up the next morning in the river. ${gameOver}`
const q5 = `Mothman seems pleased with the offering of a shiny rock and he gives you some berries in return. Should you...
1. Eat the berries he has given you?
OR
2. Politely decline and offer him half of your panini.
${enter}`
const gameOver5 = `You eat the berries and they were deady nightshade... Turns out Mothman isn't effected by poison, but you are. ${gameOver}`
const win = `Mothman politely declines your panini but pats the spot beside him as he eats his nightshade. Congratulations! You are now having a riverside, midnight picnic with Mothman!`

let userInput;

alert(start);

userInput = prompt(q1);
console.log(userInput);

if (userInput == 1){
   userInput = prompt(q2);
   if (userInput == 1){
       userInput = prompt(q3);
       if (userInput == 2){
           userInput = prompt(q4);
           if (userInput == 1){
               userInput = prompt(q5);
               if (userInput == 2){
                   alert(win)
               } else {
                   alert(gameOver5)
               }
           } else {
               alert(gameOver4)
           }
       } else {
           alert(gameOver3)
       }
   } else {
       alert(gameOver2)
   }
} else {
   alert(gameOver1)
}








