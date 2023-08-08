# The-EXTRA-Ordinary

# The LIBEREADER


https://github.com/anna071387/LIBEREADER
https://enigmatic-refuge-35111-66091fd0ee77.herokuapp.com
https://drive.google.com/drive/folders/1XsV4iAQfZh3y4RW-vizYXlwHivXUkTmV?usp=sharing

![alt text](./public/images/LOGO-01.png)
![alt text](./public/images/libereader-01.jpg)
![alt text](./public/images/libereaderLogin-01.jpg)
![alt text](./public/images/libereaderLogedinReview-01.jpg)
![alt text](./public/images/libereader.jpg)
![alt text](./public/images/DeployedWorkBench.jpg)


## Description
The app LIBEREADER is designed to create an interractive way to view books and create personal reviews. 
Any avid reader who wants to record personal thoughts about the books that were read, now has a chance to create an account with the LIBEREADER. 

It is Easy to create an account by entering a personal username, provide an email and a password.  



## Use
*   For a new user: select Register button that will take you to the registration form. Create an account.
*   For an existing user: select Login button. Provide username, email, and password. If the account already exists you will be redirected to the personal account page. 
*	When loged in you can browse the attached books library by typing your search in the search bar. The library is based on google books api which allows you to view books by a genre, author and a title. 
*	The landing page shows the curated books that were already read by other users. You may view the other users reviews of books as well. Because everyone has an opinion about a book, they can only contribute to personal posted review of the book.   
*	Every logedin page will have an option to logout. 
 

Enjoy your freedom of reading and writing your toughts in a safe environment of the LIBEREADER. 

The following animation demonstrates the application's appearance and functionality:


## Result
We developed a well-crafted, functioning, user friendly, intuitive website for searching books and providing personal review for the books that you have read. 

We incorporated server side google books Api that helps to draw data for any books in the library by genre, author and title.

Every registered account and user can browse books from the library and write their own review of the book which can be stored in their personal account.

### Technologies Used:

* **Bootstrap**: Quick and effective styling
* **Handlebars**: Used for conditional rendering
* **Squelize**: Used to add all functionality
* **Node.js**: Used with NPM to manage support packages
* **Express.js**: (npm package) Used to manage routing and API setup
* **body-parser**: (npm package) Middleware used to parse request bodies
* **express-handlebars**: (npm package) Handlebars view engine for Express
* **mysql, mysql2**: (npm package) MySQL driver
* **MySQL**: Database
* **Lodash**: Used to simplify object arrays

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