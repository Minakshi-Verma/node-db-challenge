
exports.up = function(knex) {
    return knex.schema

    //-----create "resources" table-----
    .createTable("resources", tbl=>{
        tbl.increments("resource_id");
        
        tbl
        .string("name",255)
        .notNullable() 
        .unique() 
        
        tbl
        .string("description",255)        
    })
 
     //-----Create "projects" table-------
     .createTable("projects", tbl=>{
        tbl.increments("project_id");
        
        tbl
        .string("name",255)        
        .notNullable()  
        
        tbl
        .string("description",255)
       
        tbl
        .boolean("completed").defaultTo(false)
        .notNullable()
    })

     //-------Create "tasks" table-------
     .createTable("tasks", tbl=>{
        tbl.increments("task_id");    

        tbl
        .string("description",255)
        .notNullable() 
        
        tbl
        .string("notes",255)        

        tbl
        .boolean("completed").defaultTo(false)
        .notNullable()
        
        //Foreign Key that references the project_id in projects
        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL        
    })   
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")  
};


