const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function animateNicknames(nicknames, delay) {
    for (let i = 0; i < nicknames.length; i++) {
        let CurrentNickname = nicknames[i];
        console.log(CurrentNickname);
        await sleep(delay);
    }
}