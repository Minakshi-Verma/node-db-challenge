exports.up = function(knex){
    return knex.schema

    //create projectResource (third) table
    .createTable("projectResource",tbl=>{
        tbl.increments("pr_id");

        //forien key that references the project_id in projects
        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL

        //forien key that references the resource_id in resources
        tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projectResource")
    
};

