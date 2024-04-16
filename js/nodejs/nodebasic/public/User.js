const mongoose = require('mongoose');

// 사용자 스키마 정의
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

// 사용자 모델 생성
const User = mongoose.model('User', userSchema);

module.exports = User; // 모델을 외부에서 사용할 수 있도록 내보냅니다.