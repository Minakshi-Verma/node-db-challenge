
exports.seed = async function(knex) {
  
  const resources =[
   {name:"computer", description:"Dell inspiron 14"},
   {name:"microphone", description:"sony headpones"},
   {name:"webcam", description:""},
   {name:"notebook", description:"college ruled"},
   {name:"pen", description:"ball pen(fine point)"},
   {name:"delivery van", description:""}, 
   {name:"printer", description:"Brother colored printer"},
   {name:"fax machine", description:"Samsung multfax machine"},
   {name:"photocopier", description:"Brother automatic photocopier"}      
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('resources').truncate();
  
    return knex('resources').insert(resources);   
  };
