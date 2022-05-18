# An Ultimate General Knowledge Quiz - Project Two

## About
This is my creation of a General Knowledge quiz. The aim of the game is for the player to attempt to answer the questions 
correctly about a variety of subjects in order to get a high score. 

### Why this project?
I built this game for an Interactive Frontend Development project. The purpose was to create a game using HTML, CSS & JavaScript,
however mainly focusing on JavaScript to develop functionality. 
I chose to build a quiz rather than any other game because it enabled me to improve areas of JavaScript that I didn't understand 
such as processing data. The project has definitely helped me learn a lot and strengthen my knowledge of JavaScript.

## UX

### User Stories 
As a player I want to:
- Be able to be able to read how to play, before and whilst playing the game
- Be able to listen to music and turn if off, before and whilst playing the game.
- Have the choice of difficulty
  - Playing on 'easy' mode means one has more time (one minute) to answer the question. 
  - Playing on 'hard' mode means one has less time (30 seconds) to answer the question.
- Be able to return home and stop the game. 
- Be able to pause and play the game. 
- Have four options to pick from. 
- After choosing an answer, be told which answer is correct by the answer turning green & be told which answer is incorrect by the answer turning red. 
- Move onto the next question if I can't answer. 
- Be told my score at the end of the game. 

### Research
Before starting to design my project, I looked at lots of versions of quizes to give me a good understanding of other designs 
and the range of functions they were using, helping me to start plan my game. 

One of my main focuses was to create a highly responsive and intuitive user interface to ensure a seamless experience for users. 

### Style Rationale 
The majority of quizes I looked at online had quite basic designs and layouts, and all the questions were on one 
page, therefore I decided that my game would be more responsive and look cleaner if each question had an individual page.

I chose a bright colour scheme, a basic background and engaging and creative fonts to attract users to play the game and
to make the game more enjoyable. 

### Wireframes 
I created my designs using Abode XD, I displayed two different aspects; one from a laptop and one from a phone, to ensure my webpage would be responsive from a variety of technology.

