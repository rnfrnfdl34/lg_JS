const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input[type='email']");
const passwordInput = document.querySelector("#login-form input[type='password']");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const email = loginInput.value;
  const password = document.querySelector("#login-form input[type='password']").value;
  
  // 서버로 데이터를 전송합니다.
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => {
    if (response.ok) {
      return response.text(); // 인증 성공 시 텍스트 데이터를 반환합니다.
    } else {
      throw new Error('Authentication failed');
    }
  })
  .then(data => {
    console.log('Authentication successful'); // 이 줄을 추가합니다.
    greeting.innerText = `Hello ${email}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, email);
    loginForm.classList.add(HIDDEN_CLASSNAME);
  })
  .catch(error => {
    console.error(error);
    alert('Authentication failed. Please try again.');
  });
}

// 저장된 사용자 이름을 가져와서 화면에 출력합니다.

