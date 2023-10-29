// import "./style.css";


// document.body.style.backgroundColor = "gray";

// let subMenu=document.getElementbyId("submenu");

// let subLink = document.createElement("a");
// let textNode = document.createTextNode("Nepalese");
// subLink.appendChild(textNode);
// subLink.href="https:/www.gmail.com";
// document.body.appendChild(textNode);

    //   var a = document.createElement('a');
    //   var linkText = document.createTextNode("Nepalese");
    //   a.appendChild(linkText);
    //   a.classList.add("menu")
    //   a.title = "my title text";
    //   a.href = "http://example.com";
    //   document.body.appendChild(a);

    //   var a = document.createElement('a');
    //   var linkText = document.createTextNode("Indian");
    //   a.appendChild(linkText);
    //   a.classList.add("menu")
    //   a.title = "my title text";
    //   a.href = "http://example.com";
    //   document.body.appendChild(a);


    //   var a = document.createElement('a');
    //   var linkText = document.createTextNode("Chinese");
    //   a.appendChild(linkText);
    //   a.classList.add("menu")
    //   a.title = "my title text";
    //   a.href = "http://example.com";
    //   document.body.appendChild(a);


    
const subMenu = [
    { text: "Nepalese  ", href: "#h1" },
    { text: "Indian  ", href: "#h2" },
    { text: "Chinese  ", href: "#h3" },
    { text: "Korean  ", href: "/account" }
  ];

    const subMenuBar = document.querySelector("#submenu");
  

    for (const link of subMenu) {
        const aElement = document.createElement("a");
        // aElement.style.margin="10px";
        aElement.classList.add("menu")
        aElement.textContent = link.text;
        aElement.href = link.href;
        subMenuBar.appendChild(aElement);
      }


     

      // sign up form
      const form = document.getElementById("form");
      const name = form.elements["name"];
      const email = form.elements["email"];
      const zip = form.elements["zip"];
      const state = form.elements["state"];
      const password = form.elements["password"];
      
      form.addEventListener("submit", validate);
      
      // The big validation function.
      // While this may seem like a lot of functions we
      // need to build, most will be very simple!
      function validate(evt) {
        const nameVal = validateName();
        if (nameVal === false) {
          evt.returnValue = false;
          return false;
        }
      
        const emailVal = validateEmail();
        if (emailVal === false) {
          evt.returnValue = false;
          return false;
        }
      
        const zipVal = validateZip();
        if (zipVal === false) {
          evt.returnValue = false;
          return false;
        }
      
        const stateVal = validateState();
        if (stateVal === false) {
          evt.returnValue = false;
          return false;
        }
      
        const passwordVal = validatePassword();
        if (passwordVal === false) {
          evt.returnValue = false;
          return false;
        } else{
             
        confirm(`Name: ${nameVal}
      Email: ${emailVal}
      State: ${stateVal}
      Zip Code: ${zipVal}
      Password: **********`);
      
        return true;
        }
      }
      
      // Simple email validation.
      // We added a check to make sure the name exists!
      // Note that this could also be solved via adding
      // the "required" attribute to the HTML, but the
      // focus of this activity is DOM events.'
      function validateEmail() {
        let emailVal = email.value;
      
        if (emailVal === "") {
          alert("Please provide an email.");
          email.focus();
          return false;
        }
      
        const atpos = emailVal.indexOf("@");
        const dotpos = emailVal.lastIndexOf(".");
      
        if (atpos < 1) {
          alert(
            "Your email must include an @ symbol which must not be at the beginning of the email."
          );
          email.focus();
          return false;
        }
      
        if (dotpos - atpos < 2) {
          alert(
            "Invalid structure: @.\nYou must include a domain name after the @ symbol."
          );
          email.focus();
          return false;
        }
      
        return emailVal;
      }
      
      // Name Validation
      function validateName() {
        if (name.value === "") {
          alert("Please provide a name.");
          name.focus();
          return false;
        }
        return name.value;
      }
      
      // Password Validation
      function validatePassword() {
        if (password.value === "") {
          alert("Please provide a password.");
          password.focus();
          return false;
        }
        return password.value;
      }
      
      // State Validation
      function validateState() {
        if (state.value === "") {
          alert("Please provide a state.");
          state.focus();
          return false;
        }
        return state.value;
      }
      
      // Zip Code Validation
      function validateZip() {
        if (zip.value === "") {
          alert("Please provide a zip code.");
          zip.focus();
          return false;
        }
      
        if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
          alert("Zip codes must be in the format #####.");
          zip.focus();
          return false;
        }
      
        return zip.value;
      }
      


      //Footer

      function createFooter() {
        // Create a footer element
        const footer = document.createElement('footer');
        footer.style.backgroundColor = '#212529';
        footer.style.color="white"
        footer.style.padding = '20px';
        footer.style.textAlign = 'center';

        // Create content for the footer
        var footerContent = document.createElement('p');
        footerContent.textContent = '© 2002-2023 Asian HotPot, 1223 Broadway, NewYork, 12345';
        // footerContent.style.fontFamily = 'Arial, sans-serif';

        // Append the content to the footer
        footer.appendChild(footerContent);

        // Append the footer to the document body
        document.body.appendChild(footer);
    }

    // Call the function to create the footer
    createFooter();