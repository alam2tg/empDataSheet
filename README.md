# empDataSheet

### by Aaron Lam

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## License

    Licensed under the Apache 2.0 license.

## Table of Contents

-  [License](#license)
-  [Description](#description)
-  [Installation](#instillation)
-  [Usage](#usage)
-  [Contact-Me](#contact-me)
-  [Credits](#credits)
-  [Tests](#tests)
-  [Questions](#questions)

## Description

The purpose of this project was to utilize SQL databases to generate tables of data in the command-line. My biggest learning point was using multiple prior methods and modules to create command-line tables.

## Installation

Javascript, Nodejs, Mysql2, Inquirer, and Nodemon are the coding tools I used in this project. In addition, you will want to use the MySQL installer to display your SQL data.

## Usage

Javascript, SQL, and reading through the mysql2 node module is core to understanding how my code operates.

## Contact Me

-  Name - Aaron Lam
-  Email - aaronlamfinance@gmail.com
-  Github - ![Github](https://github.com/alam2tg)

## Credits

N/A

## Tests

To test out this project, you will first need to setup your MySQL server, and use Inquirer to run the code. Assuming you have started a MySQL installer through the installer, you will want to do the following in the command-line. 1.'mysql -u root -p' to enter the server. 2. run 'source ./db/schema.sql' and 'source ./db/seeds.sql'. These commands will generate the tables and insert the data into your local host environment. 3. run 'node index.js' to start the inquirer prompts. From here, you can answer the questions and see what happens!

## Questions

Please send your questions [here](mailto:aaronlamfinance@gmail.com)

## Sources

* [MySQL Getting Started](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Basic MySQL controls](https://www.mysqltutorial.org/mysql-administration/stop-mysql/)
