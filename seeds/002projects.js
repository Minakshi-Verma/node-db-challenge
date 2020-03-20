
exports.seed = async function(knex) {
  
  const projects =[
   {name:"medCab app", description:"Create an app wher user can login and keep the record of medicines he ever prescribed and suggested by the doctor.", completed:"true"},
   {name:"Event planner app", description:"Create an app where user can login and create an event and add guests", completed:"true"},
   {name:"Bug tracker app", description:"Create an app where user can create and track the tickets he created.", completed:""},
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('projects').truncate();
  
    return knex('projects').insert(projects);   
  };
