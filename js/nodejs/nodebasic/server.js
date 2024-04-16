const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./public/User.js');
const bodyParser = require('body-parser'); // body-parser 미들웨어 추가

// body-parser 미들웨어 설정
app.use(bodyParser.json());

// MongoDB와의 연결 설정
mongoose.connect('mongodb://localhost:27017/Practice', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
  startServer();
});

function startServer() {
  // 정적 파일 제공을 위해 HTML 파일이 위치한 디렉토리를 지정합니다.
  app.use(express.static(path.join(__dirname, 'public')));

  // POST 요청을 처리하는 라우트 핸들러
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // 입력된 이메일과 비밀번호를 사용하여 사용자를 조회합니다.
      const user = await User.findOne({ email, password });
  
      // 사용자가 존재하지 않거나 비밀번호가 일치하지 않으면 인증 실패 메시지를 클라이언트로 전송합니다.
      if (!user) {
        return res.status(401).send('Authentication failed');
      }
  
      // 인증이 성공하면 성공 메시지를 클라이언트로 전송합니다.
      res.send('Authentication successful');
    } catch (error) {
      // 조회 중 오류가 발생하면 오류 메시지를 클라이언트로 전송합니다.
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // 서버를 3000번 포트로 실행합니다.
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
}