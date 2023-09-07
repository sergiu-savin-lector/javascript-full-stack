/*
## Example 9 -Collection of courses (includes, indexOf, push, etc.)

Write functions to work with the `courses` collection of training courses:

- `addCourse(name)` - adds a course to the end of the collection
- `removeCourse(name)` - removes a course from the collection
- `updateCourse(oldName, newName)` - changes the name to a new one

```js

addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // ' You already have this course'

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Course with this name was not found'

updateCourse("Express", "NestJS");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
```
*/

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(courseName) {
    if (courses.indexOf(courseName) > -1) {
        console.log(' You already have this course');
        return;
    }
    courses.push(courseName);
}

function removeCourse(courseName) {
    const courseIndex = courses.indexOf(courseName);

    if (courseIndex === -1) {
        console.log('Course with this name was not found');
        return;
    }

    courses.splice(courseIndex, 1);
}

function updateCourse(oldCourse, newCourse) {
    const courseIndex = courses.indexOf(oldCourse);

    if (courseIndex === -1) {
        console.log('Course with this name was not found');
        return;
    }

    courses.splice(courseIndex, 1, newCourse);
}


addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // ' You already have this course'

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Course with this name was not found'

updateCourse("Express", "NestJS");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
