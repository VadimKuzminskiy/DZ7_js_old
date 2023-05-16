
function createStudent(name, age) {
    return {
      name: name,
      age: age,
      marks: []
    };
  }

    function manageStudents(students){
      return{
        addStudent: function(name,age){
          // let student = createStudent(name, age);
          students.push(createStudent(name,age))
        },

        deleteStudent: function(name){
          let index = students.findIndex(function(student){
            return student.name === name
          });
          if(index !== -1) {
            students.splice(index, 1)
          }
        },

        addMarks: function(name, mark) {
          let student = students.find(function(student){
            return student.name === name
          });
          if(student) {
            student.marks.push(mark)
          }
        },

        averegeMark: function(name) {
          let student =students.find(function(student){
            return student.name === name
          });
          if(student) {
            
          }
        }


      }
    }


const students = [];
const studentsManager = manageStudents(students);

studentsManager.addStudent('Иван', 20);
studentsManager.addStudent('Маша', 18);
studentsManager.addStudent('Федя', 21);
studentsManager.addStudent('Оля', 22);
console.log(students);

// studentsManager.deleteStudent('Федя');
console.log(students);

studentsManager.addMarks('Иван', 5);
studentsManager.addMarks('Маша', 5);
studentsManager.addMarks('Федя', 2);
studentsManager.addMarks('Оля', 4);
studentsManager.addMarks('Иван', 5);
studentsManager.addMarks('Федя', 2);
console.log(students);

