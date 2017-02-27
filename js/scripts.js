
function Todo(inputs, timeline, who, notes) {
  this.inputs = inputs;
  this.timeline = timeline;
  this.who = who;
  this.notes = notes;
}

Todo.prototype.listDisplay = function () {
  return this.inputs + " , " + this.timeline;
}

$(function(){
  $("form#todo").submit(function(event) {
    event.preventDefault();

    var inputtedInputs = $("#inputs").val();
    var inputtedTimeline = $("#timeline").val();
    var inputtedWho = $("#who").val();
    var inputtedNotes = $("#notes").val();

    var newTodo = new Todo(inputtedInputs, inputtedTimeline, inputtedWho, inputtedNotes);


    $("ol#list").append("<li id=\""+ newTodo.who+ "\" >" + newTodo.listDisplay() + "</li>");


    console.log(inputtedInputs);
    console.log(inputtedWho);
    console.log(inputtedNotes);

    console.log(newTodo);
    $("ol li").last().on({
      mouseover: function(){
        $(this).toggleClass("backGround");
      },
      dblclick: function(){
        $(this).fadeOut('slow');
      }
    });
    });

    // $(document).on('click', 'li', function(){
    //   $(this).toggleClass("backGround");
    // });
    // $(document).on('dblclick', 'li', function(){
    //   $(this).fadeOut('slow');
    // });
    $("ol").sortable();
  });
