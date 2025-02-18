const btnEl = document.querySelector('.btn');
const emojiNameEl = document.querySelector('.emoji-name');

let emoji = [];

async function getEmoji() {

    // use "emoji-api.com" website for api for emoji
    let response = await fetch("https://emoji-api.com/emojis?access_key=cee7c0e6f3e2bb23985badee597ab2b6cfc9341c");

    
    
    data = await response.json();

    // console.log(data);

    for (let i=0; i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName.slice(5,data[i].unicodeName.length),
        });
    }
    
};

getEmoji();

console.log(emoji);


btnEl.addEventListener("click", () =>{
    const randomNum = Math.random();
    const randomEmojiDetail = emoji[Math.floor(randomNum*emoji.length)]

    btnEl.innerText =  randomEmojiDetail.emojiName;
    emojiNameEl.innerText = randomEmojiDetail.emojiCode;
});