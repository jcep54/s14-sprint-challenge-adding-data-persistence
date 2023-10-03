/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {project_name: 'build deck', project_description: 'wrap around with space for a grill'},
    {project_name: 'build shelf', project_description: 'this is a bookshelf that will be in the living room'},
    {project_name: 'build chair', project_description: 'a sturdy rocking chair'}
  ]);

  await knex('resources').del()
  await knex('resources').insert([
    {resource_name: 'wood',resource_description:'none yet'},
    {resource_name: 'hammer',resource_description:'none yet'},
    {resource_name: 'screws',resource_description:'none yet'},
    {resource_name: 'wood glue',resource_description:'none yet'},
    {resource_name: 'saw',resource_description:'none yet'}
  ])
  await knex('tasks').del()
  await knex('tasks').insert([
    {task_description:'build deck', project_id:1, task_notes: 'none yet'},
    {task_description:'make sure grill fits', project_id:1, task_notes: 'none yet'},
    {task_description:'build shelf', project_id:2, task_notes: 'none yet'},
    {task_description:'place books', project_id:2, task_notes: 'none yet'},
    {task_description:'build chair', project_id:3, task_notes: 'none yet'},
    {task_description:'sit and read', project_id:3, task_notes: 'none yet'}
  ])


  await knex('project_resources').del()
  await knex('project_resources').insert([
    {project_id:1, resource_id:1},
    {project_id:1, resource_id:3},
    {project_id:1, resource_id:5},
    {project_id:1, resource_id:2},
    {project_id:2, resource_id:1},
    {project_id:2, resource_id:2},
    {project_id:2, resource_id:4},
    {project_id:3, resource_id:1},
    {project_id:3, resource_id:5},
    {project_id:3, resource_id:4},
    
  ])
};
