class Student  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method  
    Info()  
    {  
  console.log(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new Student(101,"Martin Roy");  
var e2=new Student(102,"Duke William");  
e1.Info(); //calling method  
e2.Info();  