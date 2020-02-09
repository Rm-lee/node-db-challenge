exports.seed = function(knex, Promise) {
    return knex('projects').insert([
      {id:1, name:"new site",description:"the new website",completed:false  },
      {id:2, name:"database",description:"building the database",completed:false  },
      {id:3, name:"frontend",description:"building the frontend",completed:false  },
      {id:4, name:"marketing",description:"creating the marketing page",completed:false  },
      {id:5, name:"advertising",description:"find means to advertise",completed:false  },
       
    ]);
   };
   