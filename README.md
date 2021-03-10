# Reflections
Here are some of my thoughts that I had while working with the case. I worked on the **backend** assignment. 

## Testing:
I made tests that made sure that the functions used by the “GET” endpoints of the API returned correct status codes. If I would have had more time then there are a lot of other testing I would have done. 
For the testing I decided to use Jest and Supertest. Supertest can be used to mock HTTP requests, which I saw as very fitting for an API, and Jest is a product made by Facebook that is gaining a lot of popularity, and there is a lot of work done within the framework, so it’s something that is good to use today and hopefully in the future. There isn't as much middleware as for older frameworks such as Mocha, but from what I’ve read I believe Jest will do nicely for this task, partly because it’s growing and will probably be used in the future, and is fast and doesn’t need a lot of configurations.

### Things I would have tested if I had more time:
The other endpoint functions. The reason I didn’t cover those were because these modify the database, and I don’t want to modify the database while testing. This could be tested for example by mocking a database (using Jest). This will make sure that any alterations to the database won’t affect the other tests, and make sure that the tests are stable and that the database is the same in every iteration. 
Extend the tests for all the endpoint functions. Now I am simply testing if they are returning the correct status code, but I would also like to test if they return the right data for the *GET* endpoint functions, that the  *DELETE* function properly deletes an element, that *PUT* functions updates and inserts correctly into the database. This would also be done using a mock database, or a test database.


## Security:
Right now the API is only running on my local computer, but if it should be deployed in the future, there would need to be some kind of authentication, since it’s right now not protected. This could be done by requiring for example an access token when calling the API. 
One problem when working with SQL databases is SQL injection. However, I am using knex, which is a querybuilder which doesn't allow any raw SQL in the functions that I used. 


## Future expansions and scalability:
I decided to use Express since it is minimalistic and flexible, there are also lots of middlewares that may be useful in the future.
Future improvements of the endpoints would for example be to:
Being able to limit the number of posts that are returned in the getPosts requests.
Being able to get all posts of an impacter based on the name instead of only the impacter_id. This could be done by combining/joining the two tables co_posts och co_impacters.  
Being able to change only some parts of a post, not needing to supply both the description and the data. 

I decided to keep most files in the root folder, since it’s still a relatively small project. In the future, the ones continuing with the project can decide what structure they think is most relevant depending on the expansions they made. Right now, I think it’s easier to understand if the scripts are in the same root folder. 
