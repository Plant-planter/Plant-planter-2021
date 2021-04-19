# Plant Planner Pitch
### User Stories
As a learning gardener, I want a visual map of my garden so that I can generate ideas.
I want to learn which plants will work with my soil type
I want access to data regarding the ideal time of year to plant certain plants, and when the frost cutoff is for my area

### Communication Agreement 
--Our project hours will strictly fall during class hours. Any communication after hours is not mandatory, and will be done via Slack.
We will have a standup each morning and each team member can briefly speak about progress and blockers. We can collectively strategize how to help if a team member that needs it. 
-We will prioritize empathy and inclusivity, creating a space where we each are heard. 

### Project Scope
Minimum Viable Product
1) Choose Your Garden Page
    -Create a new garden section
    -Clicking 'create a new garden' updates form with new garden below that includes garden creation options...
    -Users to choose soil type and Portland region. This may influence data metrics on the chart page.
    -Plant model will include when plant is best planted. This will influence data on the chart page.
    -Button that takes user to garden 
2) A garden page: 
    - Displays a 5x5 grid
    - Each grid allows for plant selection via popup menu
    - Each grid contains plant symbol with color related to its flower color (unicode single folower avatar)
    - Each grid's bkg color reflects ideal pH for soil
    - Data visualization page: JS chart displays optimum growth / harvest per plant
    - A chart to show ideal pH

### Stretch goals: 
1) Grid indicates whether soil type is ideal for selected plant i.e. plant placement success indicator that visually alerts user if bad match
2) Customizable grid size
3) Print Chart
4) Save gardens
5) Edit existing garden
6) Expand regions

### Tools Organization
- Create repo inside organization
- Use Figma for wireframes
- Use Miro for tasks
- Use eslintrc file found in main repository
- Use a gitignore file

### File Structure
/assets/
    - /plants/
    - /images/
/chart/
    - chart.js
    - index.html
/data/
    - data.js
/garden/
    - garden.js
    - index.html
/setup/
    - setup.js
    - index.html
/styles/
    - style.css
app.js
index.html
local-storage-utils.js
utils.js
