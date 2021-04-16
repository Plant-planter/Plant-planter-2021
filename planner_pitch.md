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
1) Log in page
2) A Setup page that allows users to choose soil type and region. This will influence data metrics on the chart page
3) A garden page: 
    - Displays a 5x5 grid.
    - Each grid allows you to change soil type
    - Each grid allows for plant selection via dropdown menu
    - Each grid holds one plant image of the selected type
    - Data visualization page: JS  chart displays optimum growth / harvest per plant, and frost dates

### Stretch goals: 
1)Grid indicates whether soil type is ideal for selected plant i.e. plant placement success indicator that visually alerts user if bad match
2) Customizable grid size

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
/data/
    - chart.js
    - data.js
    - index.html
/plant/
    - plant.js
    - index.html
/styles/
    - style.css
app.js
index.html
local-storage-utils.js
utils.js
