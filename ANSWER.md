# LINKIT Flight Agency

Linkit is an airplane company.

this project comes as the full stack javascript technical test

## General Introduction

After two years of Covid and restrictions on travel worldwide,
People are eager to travel again and discover new places.
Therefore LinkIT Airline decided to take the time to create a booking engine in order to make the process of booking a ticket digital and available on the internet

## Introduction

Our platform is dedicated for three types of users:

- customer
- admin
- web master

the customer has the ability to :

- Search for his desired departure airport
- Search for his desired arrival airport
- Find an availability
- Book a ticket
  the admin can:
- Manage airports
- Manage flights between two airports
- See the number of tickets booked by month/airport
  the webmaster can monitor the performance of the website, consult the stats of :
- CPU usage
- Memorie usage
- Heap usage
- One minute load average
- Spent in event-loop
- Response time
- Request per second
- Request Status code

## Technical Introduction

This project is a full-stack javascript project

This project is divided into two main projects:

- Front End Project, realized with VueJs
- Back End Project, realized with NestJs

Why Nest and Vue

Nest.js has a reputation for bringing design patterns and mature structures to the node.js world.

Nest.js is fully featured and structured to support MVC (Model-View-Controller) design pattern.

This means you can install one of the popular template engines used in node.js and configure it to handle the flow of the application and interaction with backend API from the front end.

While this might be sufficient for a small app, it is always better to consider a much better and contemporary approach to handling frontend related part of an application by leveraging on a tool like Vue.js.

Vue can be used to set up the frontend logic of your application.

Vue.js is a progressive JavaScript framework for building reusable components for user interfaces. It is simple and yet very powerful and ideal for any project. This makes it seamless to use for a Nest.js application for example.

#### FrontEnd:

This project:

- Made with VueJS as the frontend framework
- VueX as the store manager
- fetch as the HTTP client

#### Back end

This project:

- Made with NestJs
- MVC design patterns
- Database MongoDB
- Indexing server elastic search
- Dockerized

this project is developed using stand-alone modules and components

I used observables to communicate between mongo and elastic search (afterInsert afterUpdate)

It was containerized with Docker

# How to start

## Before Starting

Make sure you have [Docker installed](https://docs.docker.com/desktop/#download-and-install) on your system, and if you are on Windows 10 please make sure to install [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

## install & run the project

clone the project

```bash
git clone git@github.com:LINKIT-Group/js-fullstack-test-amir-bouker.git
```

Spin up the containers for the web server by running

```bash
cd server/
docker-compose up -d --build site
```

Bringing up the Docker Compose network with `site` instead of just using `up`, ensures that only our site's containers are brought up at the start, instead of all of the command containers as well. The following are built for our web server, with their exposed ports detailed:

starting frontend

```bash
cd client/
npm i
npm run build
npm run watch (for dev)
npm run serve (for prod)
```

## MUST READ

I had problems with time in this task due to my full time work

I didn't generate a swagger documentation but you will find a postmand collection ./postman.json

I create a database seed but in case it didn't seed the database, I ask you to enter the data manually
(the problem is with elastic indexing )

I'm ready to havea call with you to answer every aspect of the project

I really hope you like the backend and the dockatization

## Roadmap

- add dashboard for admin to add flights and airports

- add more unit test

- add more metrics

I did my best in the realisation of this project

I'd be more than happy to disscuss every aspect of this project overa call

since I'm working full time I couldn't add more
