# Peer2Peer Programming 

## Introduction

- **`Andela P2P Programming `** is a web app for peer programming among single/multiple users.
- It has the following features;
  - Sign Up with an email address and password.  
  - Login via the email and password.
  - Create a new programming session.
  - Invite colleagues to join programming session **by email**.
  - Edit existing sessions.
  - Start fresh sessions
  - Delete Existing Programming Sessions.
- Click **[here](https://andela-p2p-programming-app.herokuapp.com)** to access the app on Heroku

## Dependencies

- This app is a full stack web app having dependencies across both the front and backend.

### Back End Dependencies

- This app relies mostly on the javascript framework.
  - **[NodeJS](https://nodejs.org/)** - This is the base platform used to serve the application.
  - **[Express](https://expressjs.com/)** - This is used to implement the routing features of this app.
  - **[Firebase](https://firebase.google.com/)** - This is used to handle the real-time database features of the app and the user login and authentication.

### Front End Dependencies

- **[Bootstrap](https://github.com/twbs/bootstrap)** - Most of the UI is built using Bootstraps framework and tools.
- **[Marked API](https://github.com/chjj/marked)** - I used this to implement the preview feature of the Markdown text entered in description on creating a new note.
- **[Bootstrap-Markdown](https://github.com/toopay/bootstrap-markdown)** - This is a javascript and css library helping to implement the markdown features of the description text box on creating a new note.
- **[CodeMirror](https://codemirror.net/)** - This is used to implement the programming UI.
- **[Firepad](https://firepad.io/)** - This is the API used to implement instant sharing code updating among peers.
- **[EmailJS](https://www.emailjs.com/)** - This is the API used to implement the email invite feature. It helps auto-generate and deliver the invitation email.

## Installation and setup

- Navigate to a directory of choice on `terminal`.

- Clone [this](https://github.com/itunuworks/bc-18-ideabox.git) repository on that directory.

  - Using SSH;

    > `git clone git@github.com:itunuworks/bc-20-peer-programming-application.git`

  - Using HTTP;

    > `git clone https://github.com/itunuworks/bc-20-peer-programming-application`

- Navigate to the repo's folder on your computer

  - `cd bc-20-peer-programming-application/`

- Be sure to install all the dependencies using the command

- `npm install`

> To use the **git** and **npm** command, You also need to have **node** and **git** installed on your system.

- Run the app
  - `npm start` to start the server.
  - Running the command above will produce output that's similar to the sample below.
    `Listening for connections to port 3000`
  - Now open your browser and navigate to `localhost:3000`

## Tests

No tests have been implemented at this point in time.