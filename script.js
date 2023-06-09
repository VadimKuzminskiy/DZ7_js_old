function createStudent(name, age) {
    return {
        age: age,
        name: name,
        marks: []
    };
}

function manageStudents(students) {
    return {

        // 1. добавление нового студента
        addStudent: function(name, age){
            students.push(createStudent(name, age));
        },

         // 2. удаление студента по имени
         deleteStudent: function(name){
            let index = students.findIndex(function(student) {
                return student.name === name;
            });
            if(index !== -1) {
                students.splice(index, 1);
            }
         },

         // 3. добавление оценки студенту за занятие(№ занятия === индекс оценки в массиве)
         addMarks: function(name, mark, lessonNumber) {
            let student = students.find(function(student){
                return student.name === name;
            });
            if(student){
                student.marks.push(mark);
            };
         },

         // 4. получение средней оценки студента по имени
         averageMark: function(name) {
            let student = students.find(function(student){
                return student.name === name;
            });
            if(student){
                let sumMarks = student.marks.reduce(function(sum, mark){
                    return sum + mark
                }, 0);
                return sumMarks / student.marks.length
            }
         },

        // 5. получение средней оценки группы за занятие
        averageGroupMark: function(lessonNumber) {
            let sumMarks = 0;
            let countStudents = 0;

            students.forEach(function(student) {
                if (student.marks[lessonNumber] !== undefined) {
                    sumMarks += student.marks[lessonNumber];
                    countStudents++;
                }
            });

            if (countStudents > 0) {
                return sumMarks / countStudents;
            } else {
                return 0;
            }
        },


         // 6. получение отсортированного по именам списка студентов
         sortStudents: function() {
            return students.slice(0).sort(function(a, b){
                return a.name.localeCompare(b.name);
            });
         },

         // 7. получение отсортированного по среднему баллу списка студентов
         sortStudentMarks: function() {
            let sortMarks = students.map(function(student){
                return {
                    name: student.name,
                    avg: student.marks.reduce(function(sum, num){
                        return sum + num 
                    }, 0) / student.marks.length
                }
            });

            sortMarks.sort(function(a, b){
                return b.avg - a.avg;
            });
            return sortMarks; 
         }
    }
}

const students = [];
const studentsManager = manageStudents(students);
  
  studentsManager.addStudent('Иван', 20);
  studentsManager.addStudent('Маша', 18);
  studentsManager.addStudent('Федя', 21);
  studentsManager.addStudent('Оля', 22);
  studentsManager.addStudent('Аня', 22);
  console.log(students);

//   studentsManager.deleteStudent('Федя');
  console.log(students);

  studentsManager.addMarks('Иван', 5, 1);
  studentsManager.addMarks('Маша', 5,1);
  studentsManager.addMarks('Федя', 2, 1);
  studentsManager.addMarks('Оля', 4, 1);
  studentsManager.addMarks('Иван', 5, 2);
  studentsManager.addMarks('Федя', 2, 2);
  studentsManager.addMarks('Аня', 5, 1);
  studentsManager.addMarks('Аня', 4, 2);
  console.log(students);

  console.log(studentsManager.averageMark('Иван'));
  console.log(studentsManager.averageMark('Аня'));

  console.log(studentsManager.averageGroupMark(1));

  console.log(studentsManager.sortStudents());

  console.log(studentsManager.sortStudentMarks());