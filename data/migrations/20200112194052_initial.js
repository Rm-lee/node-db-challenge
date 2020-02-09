
exports.up = async function(knex) {
 await knex.schema.createTable("projects", (table) => {
  table.increments("id")
  table.string("name").notNullable()
  table.string("description")
  table.boolean("completed").defaultTo(false)
 })

 await knex.schema.createTable("resource", (table) => {
  table.increments("id")
  table.string("name").notNullable()
  table.string("description")
 })

 await knex.schema.createTable("task", (table) => {
  table.increments("id")
  table.string("notes")
  table.boolean("completed").defaultTo(false)
  table.string("description").notNullable()
  table.integer("project_id")
  .notNullable()
  .references("id")
  .inTable("projects")

 })


await knex.schema.createTable("project_parts", (table) => {
  table.increments("id")
 table.integer("resource_id")
 .notNullable()
 .references("id")
 .inTable("resource")
 table.integer("project_id")
 .notNullable()
 .references("id")
 .inTable("projects")
})
};

exports.down = async function(knex) {
 await knex.schema.dropTableIfExists("project_parts")
 await knex.schema.dropTableIfExists("task")
 await knex.schema.dropTableIfExists("resource") 
  await knex.schema.dropTableIfExists("projects")
};
