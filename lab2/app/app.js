import { generateNickname, animateNicknames } from "../nickname-lib";

async function runDemo() {
    const generator = generateNickname();
    const nicknamesArray = [];

    for (let i = 0; i < 10; i++) {
        nicknamesArray.push(generator.next().value);
    }
    
    await animateNicknames(nicknamesArray, 200);
}

runDemo();