# Database server tech test
A small API server that can store and return data.

## Requirements
- Runs a server that is accessible on http://localhost:4000/.
- When server receives GET request on http://localhost:4000/set?somekey=somevalue it stores the passed key and value in memory.
- When server receives GET request on http://localhost:4000/get?key=somekey it return the value stored at somekey.
- Stores data in memory, but can easily be changed to use a database instead.

## Setup
First clone the repo:  
`$ git clone https://github.com/heuperman/database-server.git`  

Install npm if needed:  
`$ npm install npm@latest -g`

 Install dependencies:  
`$ npm install`

## Running tests
To run all available tests type `$ npm test`

## Get started
To run the server type `$ npm start`

## Process
- **Outlined project requirements in readme file**  
To make sure my effort were well directed I parsed the given instructions.

- **Wrote feature test for first requirement**  
To help me build an app that meets the first requirement, I wrote a test that would only pass if the server was accessible on port 4000. I did not think unit tests would be required here as the code would consist mainly of setting variables and running functions of the external dependency Express.

- **Wrote the code needed to pass the first feature test**  
Consisted mainly of telling Express to run a server on port 4000 and letting it handle the rest. Also made a slight change to the test so it would test not just if the server would run but that it would run on port 4000 specifically.

- **Wrote feature test for second requirement**
To help me build an app that meets the second requirement, I wrote a test that made a GET request with params and expected a response that confirmed they had been received.

- **Wrote code to pass the second feature test**
Consisted of slightly changing the routing and telling the server to return some text. Changing the routing caused the first feature test to fail. As '/' is not intended to be accessed and the second feature test requires '/set' to be accessible I remove the first test.

- **Wrote feature test to check unhappy path when accessing '/set'**
Wrote a test to help me make sure user would receive an error on entering invalid data.

- **Wrote code to return error when passing invalid data**
Added code to throw a generic error when receiving anything other than the expected test data on '/set'.

- **Wrote feature test to check if '/get' is accessible**

- **Added '/get' route to the app**
Wrote the code to allow access to '/get'. As there are now multiple routes I felt it was in order to extract this behaviour to a separate section. Told the app to use a controller for routing and moved the routes and responses to this controller. Also added a response string to the invalid params error to give some helpful guidance on the expected query string format.

- **Wrote feature test for final and most crucial requirement**
Test first passes a key value pair as a query string to '/set' and then passes the key and checks if the server returned the correct value. The trickiest part of this was making sure the first request would complete before the second one was made which I did by passing the second request as a callback.

- **Wrote the code to pass this feature test**
Added a hash to store the passed key value pairs in and a check to see if the query string consists of a single pair as required. Getting the key and value from the query when neither are known required some research but I found a pretty elegant solution that introduced me to a whole new feature of Javascript: the Object.

## To do
