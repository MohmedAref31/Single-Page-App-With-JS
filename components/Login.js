export const Login = ()=>{
return (`<div class="login">
    <h1>login</h1>
    <form id="loginForm">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Enter Your Email" required>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Enter Your Password" required>
      <button type="submit">login</button>
    </form>
  </div>`)
}
