# Week 6 Homework

Your assignment for this week is to build a __Channel Changer Application__.  You will create an application containing multiple "channel" buttons that when clicked, displays a random video from that channel.

The number and type of channels is entirely up to you.

For example, your channels could be "UFOs", "Eating Competitions" and "Vintage Screensavers".

### Requirements
- Each channel in your data object must contain a `title` property and a `videoIds` property that contains an array of video IDs.  Please include at least _three_ videos for each channel.
- Use JavaScript to render a button for each channel.  The text inside the button should be the title of the channel.
- Clicking a channel button should load a random video from the selected channel into an iframe embed inside the `#tv` element.  This element starts empty, you must create the iframe and add it to the page.
- Please restyle the elements on this page.  I don't care what it looks like, just as long as it's not black / white / Helvetica in the end. Use the HTML structure that I've provided to start. Feel free to add additional elements if you need them for design or layout purposes.

### Tips
- First you will want to define your channels as objects inside the `channels` array property of the `data` object - I've added some commented code to show you how this can be structured
- Next, you will need to _loop_ over each channel in the array.  You can access this array by using dot notation - `data.channels`.  To figure out how to loop over each each item in the array, Google "Javascript array forEach".
- For each channel, you will need to:
  1. Create a button element (hint: use `document.createElement`)
  2. Set the text of the button
  3. Append the button to the page.
  4. Add an event listener to the button to handle the click event
- The function that gets called on button click needs to:
  1. Know _which_ channel button was clicked
  2. Use that channel to pull a random video from the associated array of videoId (remember: Arrays are zero indexed and `Math.random()` gives you a number between `0` and `1`)
  3. Update the page with an iframe that loads the random video from YouTube using their "embed" iframe code.


### Get Started

- [Fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) by clicking the "fork" button in the top right.  This will create a new repository in your GitHub account.
- Add the repository to your computer by clicking the green "Code" button and selecting "Open with GitHub Desktop"
- Specify where to save the project on your computer
- Start working!

### Complete Your Assignment

- Commit all of your code
- Enable GitHub Pages for your repository to get a link where your project is viewable
- Submit this link directly to me via e-mail (bowermas@newschool.edu) before class on Friday
- 🏁 All Done 🏁