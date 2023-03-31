var num1 = 0;
var num2 = 0;
var operator = ['+', '-', '/', '*'];

const add = function(num1, num2) {
    return num1 + num2;
  }
  
  const subtract = function(num1, num2) {
    return num1 - num2;
  }
  
  const multiply = function(num1, num2) {
    return num1 * num2;
  }
  
  const divide = function(num1, num2) {
    return num1 / num2;
  }
  


  function operate(num1, operator, num2) {
    let result = 0;
    switch (operator) {
      case '+':
      result = add(num1, num2);
      break;
      case '-':
        result = subtract(num1, num2);
        break;
        case '*':
          result = multiply(num1, num2);
          break;
          case '/':
            result = divide(num1, num2);
            break;
            default:
              console.log("Invalid Operator");
    }
    return result;
  }
  