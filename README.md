# Database server tech test
A small API server that can store and return data.

## Requirements
- Runs a server that is accessible on http://localhost:4000/.
- When server receives request on http://localhost:4000/set?somekey=somevalue it stores the passed key and value in memory.
- When server receives request on http://localhost:4000/get?key=somekey it return the value stored at somekey.
- Stores data in memory, but can easily be changed to use a database instead.

## Setup
Clone the repo
`$ npm install`

## Running tests
To run all available tests type `$ npm test`

## Get started
To run the server type `$ npm start`

## Process
- Outlined project requirements in readme file
- Wrote feature test for first requirements


## To do
