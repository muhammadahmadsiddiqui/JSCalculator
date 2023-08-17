document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button");
    var parent = document.getElementById("historyList");
  
    let currentExpression = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
  
        if (buttonText === "=") {
          try {
            
            let evalExpression = currentExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E")
            .replace(/sin\(/g, "Math.sin(")
            .replace(/cos\(/g, "Math.cos(")
            .replace(/tan\(/g, "Math.tan(")
            .replace(/sqrt\(/g, "Math.sqrt(");

            
            
            const result = eval(evalExpression);

            var newListItem = document.createElement("li");
            newListItem.textContent = evalExpression.replace("Delete", "");
            
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "";
            deleteButton.classList.add("delete-button");

            newListItem.appendChild(deleteButton);

            parent.appendChild(newListItem);

            inputField.value = result;
            currentExpression = result.toString();

          } catch (error) {
            inputField.value = "Error";
            currentExpression = "";
          }
        } else if (buttonText === "AC") {
          inputField.value = "";
          currentExpression = "";
        } 
        
        else if (buttonText === "sqrt") {
          currentExpression += "sqrt(";
          inputField.value = currentExpression;
        } else if (buttonText === "sin") {
          currentExpression += "sin(";
          inputField.value = currentExpression;
        } else if (buttonText === "cos") {
          currentExpression += "cos(";
          inputField.value = currentExpression;
        } else if (buttonText === "tan") {
          currentExpression += "tan(";
          inputField.value = currentExpression;
        } else if (buttonText === "^") {
          currentExpression += "**";
          inputField.value = currentExpression;
        } else if (buttonText === "π") {
          currentExpression += "π";
          inputField.value = currentExpression;
        } else if (buttonText === "e") {
          currentExpression += "e";
          inputField.value = currentExpression;
        } else {
          currentExpression += buttonText;
          inputField.value = currentExpression;
        }
      });
    });

    parent.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
      } else if (event.target.tagName === "LI") {
        inputField.value = event.target.textContent;
        currentExpression = event.target.textContent;
      }
    });
  });


  