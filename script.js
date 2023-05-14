// Функция для создания объекта студента
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

        




      }
    }


const students = [];
const studentsManager = manageStudents(students);

studentsManager.addStudent('Иван', 20);
studentsManager.addStudent('Маша', 18);
studentsManager.addStudent('Федя', 21);
studentsManager.addStudent('Оля', 22);

studentsManager.deleteStudent('Федя');
console.log(students)