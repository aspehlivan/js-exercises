console.log( 'file loaded' );


document.getElementById('mySpan').addEventListener('click', function() {
   let visibility = document.getElementById('myDiv').style.visibility;

   if(visibility === 'hidden') {
      document.getElementById('myDiv').style.visibility = "";
      console.log('if');
   } else {
      document.getElementById('myDiv').style.visibility = "hidden";
      console.log('hidden');
   }
});