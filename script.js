
function howMuch(required) {
   const defNotes = [100, 50, 20, 10];
   const result = [];

   if (required > 0) {
      for(let i=0; i < defNotes.length; i++) {
         let note = defNotes[i];

         while (required - note >= 0) {
            required -= note;
            result.push(note);
         }
      }
   } else {
      alert('Impossible');
   }
   return result;
}


console.log(howMuch( required = +prompt () )); //

