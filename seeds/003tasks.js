exports.seed = async function(knex) {
  
  const tasks =[
   {description:"create the marketing page for medCab app", notes:"optional:implement dark-mode",completed:"true", project_id:"1"},
   {description:"create a react app", notes:"",completed:"true", project_id:"1"},
   {description:"add endpoints", notes:"optional: test the endpoints",completed:"true", project_id:"1"},
   {description:"create the marketing page for event planner", notes:"optional:implement dark-mode",completed:"true", project_id:"2"},
   {description:"create a react app", notes:"optional: collaborate with backend developer",completed:"true", project_id:"2"},
   {description:"add endpoints and check the functionality", notes:"",completed:"true", project_id:"2"},
   {description:"create the marketing page for bug tracker", notes:"",completed:"true", project_id:"3"},
   {description:"create the app and collaborate with backend developer for endpoint access", notes:"",completed:"", project_id:"3"},
   {description:"add the end points and test the app for possible bugs", notes:"",completed:"", project_id:"3"},
      
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('tasks').truncate();
  
    return knex('tasks').insert(tasks);   
  };

