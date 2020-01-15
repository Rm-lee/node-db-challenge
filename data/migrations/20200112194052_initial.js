
exports.up = async function(knex) {
 await knex.schema.createTable("project", (table) => {
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
  .inTable("project")

 })


await knex.schema.createTable("project_parts", (table) => {
 table.integer("resource_id")
 .notNullable()
 .references("id")
 .inTable("resource")
 table.integer("project_id")
 .notNullable()
 .references("id")
 .inTable("project")
 table.primary(["resource_id","project_id"])
})
};

exports.down = async function(knex) {
 await knex.schema.dropTableIfExists("project_parts")
 await knex.schema.dropTableIfExists("task")
 await knex.schema.dropTableIfExists("resource") 
  await knex.schema.dropTableIfExists("project")
};
