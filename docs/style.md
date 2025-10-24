# 🎨 HGPT STEEL MARKDOWN STYLE GUIDE  
*Tài liệu hướng dẫn trình bày & viết nội dung Markdown cho toàn bộ kho tri thức HGPT.*

## Hien Single ngủ ngon

---
## 🧭 1. Cấu trúc & Quy ước chung

- Mỗi file `.md` có **một tiêu đề cấp 1 (`#`) duy nhất**.
- Dùng tiêu đề cấp 2–3 (`##`, `###`) để chia phần.
- Chèn **dòng trống giữa các đoạn** để dễ đọc.
- Giữ mỗi đoạn ≤ 5 dòng, mỗi tiêu đề ≤ 8 từ.
- Ưu tiên **gạch đầu dòng ngắn, rõ ràng**, tránh văn bản dài dòng.

📘 *Ví dụ cấu trúc chuẩn:*
```markdown
# Dự án DANATECH

## 1. Mục tiêu
## 2. Kế hoạch triển khai
### 2.1 Facebook Campaign
### 2.2 Email Marketing
## 3. Kết quả & Ghi chú
```
----------
## 🧩 2. Tiêu đề & Emoji
Mỗi tiêu đề chính nên có emoji đặc trưng (gợi cảm xúc, dễ tra cứu).
Một số emoji gợi ý:  
Chủ đề	Biểu tượng	Ý nghĩa  
* Dự án	🏗️ / 🧱	Project, Construction
* Ý tưởng	💡 / 🔍	Idea, Insight
* Kế hoạch	📅 / 📊	Planning, Report
* Công việc	✅ / 🔧	Task, Action
* Cảnh báo	⚠️ / 🔴	Warning, Problem
* Tài liệu	📘 / 🧭	Overview, Guide
## ✅ 3. Checklist & Danh sách công việc

Dùng checkbox để theo dõi tiến độ:
```markdown
## ✅ Việc cần làm tuần này
- [x] Viết hướng dẫn Markdown
- [ ] Cập nhật DANATECH Campaign
- [ ] Review bài viết tuần
```
📊 Có thể thêm dòng tổng:
Tiến độ: 1/3 hoàn thành (33%)
## 💬 4. Ghi chú, Mẹo, Cảnh báo
Docsify hỗ trợ block hiển thị kiểu “note/tip/warning”:

markdown
Sao chép mã
> [!NOTE]
> Đây là ghi chú nhỏ.

> [!TIP]
> Mẹo: Dùng `Alt + Shift + F` để format đẹp ngay trong VS Code.

> [!WARNING]
> Kiểm tra kỹ thông tin trước khi đăng ra Fanpage!
## 🔗 5. Liên kết & Tag
Dùng đường dẫn tương đối:

markdown
Sao chép mã
[Xem thêm: Hướng dẫn Markdown](guide.md)
Gắn tag cuối file để dễ tra cứu:

markdown
Sao chép mã
---
#tag: #marketing #kaizen #meeting
## 📊 6. Bảng biểu & Dữ liệu
Giữ bảng ≤ 4 cột để không tràn Docsify:

markdown
Sao chép mã
| Hạng mục | Người phụ trách | Tiến độ |
|-----------|-----------------|----------|
| DANATECH Ads | Huyền | 🟢 Hoàn thành |
| Hòa Phát DQ2 | Hiển | 🟡 Đang triển khai |
## 💻 7. Định dạng Code & Lệnh kỹ thuật
Dùng khối code có tên ngôn ngữ:

bash
Sao chép mã
git add -A
git commit -m "update docs"
git push
Dùng inline code khi nhắc lệnh:

nginx
Sao chép mã
docsify serve .
## 🖼️ 8. Hình ảnh & Mô tả
Lưu ảnh vào assets/ hoặc images/:

markdown
Sao chép mã
![Xưởng HGPT](../assets/hgpt-factory.jpg)
> *Nhà xưởng HGPT – nơi chế tạo kết cấu thép vững chắc 💪*
Đặt caption ngắn gọn, ≤ 2 dòng.

Dùng ảnh tỷ lệ ngang 16:9 để hiển thị đẹp trong Docsify.

## ✍️ 9. Tone & Ngôn ngữ
Ngắn – Rõ – Chính xác

Viết ở ngôi thứ 3 (mang tính báo cáo).

Giọng văn chuyên nghiệp nhưng thân thiện, phù hợp doanh nghiệp kỹ thuật.

Tránh viết kiểu “cảm tính” trừ khi là mục personal hoặc ideas.

Khi viết cho truyền thông: thêm tinh thần trách nhiệm – tự hào – nhiệt huyết.

📌 Ví dụ:

HGPT Steel tiếp tục khẳng định năng lực gia công kết cấu thép tại dự án Hòa Phát Dung Quất 2, mang đến giải pháp tối ưu và tiến độ vượt trội.

## 📂 10. Mẫu mở đầu chuẩn cho file Dự án
markdown
Sao chép mã
```
# 🏗️ Dự án Nhà kho F – Hòa Phát Dung Quất 2

**Chủ đầu tư:** Tập đoàn Hòa Phát  
**Hạng mục của HGPT:** Gia công, cung cấp & lắp dựng kết cấu thép  
**Tiến độ:** 80% – Đang triển khai  
**Cập nhật:** 2025-10-23  
---

## 1. Tổng quan
## 2. Tiến độ & Hình ảnh
## 3. Liên kết
- [Dashboard](../../dashboard.md)
```
## ⚙️ 11. Công cụ & Tiện ích VS Code khuyên dùng
Mục đích	Extension
Format Markdown	Markdown All in One
Kiểm lỗi trình bày	Markdownlint
Dán ảnh nhanh	Paste Image
Tô sáng cấu trúc	Markdown Preview Enhanced

Phím tắt gợi ý:

Alt + Shift + F → Format toàn bộ

Ctrl + Shift + V → Xem Preview Markdown

Ctrl + K, S → Save All

## 🎨 12. Màu sắc thương hiệu HGPT
Thành phần	Mã màu	Gợi ý
Chủ đạo	#00264D	Xanh thép HGPT
Nổi bật	#FFD700	Vàng công nghiệp
Nền phụ	#f9fafb	Xám sáng dịu mắt
Chữ chính	#222	Màu tối trung tính

Các file Docsify có thể tuỳ chỉnh màu trong index.html bằng CSS nội dòng.

## 🧱 13. Nguyên tắc lưu & commit
Tên file viết thường, có gạch nối:
hoa-phat-f-overview.md, danatech-plan.md

Commit message ngắn gọn, ví dụ:

makefile
Sao chép mã
docs: update danatech-plan.md
fix: link trong sidebar
Sau mỗi lần push: kiểm tra hiển thị trên http://localhost:3000 và GitHub Pages.

Cập nhật lại ngày trong phần Cập nhật: của file.

## 🏁 14. Kết luận
>### **[!NOTE]“Tri thức chỉ thật sự có giá trị khi được ghi chép, chia sẻ và kế thừa.”**
Mỗi Markdown là một viên gạch trong Kho tri thức HGPT —  
Hãy xây nó thật vững chắc, rõ ràng và truyền cảm hứng 💪

📌 Tác giả: Bộ phận Truyền thông & IT – HGPT STEEL
📅 Phiên bản: 1.0 – Cập nhật ngày 23/10/2025