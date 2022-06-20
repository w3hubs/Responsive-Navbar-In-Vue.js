<template>
  <section v-if="!isHidden">
    <form>
      <input type="text" name="username" placeholder="Username*" required>
      <input type="password" name="password" placeholder="Password*" required>
      <p>Create Account now?<span v-on:click="isHidden = !isHidden">Regitser Now</span></p>
      <button type="button">Login </button>
    </form>
  </section>
  <section v-if="isHidden">
    <form>
      <input type="text" name="" placeholder="Username*" required>
      <input type="password" name="" placeholder="Password*" required>
      <input type="email" name="" placeholder="Email*" required>
      <input type="number" name="" placeholder="Number*" required>
      <p>Already have an account?<span v-on:click="isHidden = !isHidden">Login Now</span></p>
      <button type="button">Regitser </button>
    </form>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,300i,400,500,500i,600,700');

body {
  padding: 0;
  margin: 0;
  background: #f2f4f6;
  font-family: 'Poppins', sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

span {
  color: #42b883;
  padding-left: 5px;
  cursor: pointer;

}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  padding: 30px;
  border-radius: 4px;
  width: 40vw;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

input {
  margin-top: 25px;
  height: 60px;
  outline: none;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #42b883;
  transition: .2s;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  width: 100%;
}

input:hover {
  border: 1px solid #42b883;
  transition: .4s;
}

button {
  background: #42b883;
  border-radius: 8px;
  outline: none;
  border: 0px;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  height: 60px;
  width: 100%;

}
input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
}
::placeholder {
  font-size: 20px;

}

@media(max-width: 824px) {
  form {
    width: 60vw;
  }
}

@media (max-width: 475px) {
  form {
    width: 70vw;
  }
}
</style>
<script>
export default {

  data(){
   return{ isHidden: false }
  },
  
}

</script>