![iPhone 12, 12 Pro – 1](https://user-images.githubusercontent.com/82885562/169028844-91fe63e6-dfec-43d1-a41c-839f0b68acbf.jpg)

![Artboard – 1](https://user-images.githubusercontent.com/82885562/169028861-bd00381c-a59b-4ade-87e5-f676f1cc7e83.jpg)

![Artboard – 2](https://user-images.githubusercontent.com/82885562/169028877-be98ac06-bd88-446c-bc07-f053b7b6b3ef.jpg)

![iPhone XR, XS Max, 11 – 1](https://user-images.githubusercontent.com/82885562/169029225-bbf2ee57-24ac-4018-a509-89c3149e6584.jpg)
![iPhone XR, XS Max, 11 – 2](https://user-images.githubusercontent.com/82885562/169029295-d71670e8-42b5-47b9-b03d-0fc187a1d689.jpg)
![iPhone X, XS, 11 Pro – 1](https://user-images.githubusercontent.com/82885562/169028931-db015e9d-0a1a-49ac-8331-4235e3d3b86a.jpg)

## Features

### Functionality
- The user is required to choose whether to turn volume on or off. 
- To understand how to play the game, the user should click on the button and read instructions. 
- The user should then choose whether to play on 'easy' (they need to answer the question in one minute) or 'hard' mode ((they need to answer the question in 30 seconds). 
- When the game starts, the user should click on the answer they believe is correct before the timer runs out. They should not be able to move onto the next question if they haven't chosen an answer and the timer is running.
- When their answer has been chosen, the button will either turn green or red depending on whether the answer is correct or incorrect. If it is incorrect then the correct button will turn green as well. The timer will stop. 
- The user is then required to click on the next button to move onto the next question. 
- If the user fails to answer the question in time, the game will automatically move onto the next question. 
- Whilst the game is being played, the user can turn the volume on and off and play and pause the game. 
- They can also read the instructions which explain how to play and decide whether to end the game, when the modal appear the timer will be paused and when they return to the game it will continue.
- When the user gets to the end of the game their results will be shown and then they can return to the home page by clicking on the home button. 

### Existing Features
#### Home Page
- **Title** - Main title 'Ultimate' fades in. 
- **Volume Button** - Users can turn on and off the music by clicking the volume icon. The icon will change depending on the sound.
- **Play Easy Mode** - By clicking on the Play Easy button the user is choosing the easier way to play the game as well as starting the game. The user will have 1 minute to answer each question. 
- **Play Hard Mode** - By clicking on the Play Hard button the user is choosing the harder way to play the game as well as starting the game. The user will have 30 seconds to answer each question. 
- **'How to Play' Button** - When the user clicks the 'How to Play' Button, a modal will appear explaining the instructions of how to play the game. 

#### Game Page
- **Header Buttons** 
  - Volume button - the user can turn on and off the volume
  - 'How to Play' button with '?' icon - the user can read the instructions of how to play the game
  - Pause & Play button - the user can toggle the pause and play button to stop and start the game. The icon will change depending. 
  - Home button - when the home button is clicked a modal will appear confirming whether the user wants to go home or cancel and go back to the game. 
- **Timer** - the timer goes for either 30 seconds or 1 minute depending on which mode the user chose, the user must answer the question in the time, otherwise the game will automatically move onto the next question. The timer will be stopped when an answer is chosen. 
- **Answer buttons** - there are four answer buttons, the user must chose one to answer the question. If their answer is correct the button will turn green. But if their answer is incorrect the button will turn red and the correct button will also turn green. The buttons will be disabled once one has been clicked to prevent two answers being chosen. 
- **Next button** - the user can use the next button to move onto the next question. The button will only work when an answer has been selected. 

#### Score Page
- **Score Text** - the user will be shown their overall final score. 
- **Home Button** - the user must press the home button in order to go home and restart the game. 

#### Footer
- **Footer** - the footer displays that I am the owner of the website. 

### Features Left to Implement 
- **Progress Bar** - I would like to introduce a progress bar to inform the user how far through the questions they are. 
- **Previous Scores** - When I have the skills, I would like to store previous user's scores, so they can compare their previous scores to their present score and keep track of their progress. 
- **Online Play** - I would like to introduce an online mode where they can compete against other users online.

## Technologies Used
- [**Abode XD**](https://www.adobe.com/uk/products/xd.html)
    - I used Abode XD to make designs of my website so I had a template for building tha actual site.
- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - My project uses HTML5 to create the basic elements and content of my website.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - My project uses CSS3 to add custom styles to the website's elements and content.
- [**Bootstrap**](https://getbootstrap.com)
    - I used Bootstrap v5.0 to add a responsive grid system, and to use the prebuilt components, JavaScript plugins and Bootstrap styles, and I edited them for a desired effect. 
- [**JavaScript**](https://www.javascript.com/)
    - I used JavaScript to add functionality and interactivity to my game. This is the main technology used.
- [**Tobias Ahlin**](https://tobiasahlin.com/moving-letters/)
    - The project uses Tobias Ahlian's JavaScript template to move letters. 
-[**Abode**](https://fonts.adobe.com)
  - I used Abode Fonts to style my text.
- [**Icons8**](https://icons8.com)
    - I used Icons8 to obtain all my icons.
- [**Visual Studio Code**](https://code.visualstudio.com)
    - I used Visual Studio Code to write the code for my project. 

### Version Control
- [**Git**](https://git-scm.com/)
    - I've used Git as a version control system to regularly add and commit changes made to my project.
- [**GitHub**](https://github.com/)
    - I've used GitHub as a remote repository to push and store changes to my project. Also using GitHub pages to deploy my website in a live environment.

## Testing 
### Testing User Stories

### Automated Testing

### Responsive Testing 

### Additional Testing 

### HTML & CSS Testing 
- I used the W3C HTML Validator tool and the W3C CSS Validator tool to validate both my HTML and CSS Code.

### Interesting Bugs or Problems 
- **Sound**
- **Timer**
- **Receiving score**

## Deployment
I used GitHub Pages as a hosting platform for my project. I did the following steps to deploy my website to GitHub Pages: 

1. Opened a new terminal window in my Visual Studio Code workspace. 
2. Used the `git init` command to initialise the Git. 
3. Used the `git add .` command to add all files to Git. 
4. Used the `git commit -m "Initial Commit"` command to commit all the files to Git.
5. Created a new repository called 'harriet-project' in GitHub. 
6. Used the `git remote add origin`[https://harrietdarley.github.io/harriet-project.git](https://github.com/harrietdarley/project-two-repo) command to add the remote origin to my local Git repository. 
7. Used the `git push -u origin master` command and entered my GitHub username and password to push the files to GitHub. 
8. In GitHub, I selected the 'master branch' option in 'Settings' on my repository page under the 'GitHub Pages' selection.

### Respository Link 
Click the link below to view my project in the live environment. 

**ADD**

### Running Code Locally
Users can run my code locally by downloading a local copy of my code to their desktop by going to my GitHub repository.

## Credits
### Content
- All of the code is written by me. 
- Apart from the code to add functionality to the title text - [**Tobias Ahlin**](https://tobiasahlin.com/moving-letters/)

### Media 
- **Audio** - The music is from [**bensound.com**](https://www.bensound.com/royalty-free-music/track/all-that-chill-hop)

### Acknowledgements 
- I received guidance from my mentor, Sunny Hebbar. He helped me with the a few functionality problems I had with my website. 

### Disclaimer 
- This website is for educational purposes.
