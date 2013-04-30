Parse.initialize("LLHx2XYQ6XLq1ZZj8YEP0iqorXoKtORMIixYEKNt", "Gz8k5NT2CsV19kAxWFKy5mBxjmsq8QnVmIS5JPUE");


$(document).ready(function() {
  // Hide top child/input field
  $('.column').hide();
  var query = new Parse.Query(Task);
  query.find({
    success: function(results) {
      window.tasks = results;
      renderTasks(results);
      console.log("Got all " + results.length + " tasks");
    },
    error: function(object, error) {
      console.log("Error" + error.message);
    }
  });
});

var Task = Parse.Object.extend('Task')
// Renders the tasks onto each input field
var renderTasks = function(tasks) {
  console.log('Checkout the tasks in the database: ', tasks);

  // Loops through all the tasks to get id
  for(var i = 0; i < tasks.length; i++) {
    var id = tasks[i].id
    
    query = new Parse.Query(Task)

    // looks up id to get description
    query.get(id,{
      success: function(result) {
        console.log(result.get('description'))
        // Creates column clone variable
        var taskColumn = $('.column').clone(true).get(0);
        // Clone children and insert description value into task input field
        $(taskColumn).children('.task').val(result.get('description'));

        // Saves each task when clicking on save button
        $(taskColumn).children('.save-button').click(function() {
          // Set task value into the task input field
          var taskElem = $(taskColumn).children('.task');
          result.set('description', taskElem.val() );

          result.save(null, {
            success: function(result) {
              console.log('Saved task');
              taskElem.addClass('saved-task');
            },
            error: function(result, error) {
              console.log('ERROR! Try again');
              taskElem.addClass('failed-task');
            }
          });
        });
        // Deletes each task when clicking on delete button
        $(taskColumn).children('.delete-button').click(function(){
          result.destroy({
            success: function(result) {
              console.log('Deleted task');
              $(taskColumn).remove();
            },
            error: function(result, error) {
              console.log('ERROR! Try again');
              taskElem.addClass('failed-task');
            }
          })
        })
        $('.to-do-list').append($(taskColumn));  
        $(taskColumn).show();
      } 
    });
  }
}  






  // var description = '<h3>' + tasks[i].get('description') + '</h3>';

  // $('.tab-button').click(function() {
  //   $('.tab-button').removeClass('active');
  //   $(this).addClass('active');
  //   var id = $(this).attr('id');
  //   $('.main-wrapper').removeClass('data-active');
  //   $('.' + id).addClass('data-active');

   
  // Tab functionality


  // var task = new Task


  


    // task.save({
    //   description: $('.task').val()
    // }, {
    //   success: function(result) {
    //     console.log('Saved task!');
    //     $('.task').addClass('saved-task');  
    //   },
    //   error: function(result, error) {
    //     console.log('There has been an error');
    //     $('.task').addClass('failed-task');
    //   }
    // })
  
  // Save tasks

  // $('.completed-list').click(function() {
  //   var query = new Parse.Query(Task)
  //   query.find({
  //     success: function(results) {
  //       window.tasks = results;
  //       renderTasks(results);
  //       console.log("Got all " + results.length + " tasks");
  //     },
  //     error: function(object, error) {
  //       console.log("Error" + error.message)
  //     }

  //   })
  // })
// })






    // $('.js-recipes-container ul').append('<li>'+firstname+lastname+gender+'</li>');

    // var li = $('<li id="' + id + '">'+description+'</li>').click(function(){
    //   var id = $(this).attr('id');
    //   console.log(id);

//       query = new Parse.Query(Task)

//       query.get(id,{
//         success: function(result) {
//           console.log(result.get('description'))
//           renderSingleTask(result)
//         } 
//       })
//     });
//     $('.retrieve-tasks ul').append(li);
//   }
// }


// // render just one recipe
// var renderSingleTask = function(task) {
//   $('.completed-list').hide();
//   $('.column-single-name').show(); 
//   var description = '<br>' + '<input value=' + task.get('description') + '>' + '</input>' + '<br>';
//   $('.column-single-name').html(description);
  
  
  
// }






