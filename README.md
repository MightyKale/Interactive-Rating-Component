# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [My Questions](#my-questions)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screeshot](screenshot.jpg)


### Links

- Solution URL: [https://github.com/MightyKale/Interactive-Rating-Component](https://github.com/MightyKale/Interactive-Rating-Component)
- Live Site URL: [https://mightykale.github.io/Interactive-Rating-Component/](https://mightykale.github.io/Interactive-Rating-Component/)

## My process



### Built with

- HTML, CSS and Javascript

### My Questions

The building process is similar to my previous projects. First I started with basic HTML structures (both the scoring page and the thank you page), then I started working on the CSS. I had some trouble figuring out the gradient background. It wasn't the correct color until I set the background to be black in addition to the gradient background image. It still doesn't look exactly the same to me. I struggled a long time with making it responsive, especially the main section (Everything inside of it seems to be quite responsive). For some reason, even when I set both the max-width and width like below, there is no margin when in mobile view. I tried to set the width to a percentage number as well, but still there is no margin.

```
main{
    max-width: 350px;
    width: 85vw;
}
```
Furthermore, I see scrollbars even when in a larger width (800px for instance). Although everything fits, I'm not sure where did that come from.

Another question I had is that I can't seem to align the < p> elements horizontally. They always seems to be a litter higher than they should, so I ended up adding some padding on top to make it look like it's in the center. I'm not sure if there's a way to clear all spacing around the elements so it could be at the absolute center of its parent.


## Author

- Website - [Amy Chu](www.linkedin.com/in/amy-chu-xiaoxiao)
- Frontend Mentor - [@MightyKale](https://www.frontendmentor.io/profile/MightyKale)

