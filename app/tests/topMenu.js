var topMenuOptions = {};
var topMenuOptionsList = [
  {name: "Classes", url: "/", hidden: false, active: true, level: "all"},
  {name: "Lessons", url: "lessons.html", hidden: false, active: false, level: 'teacher'},
  {name: "Libraries", url: "libraries.html", hidden: false, active: false, level: 'teacher'},
  {name: "Assignments", url: "assignments.html", hidden: true, active: false, level: 'student'}
];
topMenuOptions.all = function(){
  return topMenuOptionsList;
}
