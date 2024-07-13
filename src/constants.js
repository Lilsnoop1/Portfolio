const information = {
    "web":{
        "beginner":[
            [
                "The 'To-Do List' website is a task management application built using Node.js and Express.",
                "-MongoDB is used as its database for storing information.",
                "-It utilizes EJS templates for rendering the user interface.",
                "-The site offers features like adding, editing, and deleting tasks.",
                "-This setup provides a dynamic and responsive environment for users to efficiently manage their daily activities."
            ],
            [
                "The 'I am Bored' website is a Node.js and Express application using EJS templating and Axios.",
                "-It leverages the Bored API to suggest activities based on the number of participants.",
                "-Users can select different activity types like education, charity, recreational, and more.",
                "-Users can specify the number of people involved to get a suitable boredom-curing suggestion."
            ],
            [
                "The 'Band Generator' website is a Node.js and Express application using EJS templating.",
                "-It provides a fun tool for generating band names.",
                "-It offers users creative inspiration for forming a band or naming musical projects.",
                "-The site is user-friendly, allowing for easy navigation and quick generation of names."
            ],
            ['A simple UI design of a subcription service'],
            ['A site to play rock paper scissors on.']
        ],
        "Amateur":[
            [
                "The 'InfoMania' website is a Node.js and Express application using EJS templating.",
                "-It provides various features such as tracking anime, finding holidays on specific dates, and generating food recipes.",
                "-The site offers an easy-to-navigate interface, allowing users to explore different sections and access information efficiently."
            ],
            [
                "The 'Taco Recipes' website is a Node.js and Express application using EJS templating.",
                "-It allows users to explore various taco ingredients and recipes, offering a simple and interactive way to discover new taco ideas.",
                "-The site is designed to be user-friendly, making it easy for taco enthusiasts to navigate and find their favorite ingredients."
            ],
            [
                "A note keeper app built using React which saves information about your notes.",
                "-Implementation of basic State Management"
            ]
        ],
        "Professional":[
            [
                "The blog website is built using EJS templating, Node.js, and Express.",
                "-It offers a straightforward design with sections like 'Home,' 'About Us,' and 'Contact Us.'",
                "-The site showcases daily journal entries and features a clean and minimalistic layout, making it easy to navigate.",
                "-The hidden route /compose suggests functionality for adding new blog entries, indicating potential for dynamic content management.",
                "-Overall, it provides a simple yet effective platform for personal blogging."
            ],
            [
                "The React E-Commerce website is built using the MERN stack.",
                "-It offers a clean, modern, and responsive design.",
                "-It features intuitive product displays, search and filter options, and an efficient shopping cart.",
                "-The site performs well with quick load times and smooth interactions.",
                "-Backend integration with MongoDB and Express.js ensures robust data handling.",
                "-React provides a dynamic user interface.",
                "-Hosted on Vercel, the site is reliable."
            ],
            [
                "Secrets is a website which demonstrates how to build websites with safe and secure authentication.",
                "-It utilizes passport.js to create local and Google strategies for signing in, signing out, and creating new users.",
                "-It's built using Express.js and EJS templating.",
                "-It uses complex hashing in the local strategy to ensure that data is encrypted."
              ]

        ]
    },
    "mobile":{
        "beginner":[
              [
                "Destini is an interactive storytelling app where the user's choices influence the narrative.",
                "-The app presents a story with multiple choice options.",
                "-Depending on the user's selections, the story progresses differently.",
                "-An example scenario involves a user being given two choices on how to react to a situation involving a stranger and a glovebox containing a knife, severed fingers, and a cassette tape of Elton John."
              ],
              [
                "This app simulates the rolling of dice.",
                "-Users can use this app to generate random dice outcomes, useful for games or determining winners.",
                "-The app displays two dice, and each roll generates a new random number on each die."
              ],
              [
                "Quiz App",
                    "-Interactive Quiz Format: Simple true/false questions with immediate feedback.",
                    "-User-Friendly Design: Clean and intuitive interface that enhances the user experience.",
                    "-Performance Tracking: Tracks user progress with visible indicators for correct and incorrect answers.",
              ],

        ],
        "Amateur":[
            ['MiCard',
                "-Professional Profile Display: Elegant design showcasing the developer's photo, name, and role.",
                "-Contact Information: Clearly presented phone number and email address for easy communication.",
                "-Responsive Layout: Adapts seamlessly to different screen sizes, ensuring accessibility across devices."
            ],
            [
                "Bitcoin Ticker App",
                "-Real-Time Cryptocurrency Rates: Displays current exchange rates for BTC, ETH, and LTC in AUD.",
                "-Accurate Calculations: Provides precise conversion values up to 15 decimal places.",
                "-Multiple Currency Support: Allows switching between different fiat currencies (AUD and BRL)."
            ],
        ],
        "Professional":[
            [
                "Flash Chat app using Flutter",
                "-Firestore for authentication and database management",
                "-Stream for instant messages added to the database",
                "-Different colors for people chatting",
                "-Login and Register screens",
                "-Simple chat interface with message input and display"
            ],
            [
                "This app allows users to calculate their Body Mass Index (BMI).",
                "-Users need to select their gender (Male/Female), input their height in centimeters, weight in kilograms, and age.",
                "-After entering the necessary data and pressing the 'Calculate' button, the app calculates and displays the BMI value."
            ],
        ]
    }
}

export default information;