// server.js - My First Express Server
const express = require('express');
const cors = require('cors'); // << Import cors

require('dotenv').config(); // << เพิ่มบรรทัดนี้ที่ด้านบน

const app = express();
app.use(cors()); // << เพิ่มบรรทัดนี้: ใช้ cors กับทุก request
const PORT = process.env.PORT || 3000; // << อ่านค่า PORT จาก .env
const APP_NAME = process.env.APP_NAME;

// สร้าง Route (เส้นทาง) แรกสำหรับหน้าหลัก
app.get('/', (req, res) => {
  res.send('<h1>Hello from ENGCE301 Express Server!</h1>');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This data is open for everyone!' });
});

// เริ่มต้นให้ Server รอรับการเชื่อมต่อ
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});