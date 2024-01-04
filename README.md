<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Npm][npm-shield]][linkedin-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- ABOUT THE PROJECT -->
## About The Project
`OBJECTIVE:`
* Centralized aggregation of user's top-n items (e.g., books, songs, movies) accessible with a single click.
* Implemented PDF generation using pdfkit.

`KEY FEATURES:`
* User can add/remove top-n to their profile.
* Generates a PDF report containing the list of top-n items for each category.
* Provides an option to view or download the generated PDF reports.
* Integrated secure authentication mechanisms via email to ensure user data privacy.
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next][Node.js]][Node-url]
* [![Express][Express]][Express-url]
* [![Mongodb][Mongodb]][Mongodb-url]
* [![HTML][HTML]][HTML-url]
* [![CSS][CSS]][CSS-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started
### Installation

1. Make sure you have npm installed on your machine.

2. Clone the repo
   ```sh
   git clone https://github.com/EmadMahmoud/mirror.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your own environment variables, In the root folder create file `.env`
   ```js
   DATABASE_URI = 'ENTER YOUR DATABASE CONNECTION URI';
   PORT = 3000
   SENDMAILUSER = 'TYPE THE EMAIL USED BY NODEMAILER'
   SENDMAILPASS = 'TYPE THE PASSWORD GENERATED TO USED BY A THIRD PARTY'
   ```
5. Run the Server
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Emad Mahmoud : [Twitter](https://twitter.com/EmadMah82323322) - emad.mahmoud.dev@gmail.com



<p align="right">(<a href="#readme-top">back to top</a>)</p>

[npm-shield]: https://img.shields.io/badge/npm-8.18.0-46954A?style=for-the-badge&logo=npm&link=https%3A%2F%2Fexpressjs.com%2Fen%2F5x%2Fapi.html&link=left

[contributors-shield]: https://img.shields.io/github/contributors/EmadMahmoud/mirror.svg?style=for-the-badge
[contributors-url]: https://github.com/EmadMahmoud/mirror/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/emadmahmoud/

<!-- Built With -->
[Node.js]: https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=#339933
[Node-url]: https://nodejs.org/en
[Express]: https://img.shields.io/badge/Express-259DFF?style=for-the-badge&logo=express
[Express-url]: https://expressjs.com/
[Mongodb]: https://img.shields.io/badge/MongoDB-FFC558?style=for-the-badge&logo=mongodb&logoColor=#47A248
[Mongodb-url]: https://www.mongodb.com/
[HTML]: https://img.shields.io/badge/HTML-173459?style=for-the-badge&logo=html5&logoColor=#173459
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS]: https://img.shields.io/badge/CSS-1D80C1?style=for-the-badge&logo=css3&logoColor=#1D80C1
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Bootstrap]: https://img.shields.io/badge/Bootstrap-ED576C?style=for-the-badge&logo=bootstrap&logoColor=#ED576C
[Bootstrap-url]: https://getbootstrap.com/docs/5.3/getting-started/introduction/
