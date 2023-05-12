## UltraMail Users

_Ultramail Users:_ A package for UltraMail clients to configure automatic user registration and activity logging for personalized emails instead of having to manually add and configure users

_To setup Automated Email Marketing using UltraMail, checkout [ultramail.app](https://ultramail.vercel.app)

**Features:**
 * Endpoint: create a user
 * Endpoint: add an action to a user
 * Endpoint: remove a user


#### Initial Setup

To setup the connection to your ultramail website, first find the API key on your ultramail website page (it should be in the top header). That key will be required to initialize the instance of the Ultramail API for user management

To initialize:

 ```js
 const ultramail = new Ultramail("YOUR-KEY-HERE")
 ```
 
 After initializing the API, you can then call the three main requests to manage users for your email list on the website
 
 #### Adding a User
 
 ```js
 const ultramail = new Ultramail("YOUR-KEY-HERE")
 
 await ultramail.createUser({ email: string, name: string, age: number })
 ```
 
 #### Deleting a User
 
 ```js
 const ultramail = new Ultramail("YOUR-KEY-HERE")
 
 await ultramail.deleteUser({ user: string }) // represents the user email
 ```
 
 #### Adding a User Action (used for logging past user actions, support for these in emails will be added in the future)
 
 ```js
 const ultramail = new Ultramail("YOUR-KEY-HERE")
 
 await ultramail.addUserAction({ userEmail: string, action: string })
 ```
