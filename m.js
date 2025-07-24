const greeting = document.querySelector('#greeting');
const username = document.querySelector('#username');
username.addEventListener('keyup', () => {
  greeting.textContent = 'Hello ' + this.value;
});