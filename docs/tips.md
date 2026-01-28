# BÍ KÍP MẸO VẶT

Nhưng do Docsify chỉ nhận diện **cú pháp đúng chuẩn** ` ```bash` (liền nhau, không có dấu cách hoặc dấu ngược ngược) nên nó không kích hoạt tô màu.  

---

## ✅ Cách viết đúng để có màu code nổi bật

### push git:

```bash
git status            # xem có gì thay đổi
git add -A            # gom TẤT CẢ thay đổi (thêm/sửa/xoá)
git commit -m "docs: cap nhat <tên-file/ý nghĩa>"
git pull --rebase origin main   # nếu có ai sửa trên GitHub web
git push

```

### 📝 Workflow Update Code & Deploy GitHub Pages (Vite + React)

```bash
1. Cập nhật source code (nhánh main)
git add .
git commit -m "update feature"
git push origin main

2. Build & deploy web (nhánh gh-pages)
npm run deploy

```

### Khởi chạy cục bộ: 
Chạy lệnh `docsify serve .` để khởi động web cục bộ.

### Ket hop markdown n8n:
Link cac flow