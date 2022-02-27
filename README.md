
## Inspiration 💡
If you had to pick one, would you rather lose motor control of your hands or lose sensations of your legs? While it is certainly a hard question, we are surrounded by individuals who suffer from paralysis and cannot move either limb. There are approximately **5.4 million** Americans suffering from paralyzing conditions such as Quadriplegia, Cerebral Palsy, or ALS.

Despite occupying a large proportion of society, paralyzed patients’ everyday problems solved by caretakers and patients often face difficulties in communicating with their Caretaker when they are in the need of help. Tools used by Stephen Hawking for communication work great but are not affordable for the average patient.

We believe that software and hardware can be combined in ways to enable paralyzed patients to gain the same superpowers and agency that rest of us do. Upon thinking, we realized that the interface with which we interact with technology (mainly touch) is incapable of serving the needs of the paralyzed. 

With an aim to invent an interface leveraging the abilities of the paralyzed, we built **Parampower** ✨

![Landing.png](https://i.postimg.cc/cCGv0c6v/hr-logo.png)


## What it does 🤔

Parampower is a system comprising of a web application, which will be used by the paralyzed patient, and a mobile application that is tailored for the needs of the caretaker.

The web application uses highly sensitive Head Tracking Machine Learning algorithms to change the position of the cursor according to the paralyzed patients’ head movements. Our research informed us that a majority of paralyzed patients can and there already exists head-tracking cameras specifically designed for paralyzed patients.

Our web application is feature-rich with functionalities such as:
-  notify the nurse for help
- notify the nurse about a meal
- request to be taken to the restroom
- toggle lights in room
- voice recognition messaging system
- the game Wordle!

Our mobile application is the perfect solution for the caretaker:
- Keep track of patient requests
- Monitor patient vitals

[![what-it-does.png](https://i.postimg.cc/RFYYpgdk/what-it-does.png)](https://postimg.cc/7GgXfMp9)

---

## How we built it ⚙️

- **Tech Stack** :-

[![how-we-made-it.png](https://i.postimg.cc/sxXV7HXb/how-we-made-it.png)](https://postimg.cc/sQkdRc5J)

- **ML Model Architecture** :-

[![ML-Model.png](https://i.postimg.cc/tgYwd0t3/ML-Model.png)](https://postimg.cc/2qN0mKty)

---

# Research 📚
Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are a few of the resources that were helpful to us —

- https://bit.ly/3K33snM
- https://bit.ly/3szyn5D

Credits to Mahmoud Fettal for the Wordle game
- https://github.com/MahmoudFettal/wordle

---

## Inclusion Track
We began this hackathon with a singular aim: make an interface such that paralyzed patients gain the same technology superpowers that the rest of us do.
We are a team of 4 driven to build inclusive technology for the paralyzed.

![Team.png](https://i.postimg.cc/BQShc9Jj/Team.png)
---

## Challenges we are targetting 💪

![Tracks-Target.png](https://i.postimg.cc/XY7YbJ4n/Tracks-Target.png)

## Design 🎨

We were heavily inspired by the revised version of **Iterative** design process, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution & then finally deploy it.

![Double-Diamond](https://i.postimg.cc/bvQV3jHt/doublediamonddesignprocess.png)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Material UI** design. We utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

> **Best Use of Figma by Figma**

Figma has been a critical collaborative tool during our hackathon. The first few steps for this hackathon involved a wireframing session on Figma design file and a backend discussion on Figjam. Both our Mobile app and web app were first designed in Figma and then were written down in code.

![Figma](https://cdn.discordapp.com/attachments/933237009135308860/947504784443854878/unknown.png)

Figma was also critical in the design of our logo, color scheme, typography and several other screens used in our video and submission.

### Best Creative Hack by Meta

When we first approached the problem of redesigning an interface for paralyzed patients, we first thought of eye tracking to control the cursor.
However, we discovered that this approach had two flaws:
- Patient blinking causing issues because of resegmentation
- Recalibration needed everytime user signs in
We had to therefore be creative in our approach to the interface which is why we used reliable head tracking that overcame the aforementioned issues. We believe that we are the first group tackling this problem through head tracking

### Most Magical Hack
Our well optimized head tracking algorithms make the cursor movements extremely responsive. This gives one the feeling that they are controlling the cursor with their mind, making our web app seem like pure magic.

If there had to be an MVP for NeuraLink, Parampower’s prototype would suffice!

### Most Magical Hack

Just to be explicit, to build Parampower we used:
- A fabulous design
- Two applications in the form of a mobile app and a web app-
- Hardware to monitor patient vitals and toggle lights
- Machine Learning for tracking patient’s head and speech recognition

We threw every area of expertise we had at our solution to the problem!

### Best Use of Google Cloud
Our entire Backend was built on Google Cloud. We use Google Cloud storage to store our data and and use Google Cloud functions to make API calls from our frontend.

### Most Creative Use of Twilio
We used Twilio messaging API to send messages between our patients and the nurses.

### Most Creative Use of GitHub
GitHub was used to collaborate, push code, get feedback, and keep track of our code throughout the hackathon. 

## Accomplishments that we're proud of ✨
We are proud of finishing the project on time which seemed like a tough task as we started had so many features to implement. Moreover, we learned a lot about ML algorithms for head tracking, new web technologies, and libraries that we could incorporate into our project to meet our unique needs. And as always, working overnight was pretty fun! :)

## Challenges we ran into 😤
This project was especially an achievement for us because this time the experience was very different than what we have while building typical hackathon projects, which also includes heavy brainstorming, extensive research, and yes, hitting the final pin on the board.

## What we learned 🙌
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon :)

**Note ⚠️ — API credentials have been revoked. If you want to run the same on your local, use your own credentials.**
