# Worker Genius application
This application is developed by Jean-Baptiste VESLEER and Sébastien NOBOUR.
They are both student at My Digital School Paris 19e, France.

## Status
### IN DEVELOPMENT. RELEASE to come on JUNE 2020

## Why this application ?
It is our project for final exams. It's a whole marketing, design and project behind this applicatin.
Its purpose is to get job seekers to get their skills certificated and become hired by companies looking for new
talents. Let's imagine a tech company looking for Symfony 5 backend developer.
The company subscribes to our service, to access a page showing all Symfony 5 backend developers on our website.
Are only showed job seekers, now called as candidates, who validated Symfony 5 backend tests on our platform. Then
 the company can slide in our Direct Message candidate's window is interested in to plan an interview. 
, then contact 
 
## What is the required env to use this application ?
You need to use Node JS 12

## Which technologies are used ?
ExpressJS for server, MongoDB for database, yarn as node package manager, twig as view engine templating

## What is the application architecture ?
The architecture is MVC type. Here is a representative tree of the project ( made with 'tree -I node_modules' command,
 given by brew install tree) :
```
.
├── README.md
├── app
│   ├── app.js
│   ├── bin
│   │   └── www
│   ├── controllers
│   ├── models
│   ├── public
│   │   ├── images
│   │   ├── javascripts
│   │   └── stylesheets
│   │       └── style.css
│   ├── routes
│   │   ├── index.js
│   │   └── users.js
│   └── views
│       ├── admin
│       ├── candidate
│       ├── enterprise
│       ├── error.twig
│       ├── index.twig
│       ├── layout.twig
│       └── test_editor
├── package.json
├── test
└── yarn.lock
```
## How to set up the app ?
Get the project on your device from github repo by doing this:
> git clone https://github.com/DaProclaima/worker_genius.git

Once you have NodeJS on your computer, simply go in the project directory and run a 
> yarn install

## How to run the application locally in dev env ?
 Just one command: 
> yarn start

Want to stop it ? Just type CTRL + C

