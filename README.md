# Hosting `json-server` với `vercel`

1. Khai báo dữ liệu trong tệp `data.json`, ví dụ

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

   `json-server` sẽ tự động tạo các APIs tương ứng, ví dụ `/users` trả về danh sách users

2. Các file HTML, CSS, JS tạo trong thư mục `public`
3. Push code lên Github
4. Deploy lên `vercel`
   - Push code lên Github
   - Truy cập vào `vercel.com`, tạo tài khoản (bằng tài khoản Github nếu chưa có)
   - Tạo project mới
   - Import repo tương ứng từ Github

