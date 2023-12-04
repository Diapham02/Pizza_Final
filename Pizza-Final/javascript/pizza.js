        
            filterSelection("all")
        function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
        }
        

        
      
        function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
            }
        }
        }
      

    
        function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1); 
            }
        }
        element.className = arr1.join(" ");
        }
        


     
        function getReceipt() {
            var text1 = "<h3>You ordered: </h3>";
            var runningTotal = 0;
            var sizeTotal = 0;
            var sizeArray = document.getElementsByClassName("size");

          
            for (var i = 0; i < sizeArray.length; i++) {
                if (sizeArray[i].checked) {
                    var selectedSize = sizeArray[i].value;
                    text1 = text1+selectedSize+"<br>";
                }
            }

          
            if (selectedSize === "Personal Pizza") {
                sizeTotal = 6;
            }   
            else if (selectedSize === "Medium Pizza") {
                sizeTotal = 10;
            }
            else if (selectedSize === "Large Pizza") {
                sizeTotal = 14;
            }
            else if (selectedSize === "Extra Large Pizza") {
                sizeTotal = 16;
            }

            

         
            runningTotal = sizeTotal;

            
            console.log("START of SIZE");
            console.log(selectedSize+" = $" + sizeTotal + ".00");
            console.log("size text1: " + text1);
            console.log("subtotal: $" + runningTotal + ".00");
            console.log("END of SIZE");

            
            getMeat(runningTotal,text1);
        };

        
        function getMeat(runningTotal,text1) {
            var meatTotal = 0;
            var selectedMeat = [];
            var meatArray = document.getElementsByClassName("meat");
            console.log("START of MEAT");

            
            for (var j = 0; j <meatArray.length; j++) {
                if (meatArray[j].checked) {
                    selectedMeat.push(meatArray[j].value);
                    console.log("selected meat item: " + meatArray[j].value + "");
                    text1 = text1+meatArray[j].value+"<br>";
                }
            }

            
            var meatCount = selectedMeat.length;

            
            if (meatCount > 1) {
                meatTotal = (meatCount -1);
            }
            else {
                meatTotal = 0
            }

            
            runningTotal = (runningTotal + meatTotal);
            console.log("total selected meat items: " + meatCount);
            console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
            console.log("meat text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of MEAT");

           
            getVeg(runningTotal,text1);
        };

        
        function getVeg(runningTotal,text1) {
            var vegTotal = 0;
            var selectedVeg = [];
            var vegArray = document.getElementsByClassName("veggies");
            console.log("START of VEG");

            
            for (var k = 0; k <vegArray.length; k++) {
                if (vegArray[k].checked) {
                    selectedVeg.push(vegArray[k].value);
                    console.log("selected veg items: " + vegArray[k].value +"");
                    text1 = text1+vegArray[k].value+"<br>";
                }
            }

            
            var vegCount = selectedVeg.length;
            if (vegCount > 1) {
                vegTotal = (vegCount -1);
            }
            else {
                vegTotal = 0
            }

            
            runningTotal = (runningTotal + vegTotal);
            console.log("total selected veg items: " + vegCount);
            console.log(vegCount + " veg - 1 free veg = " + "$" + vegTotal + "0.00");
            console.log("veg text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of VEG");

            
            getCheese(runningTotal,text1);
        }

        function getCheese(runningTotal,text1) {
            var cheeseTotal = 0;
            var selectedCheese = [];
            var cheeseArray = document.getElementsByClassName("cheeses");

           
            for (var l = 0; l <cheeseArray.length; l++) {
                if (cheeseArray[l].checked) {
                    var selectedCheese = cheeseArray[l].value;
                    console.log("START of CHEESE");
                    console.log("selected cheese items: " + cheeseArray[l].value + "");
                    text1 = text1+cheeseArray[l].value+"<br>";
                }
            }

         
            var cheeseCount = selectedCheese.length;

           
            if (selectedCheese === "Mozzarella Cheese") {
                cheeseTotal = 0;
            }   
            else if (selectedCheese === "Extra Mozzarella") {
                cheeseTotal = 3;
            }

          
            runningTotal = (runningTotal + cheeseTotal);
            console.log("cheese value: " + cheeseTotal);
            console.log("cheese text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of CHEESE");

          
            getSauce(runningTotal,text1);
        }

       
        function getSauce(runningTotal,text1) {
            var sauceArray = document.getElementsByClassName("sauces");
            console.log("START of SAUCE")
            
            for (var l = 0; l <sauceArray.length; l++) {
                if (sauceArray[l].checked) {
                    var selectedSauce = sauceArray[l].value;
                }
            }
            

          
            text1 = text1+selectedSauce+"<br>";

         
            console.log("Selected Sauce: " + selectedSauce);
            console.log("sauce text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of SAUCE");
            
           
            getCrust(runningTotal,text1);
        }

       
        function getCrust(runningTotal,text1) {
            var crustTotal = 0;
            var selectedCrust = [];
            var crustArray = document.getElementsByClassName("crusts");

           
            for (var m = 0; m <crustArray.length; m++) {
                if (crustArray[m].checked) {
                    var selectedCrust = crustArray[m].value;
                    console.log("START of CRUST");
                    console.log("selected crust items: " + crustArray[m].value + "");
                    text1 = text1+crustArray[m].value+"<br>";
                }
            }

            
            var crustCount = selectedCrust.length;

          
            if (selectedCrust === "Cheese Stuffed Crust") {
                crustTotal = 3;
            }   
            else {
                cheeseTotal = 0;
            }

           
            runningTotal = (runningTotal + crustTotal);
            console.log("crust value: " + crustTotal);
            console.log("crust text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of CRUST");
            document.getElementById("disappearing-text").innerHTML = "";
            document.getElementById("showText1").innerHTML = "<strong>Ok let you add your payment</strong>";
            document.getElementById("showText2").innerHTML = text1;
            document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal + ".00" + "</strong></h3>";
        }
        
        function clearAll() {
            document.getElementById("disappearing-text").innerHTML = "<h4>Oops! Try building a pizza first.</h4>";
            document.getElementById("frmMenu").reset();
            document.getElementById("showText1").innerHTML = "";
            document.getElementById("showText2").innerHTML = "";
            document.getElementById("totalPrice").innerHTML = "";
        };
        //Oder+regis
        const pizza = function () {
            const name = document.querySelector("input[name=Name]");
            if (name.value == "") {
              alert("Fill your username");
              return false;
            }
          
            const Phonenumber = document.querySelector("input[name=Phonenumber]");
            if (Phonenumber.value == "") {
              alert("Fill your Phonenumber");
              return false;
            }
          
            const Password = document.querySelector("input[name=Password]");
            if (Password.value == "") {
              alert("Fill your Password");
              return false;
            }
          
            const Email = document.querySelector("input[name=Email]");
            if (Email.value == "") {
              alert("Fill your Email");
              return false;
            }
          
            const male = document.querySelector("input[value=Male]");
            const Female = document.querySelector("input[value=Female]");
            if (male.checked == false && Female.checked == false) {
              alert("Fill your gender");
              return false;
            }
          
            const MeatPz = document.querySelector("input[value=MeatPizza]");
            const VesPz = document.querySelector("input[value=VegetarianPizza]");
            const SeaPz = document.querySelector("input[value=SeafoodPizza]");
          
            if (
              MeatPz.checked == false &&
              VesPz.checked == false &&
              SeaPz.checked == false
            ) {
              alert("Pick one type of pizza");
              return false;
            }
            return true;
          };
          
          const pizza1 = function () {
            const number = document.querySelector("input[name=Number]");
            if (number.value == "") {
              alert("Fill your number");
              return false;
            }
          
            const Deliveryaddress = document.querySelector("input[name=Deliveryaddress]");
            if (Deliveryaddress.value == "") {
              alert("Fill your Deliveryaddress");
              return false;
            }
          
            const EmailContact = document.querySelector("input[name=EmailContact]");
            if (EmailContact.value == "") {
              alert("Fill your EmailContact");
              return false;
            }
          
            const cash = document.querySelector("input[value=Pickup]");
            const online = document.querySelector("input[value=Online]");
          
            if (cash.checked == false && online.checked == false) {
              alert("Fill your payment method");
              return false;
            }
            const visa = document.querySelector("input[value=Visa]");
            const master = document.querySelector("input[value=MasterCard]");
            const AE = document.querySelector("input[value=AmericanExpress]");
            if (visa.checked == false && master.checked == false && AE.checked == false) {
              alert("Select one of these payment methods");
              return false;
            }
          
            const cardNum = document.querySelector("input[name=cardNum]");
            if (cardNum.value == "") {
              alert("Fill your card number");
              return false;
            }
            const Date = document.querySelector("input[name=Date]");
            if (Date.value == "") {
              alert("Fill your card date");
              return false;
            }
            const CVC = document.querySelector("input[name=CVC]");
            if (CVC.value == "") {
              alert("Fill your card CVC");
              return false;
            }
          };
          
        
          