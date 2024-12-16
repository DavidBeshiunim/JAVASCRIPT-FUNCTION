function greet() {
    document.write("welcome to the class!");
}

// Call the function
greet();

document.write("<br>");
// Parameter:Information passed to the function
function welcome(name) {
    document.write("welcome " + name + "<br>");
    // document.write("</br>")
}

welcome("David");
welcome("Joseph");

// return
function add(a, b) {
    var result = a + b;
    return result;
}

document.write(add(2, 3));