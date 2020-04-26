## Ports:- 
1.	For JSON Server – 3000 (default)
2.	For Micro Service – 8080 (default)
3.	For React App – 3001

## To Run:- (Prerequisites – Java, Node, Maven)
1. Start JSON server in spaced-json-db folder
	npm install -g json-server
	json-server --watch fsd-db.json

2. Start service in spaced-service folder
	mvn spring-boot:run

3. Start react app in spaced-app folder
	npm install
	SET PORT=3001
	npm start

Limitations:-
1. Due to the lack of data, 
	a. flight search request is returning all flights. (Regardless of the search parameters) 
	b. Each time same set of dates will be returned for depart dates. (regardless of origin and destination)
2. Checkout page only referencing economy flight class. (Seat layout for economy class on checkout page)
3. Exception handling has not been taken care. 
