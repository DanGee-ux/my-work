document.getElementById("btn").onclick(command());
       document.getElementById("btnn").onclick(execute());
       function command() {
       let values = document.getElementById("word").value;
       const alert = document.querySelector("#input")
       const dom = document.querySelector("#output");

       if(values === ""){
        document.getElementById("output").textContent = "";
       }
       else if (values === "Avocado") {
           document.getElementById("output").textContent = "correct";
           //dom.styleBorder = "3px";
           //dom.borderRadius = "2px";
           //dom.backgroundColor = "black";
      }
      else if (values === "fruit") {
          document.getElementById("output").textContent = "Hmm...correct";
      }
      else {
        document.getElementById("output").textContent = "Enter Avocado or fruit";
      }
       }

       function execute() {
       let Numbers = document.getElementById("Number").value;
       const alert = document.querySelector("#input");

        if (Numbers === "4121") {
       document.getElementById("input").innerHTML = "correct";

    }
    else if (Number === "1000") {
        document.getElementById("input").innerHTML = "Hmm...";
         }
         else {
            document.getElementById("input").innerHTML = "Enter 4121 or 1000"
         }
      }
    
