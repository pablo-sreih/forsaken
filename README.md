<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  
> **[PROJECT PHILOSOPHY](https://github.com/julescript/well_app#-project-philosophy) • [WIREFRAMES](https://github.com/julescript/well_app#-wireframes) • [TECH STACK](https://github.com/julescript/well_app#-tech-stack) • [IMPLEMENTATION](https://github.com/julescript/well_app#-impplementation) • [HOW TO RUN?](https://github.com/julescript/well_app#-how-to-run)**

</div>

<br><br>

<img src="./readme/title2.svg"/>

> The Well app is a mental health and mindfulness app built on top of the science of positive psychology. The Well app is more than just another meditation or journaling app; it encourages you to enhance and reflect on your day with structured, guided activities.
>
> There are 5 daily tasks that the Well app asks you to complete each day: record 3 gratitudes, write a journal entry, perform 3 acts of kindness, exercise for 20 minutes, and meditate for 15 minutes.

### User Stories

- As a user, I want to browsse ablums, so that I can find quick links
- As a user, I want to browsse ablums, so that I can find quick links
- As a user, I want to browsse ablums, so that I can find quick links

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

> <br><br>
> <kbd><img src="./readme/wireframes/first_page.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/discover.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/location_info.jpg" width="245"></kbd> <br><br> <kbd><img src="./readme/wireframes/profile_page.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/post_per_profile.jpg" width="245"></kbd> <kbd><img src="./readme/wireframes/emf_tracker.jpg" width="245"></kbd>

<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

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
> |<kbd><img src="./readme/screenshots/1.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/2.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/3.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/4.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/5.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/6.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/7.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/8.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/9.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/10.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/11.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/12.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/13.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/15.jpg" width="245"></kbd> <kbd><img src="./readme/screenshots/16.jpg" width="245"></kbd>

<br><br>

> | Admin Screenshots |
> | --------------- |
>
> <kbd><img src="./readme/admin_screenshots/1.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/2.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/3.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/4.jpg" width="350"></kbd> <kbd><img src="./readme/admin_screenshots/5.jpg" width="350"></kbd> 

<br><br>

<img src="./readme/title6.svg"/>

> This is an example of how you may give instructions on setting up your project locally.
> To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```
