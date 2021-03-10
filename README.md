<h1 align="center">Welcome to easybank-landing-page 👋</h1>

## Intro


This is a challenge from Frontendmentor @ https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN.

A demo can be found here: https://optimistic-meninsky-552f27.netlify.app/

Purpose of this project was to see if I could put a UI together from a design. I also wanted to have a bit of practice with the React workflow, play around with Styled-Components, and practice a mobile first development. 

I’m happy with how this project turned out especially the modal in mobile view. The modal was a bit challenging because I wanted it to fade in and out. However, because we cannot animate the display property that was out of the question, and simply using opacity meant that the modal is invisible but can still be interacted with. So, what I did was hide the modal out of view to the side, then create a key-frame animation that slides it back into its proper place, and then fades in – creating the illusion it fades in and out. 

I didn’t have a Figma file to grab the exact dimensions from, so I had to eyeball it, and I wasn’t too fussed if it wasn’t perfect as it’s only a challenge. Also, there was no focus on accessiblity and little optimization for screen sizes (none for middle screen sizes).

![Alt Text](https://i.gyazo.com/ce09976fcc605b9b4c5a6981271cd59b.gif)![Alt Text](https://i.gyazo.com/8aeae1504298c0624a933788f851f8b8.gif)
![Alt Text](https://i.gyazo.com/b07c053e4f4ea2b2d062fd16349f838e.gif)


## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
