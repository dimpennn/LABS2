const adjectives = ["Swift", "Brave", "Clever", "Mighty", "Sly", "Noble", "Fierce", "Gentle"];
const nouns = ["Lion", "Eagle", "Shark", "Wolf", "Panther", "Falcon", "Tiger", "Bear"];

export function* generateNickname() {
    while (true) {
        const id = Math.floor(Math.random() * 9999);
        const noun = nouns[Math.floor(Math.random() * (nouns.length))];
        const adjective = adjectives[Math.floor(Math.random() * (adjectives.length))];
        const nickname = adjective + noun + "#" + id;
        yield nickname;
    }
}