import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(138,43,226)", "rgb(65,105,225)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "James",
    lastName: "Higgs",
    initials: "JH", // the example uses first and last, but feel free to use three or more if you like.
    position: "Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Los Angeles, CA'
        },
        {
            emoji: "💼",
            text: "Technical Analyst at Oracle"
        },
        {
            emoji: "📧",
            text: <a href= "mailto: james.y.higgs@gmail.com">james.y.higgs@gmail.com</a>
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/jameshiggs/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/jahpe777",
            icon: "fa fa-github",
            label: 'github'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm James. I'm a technical analyst for Oracle. I enjoy hanging out with my family, recording music, and watching basketball.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'html', 'css'],
            exposedTo: ['nodejs', 'python', 'psql']
        }
    ,
    hobbies: [
        {
            label: 'coding',
            emoji: '💻'
        },
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'basketball',
            emoji: '🏀'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "TDM Calculator",
            live: "https://tdm.ladot.lacity.org/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/hackforla/tdm-calculator", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "BigPapaBas",
            live: "https://bigpapabas.vercel.app/",
            source: "https://github.com/jahpe777/bigpapabas",
            image: mock2
        },
        {
            title: "Ghost Pavilion",
            live: "https://ghostpavilion.com/",
            source: "https://github.com/jahpe777/ghost-pavilion-website-2022",
            image: mock3
        },
        {
            title: "Crescendo",
            live: "https://crescendo.vercel.app/",
            source: "https://github.com/jahpe777/crescendo",
            image: mock4
        },
    ]
}