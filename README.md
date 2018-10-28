# Tick_tac_toe
Late-term Assignment
SC-T-303-HUGB, fall semester 2018.
# Purpose
Learn to set up technical infrastructure to support agile development. The main challenge is to glue
together the bits and pieces through the latter half of this class, into a coherent infrastructure.
# Description
Each team should implement the game TicTacToe. The main focus is on the infrastructure and best
coding practices described below but not on implemented features.
The project and infrastructure should tackle the following:

[/] Work in progress
[X] Work completed 
[ ] Work unfinished

[X] 1. The codebase is stored in source control system on GitHub from early start of the project (the
teacher should be able to track the history of the project from the creation of the very first
file).

[X] 2. The system is setup with automatic build tool.

[X] 3. The build tool runs all unit tests.

[X] 4. The output is a deployable or executable artifact (note this is not applicable if the project
running a Web App).

[X] 5. The build script has deploy/install target that deploys the executable outside of the working
directory (console app) or on external server (web app).

[X] 6. The business logic should be coded using Test Driven Development.

[X] 7. The code should be loosely coupled and follow good object oriented design practices.

[X] 8. Documentation uses Markdown syntax.

[X] 9. Use Automated Continuous Integration Server.

[X] 10. Use feature branches and pull request for all features. It must be clear that this workflow was
used the whole time and that the team was using reviews before accepting pull-requests.

[ ] 11. More build targets (0,5 point per item, never more than 1 for this part) here are examples of
build targets.
Code coverage and other code inspections. Report or other kind of result must be
available outside of the build machine after each run.
Integrate database (for storing games, players, or something else)
Documentation is converted to another format (e.g PDF or Html) and is easily accessible
outside of the build machine after each run (the build needs to publish the documents to
an external server).
Something else ... Surprise us!!!

[ ] 12. Set up web interface for the game. (1 point)

[ ] 13. Run End-to-end tests (e.g. Puppeteer). It is necessary to run this on external staging server. (1
point)

[ ] 14. Continuous Delivery. For each code change the CI server runs these steps (1 point):
Run build script (all targets)
Run unit and integration tests (if you have integration tests) Deploy on staging and run
End-to-end tests.
Deploy to production server.
Only continue next step if previous step is success
Generate feedback to developer

