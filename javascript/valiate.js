const pizza = function () {
    const name = document.querySelector("input[name=Name]");
    if (name.value == "") {
      alert("Fill your username");
      return false;
    }
  
    const Phonenumber = document.querySelector("input[name=Phonenumber]");
    if (Phonenumber.value == "") {
      $number = min(max(intval($number), 1), 11);
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