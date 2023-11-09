# Report QA TEST - Khaty Guyet - November 9, 2023

## 1. Tasks

The candidate is to achieve the following tasks

- Create some tests in order to properly test the different endpoints of the app
- Setup cypress and the test suite
- Identify elements of the app that could be enhanced and that are of insufficient quality
- Produce a detailed report / documentation on effected tests

The report should properly achieve the following goals:
- Be technically clear enough so that a developer team can quickly iterate on the enhancements
- Be clear enough for non-technical people to be shared with the non-dev team so they can understand the evolutions as well

## 2. Deliverables

- Fork this project and follow the installation instructions
- Follow the tasks to complete the work
- Produce your test / QA report in a REPORT.md file
- Push your work to your github account and provide the github url to the person in charge of reviewing the test

## 3. Methodology
- Cloning the project repository from GitHub.
- Installing packages.
- Configuring environment variables.
- Analysis of the application project.
- Creation of test scenarios.

## 4. Test Scenarios
- I started by creating a test scenario for the '/todos' page to ensure that the application functions correctly.
- By analyzing the application, I noticed that it corresponds to a task management application, which allowed me to create test scenarios E2E based on CRUD Create, Read, Update, Delete in order to cover all the methods of the 'src/controllers/todos.controller.ts' file.
- I created 1 file per test in order to improve readability, you can find the files via the 'cypress/e2e' path.
- I tested the 5 scenarios on 3 browsers: electron, chrome, firefox.

## 5. Test Results

- The tests were 100% successful.

## 6. Code Coverage
- In order to have a double check, I created a test coverage and stored it in the 'coverage' folder.

## 7. Screenshots

- You can find the screenshots in the 'cypress/screenshots' folder.

## 8. Areas for improvement
- Performance can be improved when querying "Read a task" because the page displays all tasks instead of just the requested one.

