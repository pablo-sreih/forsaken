<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  
> **[PROJECT PHILOSOPHY](#project-philosophy) • [WIREFRAMES](#wireframes) • [TECH STACK](#tech-stack) • [IMPLEMENTATION](#implementation) • [HOW TO RUN?](#how-to-run)**

</div>

<a id="project-philosophy"></a>
<br><br>


<img src="./readme/title2.svg"/>

> Forsaken app is for the Abandoned Spaces Lovers where they can gather in one place. It's a social media app with an 
> EMF meter where users can detect paranormal activities around the forgotten place.
>
> The EMF meter uses the magnetometer built in most modern phones and detects the variations of the magnetic field around > it. These variations are what we call a distraction caused by natural forces, be it a strong wave of electric vibrations or something else.

### User Stories

- As a user, I want to browse photos and locations, so that I can find abandoned places.
- As a user, I want to check the electromagnetic field to check for paranormal activities.
- As a user, I want to find like-minded people to share stories and interests.

### Admin Stories

- As an admin, I want to check the posts for unethical photos.
- As an admin, I want to check the statistics of the app.
- As an admin, I want to add new abandoned locations on the map.

<a id="wireframes"></a>
<br><br>


<img src="./readme/title3.svg"/>


> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

> <br><br>
> <kbd><img src="./readme/wireframes/first_page.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/discover.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/location_info.jpg" width="245"></kbd> <br><br> <kbd><img src="./readme/wireframes/profile_page.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/post_per_profile.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/emf_tracker.jpg" width="245"></kbd>

<a id="tech-stack"></a>
<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Forsaken app uses:

- This project uses the [React Native development library](https://reactnative.dev/). React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
- For the admin page, the app uses the [React Javascript library](https://reactjs.org/) which allows the admin to acces the dashboard and monitor the data running through the app.
- As for the backend, the app uses a php framework called [Laravel](https://laravel.com/) along with a database management system called [phpMyAdmin](https://www.phpmyadmin.net/) to manage the api calls and to store data.

<a id="implementation"></a>
<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app
> <br><br>

> | App GIFs |
> | -------- |
>
> <kbd><img src="./readme/gifs/1.gif" width="245"></kbd> <kbd><img src="./readme/gifs/2.gif" width="245"></kbd> <kbd><img src="./readme/gifs/3.gif" width="245"></kbd> <kbd><img src="./readme/gifs/4.gif" width="245"></kbd> <kbd><img src="./readme/gifs/5.gif" width="245"></kbd> <kbd><img src="./readme/gifs/6.gif" width="245"></kbd> <kbd><img src="./readme/gifs/7.gif" width="245"></kbd> <kbd><img src="./readme/gifs/8.gif" width="245"></kbd> <kbd><img src="./readme/gifs/9.gif" width="245"></kbd>

<br><br>

> | App Screenshots |
> | --------------- |
>
> <kbd><img src="./readme/screenshots/1.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/2.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/3.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/4.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/5.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/6.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/7.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/8.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/9.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/10.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/11.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/12.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/13.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/15.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/16.jpg" width="245"></kbd>

<br><br>

> | Admin Screenshots |
> | --------------- |
>
> <kbd><img src="./readme/admin_screenshots/1.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/2.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/3.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/4.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/5.jpg" width="350"></kbd> 

<a id="how-to-run"></a>
<br><br>

<img src="./readme/title6.svg"/>

<br><br>

### Prerequisites

_Below are the prerequisite software you need to run the app_

- VSCode: Download from [here](https://code.visualstudio.com/)

_Then run the following commands in the terminal_

- npm
  ```sh
  npm install npm@latest -g
  ```

- expo cli
  ```sh
  npm install --global expo-cli
  ```

### Installation

_Below are the instructions on how to run the App and the Admin Panel_

1. Clone the repo
   ```sh
   git clone https://github.com/pablo-sreih/forsaken.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. For the app you need to run
   ```js
   expo start
   ```
4. For the admin page you need to run
   ```js
   npm start
   ```
5. To run the server in Laravel

   1. First you need to install Composer from [here](https://getcomposer.org/download/)
      then run the below command to install the dependencies
      ```js
      composer install
      ```
   2. Migrate to the database by running 
      ```js
      php artisan migrate
      ```
   3. Finally run the server with
      ```js
      php artisan serve
      ```
