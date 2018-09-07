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
To be able to find out if my app meets the first requirement, I wrote a test that would only pass if the server was accessible on port 4000. I did not think unit tests would be required here as the code would consist mainly of setting variables and running functions of the external dependency Express.

- **Wrote the code needed to pass the feature test**  
Consisted mainly of telling Express to run a server on port 4000 and letting it handle the rest. Also made a slight change to the test so it would test not just if the server would run but that it would run on port 4000 specifically.

## To do
