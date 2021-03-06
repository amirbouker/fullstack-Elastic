# JavaScript Full Stack Test

## Story

You are providing a service to a charted airplane company. This fiction company LINKIT AIR has the following flights daily (times are in departure city time):

- 09:55 - Amsterdam to London

- 13:15 - London to Amsterdam

- 10:45 - Amsterdam to Frankfurt

- 14:35 - Frankfurt to London

They want to get rid of some of travel agents and make it easier to customers to buy their tickets, so they need to develop a simple sales website.
At the same time, they want to gather some statistics about this service.

## Time limit

Up to you on how much effort you want to spend and how perfect you want it to be. You can take your time to build the backend service with latest Node.js and frontend user interface with latest version of any framework you feel comfortable with.

## Assignment

Create a REST or GraphQL Service, on latest version of Node.js preferably using Express or NestJS, following the OpenAPI or GraphQL standards.
Provide documentation for your API as SWAGGER or RAML.
Create a web user interface with latest version of any framework / library of your choice where a customer of the site could do the following:

- Be able to select an origin.
- Be able to select a destination.
- Retrieve a fare offer for the given origin-destination combination.
- Selections for origin and/or destination should be searchable, in other words the customer should be able to find an origin or destination by providing a few characters that would match either an airport code, name or description. The user interface may be in any technique that you feel comfortable with.

The authentication is on application level, so make sure the user interface is not bothered with authentication. There is no need for a login to purchase tickets.
Add statistics for your backend
To get some input on our application usage we need to collect and store some information from its traffic. Retrieve and store the require values below:

- Total number of requests processed

- Total number of requests resulted in an OK, 4xx and 5xx responses

- Average response time of all requests

- Min response time of all requests

- Max response time of all requests

To not only store this data expose this information in a new restful endpoint as JSON and provide a dashboard to visualise this info. How to authenticate the access to this dashboard, it is up to you.

Collecting metrics should not impact the user experience in any way.
Make the application configurable. No hard coded values for things like endpoints, etc. Everything should be configurable in some kind of configuration file.

## Bonus points

- Use strict or noImplicitAny flag if you chose to develop with Typescript.
- Build your app with state management, using standalone modules and components.
- Build your backend using Typescript, use packager/script to create the distribution.
- Add e2e tests to cover basic few functional requirements.
- Instead of using hardcoded mocked data, you can create in memory database.

Show us your knowledge of javascript with including next generation JS features!

# Summary

By no means is the goal to get a solution covering all special cases in a 100% robust way. It's important that you can explain why you chose your solution instead of another. You can create mock data and values that make no sense (like fare prices and so on). Feel free!

At least the functionality that you deliver should be error free. What you implement and how you do it is subject to your creativity and ambition :-). Good luck!

## How do I submit it?

- Create your branch and keep pushing your changes in this repo.
- Create and explain in a Markdown about your decisions in the process.
- When it is done, let your LINKIT contact know about it via Pull Request.
- Write instructions in a README file so that anyone with a unix based system could download the repo and run the service on their `localhost`.

### Who do I talk to?

Your LINKIT contact - **Ilker ALTIN** on ilker.altin@linkit.nl and **@ilkeraltin** GitHub username.
