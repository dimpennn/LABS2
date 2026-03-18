# Lab 2: Nickname Generator Library

This repository contains a custom Node.js library for generating and iterating over nicknames (`nickname-lib`) and an example application (`example-app`) demonstrating its usage.

## Usage Examples

Below are the examples showing how to use the functionalities provided by the library. All examples can be run via the `example-app`.

### 1. Using the Nickname Generator
The `generateNickname` function returns a generator object that yields random strings (Adjective + Noun + #ID).

```javascript
import { generateNickname } from 'nickname-lib';

const generator = generateNickname();

// Generate a single nickname
console.log(generator.next().value); // Example output: "SwiftLion#1234"
console.log(generator.next().value); // Example output: "BraveEagle#5678"