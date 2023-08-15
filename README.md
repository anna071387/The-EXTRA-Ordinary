# The-EXTRA-Ordinary

https://github.com/anna071387/The-EXTRA-Ordinary


![alt text](./public/images/Screens-01.jpg)


## Description
The app EXTRA-Ordinary is a blog type entry website where people can register and participate in creation of a blog content.

It is Easy to create an account by entering a personal username, provide an email and a password.  



## Use
*   For a new user: select Register button that will take you to the registration form. Create an account.
*   For an existing user: select Login button. Provide username, email, and password. If the account already exists you will be redirected to the personal account page. 
*	When logged in you are prompted to create a new blog post and you may the list of previous blog posts.  
*	The landing page shows the library of all posts older to newer order.  
*	Every loggedin user will have an option to logout. 
 


## Result
It is easy to create a text blog post that includes a title, date and who created it. 

### Technologies Used:

* **Handlebars**: Used for conditional rendering
* **Squelize**: Used to add all functionality
* **Node.js**: Used with NPM to manage support packages
* **Express.js**: (npm package) Used to manage routing and API setup
* **express-handlebars**: (npm package) Handlebars view engine for Express
* **mysql, mysql2**: (npm package) MySQL driver
* **MySQL**: Database


This project is designed with help of following sources: 
© 2023 edX Boot Camps LLC, teaching materials and videos.
Helping of Teaching assitants, teacher and tutoring assistants at the bootcamp. 
Further resources include: W3schools, and personally conducted research.









* WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted;
navigation links for the homepage and the dashboard; 
and the option to log in

* WHEN I click on the homepage option
THEN I am taken to the homepage

* WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

<!-- User  -->
* WHEN I choose to sign up
THEN I am prompted to create a username and password

<!-- User -->
* WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

<!-- User -->
* WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

* WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

* WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

* WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

* WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created


* WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

* WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

* WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

* WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

* WHEN I click on the logout option in the navigation
THEN I am signed out of the site

* WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts