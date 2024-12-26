function calculate() {
    event.preventDefault();

    var x = parseFloat(document.getElementById("num1").value) || 0;
    var y = parseFloat(document.getElementById("num2").value) || 0;
    
    
    var addition = x + y;
    var subtraction = x - y;
    var product = x * y;

    document.getElementById("plus").innerText = addition;
    document.getElementById("minus").innerText = subtraction;
    document.getElementById("product").innerText = product;
  }