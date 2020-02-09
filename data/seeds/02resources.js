exports.seed = function(knex, Promise) {
 return knex('resource').insert([
   {id:1, name: 'laptop', description:'computer!'   },
   {id:2, name: 'keyboard', description:'for typing'   },
   {id:3, name: 'power', description:'to power computer'   },
   {id:4, name: 'whiteboard', description:'for brainstorming'   },
   {id:5, name: 'coffee', description:'needed for life'   }
    
 ]);
};
