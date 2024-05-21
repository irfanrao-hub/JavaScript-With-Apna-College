# Javascript And Classes

## OOP 

## Object
- Collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
object literal

- Constructor
four steps
- jb bi new write krty hy to empty object create hota use instance
- constructor function call new keyword sy
- jo bi this keyword mai wo sb inject ho jaty hai
- phir wo return krwwa deta hai


- Prototypes
- Classes
- Instance (new, this)

## 4 Pillars 
Abstraction
Encapsulation
Inheritance
Polymarphism

Here's what happens behind the scene when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new javascript object.

- A prototype is linked:The newly created object gets linked to the prototype property of the constructor function. This means that it has acces to properties and methods define on the constructor's prototype.

- the constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this,the newly created object, to be the intended return value.

- The new object is returned: After yhe constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc ), the newlu created object, to be the intended return value.

