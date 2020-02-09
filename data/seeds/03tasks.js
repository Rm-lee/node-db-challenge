exports.seed = function(knex, Promise) {
    return knex('task').insert([
      {id:1, notes: 'some notes', description:'describing' ,project_id:'1',completed:false  },
      {id:2, notes: 'more Notes', description:'more describing!' ,project_id:'2',completed:false    },
      {id:3, notes: 'el notos', description:'describio!' ,project_id:'3',completed:false    },
      {id:4, notes: 'more notes?', description:'this is getting old!' ,project_id:'4',completed:false    },
      {id:5, notes: 'ok with the notes', description:'.........!' ,project_id:'5',completed:false    }
       
    ]);
   };
   