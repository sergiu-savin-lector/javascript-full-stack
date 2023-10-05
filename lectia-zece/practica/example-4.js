/*
## Example 4 - Notes

Write a `Notes` class that manages the collection of notes in the `items` property.
A note is an object with `text` and `priority` properties. Add a static
property `Priority` to the class, which will store the object with priorities.


Add methods`addNote(note)`, `removeNote(text)` and
`updatePriority(text, newPriority)`.
*/

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  }

  constructor(notes) {
    this.items = notes;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = this.items.findIndex( (el) => {
      return el.text === text;
    });

    if (index === -1) {
      console.log('Nu exista nota cu acest text');
      return;
    }
    this.items.splice(index, 1);
  }

  updatePriority(text, newPriority) {
    const index = this.items.findIndex( (el) => el.text === text);
    if (index === -1) {
      console.log('Nu exista nota cu acest text');
      return;
    }
    this.items[index].priority = newPriority;
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: "My second note",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote("My first note");
console.log(myNotes.items);

myNotes.updatePriority("My second note", Notes.Priority.HIGH);
console.log(myNotes.items);

myNotes.updatePriority('My first note', Notes.Priority.HIGH);
console.log(myNotes.items);

