import { Home } from "./components/Home.js";
import { Signup } from "./components/SignUp.js";
import { Login } from "./components/Login.js";
import { Profile } from "./components/Profile.js";
const root = document.getElementById("root");
let paths = [];





// window.addEventListener("beforeunload", function (event) {
//   // Customize the message shown to the user
//   const confirmationMessage =
//     "You have unsaved changes. Are you sure you want to leave?";

//   // Standard way to display a confirmation dialog
//   event.preventDefault(); // For some browsers
//   // event.returnValue = confirmationMessage; // For most modern browsers

//   // Optionally, you can log the message or perform other actions
//   console.log(confirmationMessage);
//   // This will trigger the confirmation dialog in supported browsers
//   this.sessionStorage.setItem("currentRoute", paths[paths.length - 1]);
//   return ;
// });



var routes = {
  "/home": Home,
  "/signup": Signup,
  "/login": Login(),
  "/profile": Profile({
    name: "mohamed",
    email: "mohamed@gmail.com",
    birthDate: "2015-01-01",
  }),
};

changeRoute("/home");


function changeRoute(newRoute = "/home") {
  // history.pushState("", "", newRoute);
  paths.push(newRoute);
  render();  
}

function render() {
  console.log(paths)
  const route = paths[paths.length - 1];
  console.log(route);
  root.innerHTML = routes[route]
    ? `<div class="container">
        ${paths.length > 1 && "<div class\=\"nav\" id=\"back\"><-</div>"}
    ${routes[route]}
    </div>`
    : `<div>
    <div class="nav" id="back"><-</div>
    not found
    </div>`;


  paths.length > 1 && handleBack();

  if (paths[paths.length - 1] == "/home") {
    const signupBtn = document.getElementById("signupBtn");
    const loginBtn = document.getElementById("loginBtn");
    signupBtn.addEventListener("click", () => changeRoute("/signup"));
    loginBtn.addEventListener("click", () => changeRoute("/login"));
  }

  if (paths[paths.length - 1] == "/signup") {
    const signForm = document.getElementById("signupForm");
    signForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const birthDate = document.getElementById("birthDate").value;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ name, email, password, birthDate });
      localStorage.setItem("users", JSON.stringify(users));
      alert("sign up success");
      changeRoute("/login");
    });
  }

  if (paths[paths.length - 1] == "/login") {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        alert("Login successful!");
        changeRoute("/profile");
      } else {
        alert("Invalid email or password!");
      }
    });
  }
}


function handleBack (){
  console.log("Back")
  const backBtn = document.getElementById("back")

  backBtn.onclick = (e)=>{
    e.preventDefault();
    paths.pop();
    render();
  }
}



