# Hosting `json-server` với `vercel`

## Cài đặt dependencies

1. Chạy lệnh `npm install` (yêu cầu Node.js)
2. Khởi chạy server sử dụng lệnh `npm start`
3. Khai báo dữ liệu trong tệp `data.json`, ví dụ

    ```json
    {
        "users": [
            {
                "id": 1,
                "username": "banx9x",
                "displayName": "Ba Nguyễn",
                "password": "123456"
            }
        ]
    }
    ```

    `json-server` sẽ tự động tạo các APIs tương ứng, ví dụ `/users` trả về danh sách users (cần khởi động lại server nếu server đang chạy sử dụng lệnh `Ctrl + C` và `npm start`)
4. Các file HTML, CSS, JS tạo trong thư mục `public`
5. Push code lên Github
6. Deploy lên `vercel`

   - Push code lên Github
   - Truy cập vào `vercel.com`, tạo tài khoản (bằng tài khoản Github nếu chưa có)
   - Tạo project mới
   - Import repo tương ứng từ Github