# Bootcamp 30 Ngày — Checklist

Checklist dạng "Notion đơn giản" cho kế hoạch bootcamp 30 ngày (English speaking + AI applied). 1 file HTML duy nhất, không cần cài đặt, không cần server.

## Cách dùng

1. Mở `index.html` bằng trình duyệt (double-click, hoặc kéo thả vào Netlify để có link online dùng trên điện thoại).
2. Ngày bắt đầu mặc định là **01/07/2026** — đổi lại bất cứ lúc nào ở trang **Cài đặt / Backup** nếu cần.
3. Mỗi ngày vào đúng trang **Ngày N** ở sidebar, tick các việc đã làm (Sáng — AI / Trưa — English / Tối — Review). Mỗi việc trong checklist luôn có sẵn **gợi ý app/cách làm** (💡) ngay dưới tên việc, và nút **"Xem prompt"** nếu việc đó có prompt A1–A6/B1–B5 đi kèm.
4. Bấm **"Nhập nội dung / minh chứng ▾"** dưới mỗi việc để mở ô nhập: dán transcript/ghi chú vào textarea, và **upload ảnh hoặc file audio** (ví dụ file ghi âm self-intro) ngay tại việc đó — không cần gom chung một chỗ.
5. Xem **Dashboard** để theo dõi % hoàn thành, streak, tiến độ từng tuần, và danh sách "Việc tiếp theo" (kể cả việc quá hạn từ ngày trước).
6. Vào **Chứng chỉ** / **Project** để cập nhật trạng thái, dán link, upload ảnh minh chứng cho 4 chứng chỉ và 3 project AI.
7. Vào **Thư viện Prompt** để xem/copy toàn bộ prompt A1–A6 (luyện nói) và B1–B5 (luyện AI/project) bất cứ lúc nào.

## Lưu trữ dữ liệu

Toàn bộ dữ liệu (checklist đã tick, ghi chú, trạng thái Cert/Project, ảnh/audio minh chứng) mặc định lưu **trong trình duyệt** (localStorage + IndexedDB) của từng máy/thiết bị — không có server, không tự thấy nhau giữa các thiết bị nếu chưa bật đồng bộ.

### Đồng bộ đa thiết bị (tuỳ chọn)

Vào **Cài đặt** → **Đồng bộ đa thiết bị**, nhập **cùng 1 mã PIN** trên mọi thiết bị muốn dùng chung (MacBook, tablet, điện thoại...). Sau đó:
- Checklist đã tick, ghi chú, trạng thái Cert/Project, ngày bắt đầu sẽ **tự động đồng bộ** qua 1 Netlify Function + Netlify Blobs (cùng site đang deploy, không cần tài khoản/dịch vụ ngoài).
- Cơ chế đơn giản: bản nào lưu sau (mới hơn) sẽ thắng khi đồng bộ — hợp với việc 1 người dùng lần lượt trên từng máy, không hợp nếu sửa đồng thời trên 2 máy cùng lúc.
- **PIN không phải mật khẩu bảo mật thật** — ai biết đúng PIN và tìm ra được endpoint đều đọc/ghi được dữ liệu đó. Vì đây là checklist học tập cá nhân (không nhạy cảm) nên đủ dùng, nhưng nên đặt PIN dài/lạ (không phải "1234").
- **Ảnh/audio minh chứng chưa nằm trong phần tự đồng bộ** (dễ vượt giới hạn dung lượng) — muốn chuyển ảnh giữa máy thì vẫn dùng Export/Import JSON bên dưới.
- Không có mạng hoặc chưa nhập PIN → app vẫn chạy bình thường 100% local như cũ, không bị chặn gì cả.

### Backup thủ công

Vào **Cài đặt** → **Backup dữ liệu**:
- **Export JSON**: tải file backup đầy đủ (tick + ảnh) — nên làm định kỳ (ví dụ cuối mỗi tuần), và là cách duy nhất hiện tại để chuyển ảnh/audio minh chứng giữa các thiết bị.
- **Import JSON**: khôi phục lại từ file backup (dùng khi đổi máy, đổi trình duyệt, hoặc lỡ xoá cache).

## Nội dung ngày

Nội dung 30 ngày dựng theo kế hoạch bootcamp gốc. Tuần 1 (Ngày 1–7) bám sát chi tiết từng ngày trong brief; Tuần 2–4 sinh theo đúng nhịp ngày (Sáng AI / Trưa–Tối English) mà brief mô tả cho từng tuần, có thể không khớp 100% với lịch thực tế — cứ tick theo tiến độ thật của bạn, không cần đúng ngày.
