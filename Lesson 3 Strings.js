'hello';
'some'+'text';                     // Concatenation of strings ==> sometext
typeof 2;                           // tells us the type of something ...= number
typeof 'hello';                     // ...= string
'hello'+3;                        // type coercion hello3
'$20';
'$'+(2095+799)/100;
'Items('+(1+1)+'):$'+(2095+799)/100;
alert('Items('+(1+1)+'):$'+(2095+799)/100);
"I'm";                      //   Escape character
'I\'m';                    //  Escape character
alert('some\ntext');             // \n creates a new line u will get the same effect with the template String
`hello`;                           // template string ==> multi line strings, calculations, values that can change( Interpolation)
`Items(${1+1}):$${(2095+799)/100}`;         // Interpolation when u have a value that will or can change ( variable, maths....)
`some                                  
text`;               // same like \n   multi line string

"Tim says:\"Hello\"";

console.log(`some              
text`)                     // lets us run the code inside the console