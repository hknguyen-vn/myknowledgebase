# 🌐 NETWORK CONFIGURATION – HGPT Factory Network

> Phiên bản: 2025-11-05  
> Người cập nhật: **hienNK – IT**  
> Mục đích: Ghi nhận và quản lý toàn bộ hạ tầng mạng nội bộ (Router, DHCP, IP tĩnh, thiết bị Wi-Fi, camera, v.v.)

---

## I. 🧭 Tổng quan sơ đồ mạng
[Internet ISP VNPT]
│
[Router chính Mikrotik RB3011]
│── PPPoE Client (ether1 → pppoe-out1)
│── bridge-LAN (ether2 → ether10)
│
[Switch Layer 2 - Ruijie]
├─ AP_01 (RG-RAP2200)
├─ AP_02 (RG-RAP2200)

[Internet VNPT 2] **Dùng cho hệ NLMT + Net21**


> Sơ đồ chi tiết có thể xem file `/assets/network-topology.drawio` hoặc `/images/network-topology.png`.

---

> Mạng nội bộ sử dụng **một dải IP duy nhất 192.168.1.0/24**, không phân VLAN.

---

## II. 🌍 Cấu hình IP chính

| Interface     | Type          | Vai trò              | Địa chỉ / Network       | Ghi chú |
|----------------|----------------|----------------------|--------------------------|----------|
| ether1         | Ethernet       | WAN PPPoE Client     | —                        | Kết nối tới modem ISP |
| pppoe-out1     | PPPoE Client   | Kết nối Internet     | IP Public động (VD: 14.176.231.30) | Cấp IP tự động từ ISP |
| bridge-LAN     | Bridge         | Gateway nội bộ       | 192.168.1.1/24           | Gộp ether2–ether10 |
| ether2–ether10 | Ethernet       | LAN nội bộ           | Thuộc bridge-LAN         | Kết nối PC, AP, NVR |
| VLAN412        | VLAN           | Không sử dụng        | —                        | Cũ, nên disable |
| sfp-sfpplus1   | SFP+           | Dự phòng             | —                        | Chưa sử dụng |

---

## III. ⚙️ DHCP CONFIGURATION

| Thông số | Giá trị |
|-----------|----------|
| **DHCP Pool** | 192.168.1.79–192.168.1.229 |
| **Gateway** | 192.168.1.1 |
| **DNS Server** | 8.8.8.8, 8.8.4.4 |
| **Lease Time** | 8 giờ |

> DHCP được bật trên `bridge-LAN`.  
> Các thiết bị quan trọng sử dụng IP tĩnh hoặc DHCP binding cố định.

---

## IV. 🧱 Địa chỉ IP tĩnh (Static Assignments)

| Thiết bị              | IP              | MAC Address       | Vị trí           | Ghi chú |
|-----------------------|-----------------|-------------------|------------------|---------|
| Hien-PC               | 192.168.1.9     | AA:BB:CC:DD:EE:01 | Phòng IT         | 
| HCPC-PC               | 192.168.1.23    | AA:BB:CC:DD:EE:01 | Phòng IT         | DHCP Binding |
AP |
| Grandstream 7660E     | 192.168.1.4     | AA:BB:CC:DD:EE:04 | VP               |
| Grandstream 7600      | 192.168.1.6     | AA:BB:CC:DD:EE:04 | VP               |
| Grandstream 7605      | 192.168.1.7     | AA:BB:CC:DD:EE:04 | VP               |
| AP_Ruijie_01          | 192.168.1.11    | AA:BB:CC:DD:EE:03 | Quản đốc - Xưởng | 
| AP_Ruijie_02          | 192.168.1.12    | AA:BB:CC:DD:EE:04 | P. KCS - Xưởng   | Quản lý camera |
| NVR_KBvision          | 192.168.1.20    | AA:BB:CC:DD:EE:05 | VP               | 
| NVR_KBvision          | 192.168.1.21    | AA:BB:CC:DD:EE:05 | Phòng bảo vệ     |
| NVR_Hikvision         | 192.168.1.22    | AA:BB:CC:DD:EE:05 | VP               | 
IP tĩnh in ấn |
- 192.168.1.246 LBP 242/243dw
| Printer_LBP 223dw     | 192.168.1.247   | AA:BB:CC:DD:EE:06 | Văn phòng HR     | 
| Printer_5054          | 192.168.1.249   | AA:BB:CC:DD:EE:06 | Văn phòng HR     | 
| Printer_4054          | 192.168.1.250   | AA:BB:CC:DD:EE:06 | Văn phòng HR     | 

---

## V. 🔒 NAT & FIREWALL

### NAT Configuration
| Chain | Out Interface | Action | Mô tả |
|-------|----------------|---------|--------|
| srcnat | pppoe-out1 | masquerade | NAT LAN ra Internet |

### Firewall Filter
| Mục | Quy tắc | Trạng thái |
|------|----------|------------|
| ✅ | Allow established, related | Cho phép kết nối hợp lệ |
| 🚫 | Drop invalid | Loại bỏ gói lỗi |
| ✅ | Allow input from bridge-LAN | Cho phép quản trị từ LAN |
| 🚫 | Drop input from pppoe-out1 | Chặn truy cập từ WAN |
| 🚫 | Drop forward WAN → LAN | Ngăn truy cập không mong muốn từ Internet |

---

## VI. 📡 Hệ thống Wi-Fi & Camera

| Thiết bị | IP | Model | Vị trí | Ghi chú |
|-----------|----|--------|--------|---------|
| AP_01 | 192.168.1.11 | Ruijie RG-RAP2200 | Khu KCS | SSID: HGPT-Office |
| AP_02 | 192.168.1.12 | Ruijie RG-RAP2260 | Khu Quản đốc | SSID: HGPT-Factory |
| NVR01 | 192.168.1.200 | Hikvision DS-7608NI | Phòng bảo vệ | Quản lý 8 camera |
| Camera_01 | 192.168.1.33 | Kbvision 2MP | Cổng chính | — |
| Camera_02 | 192.168.1.60 | Kbvision 2MP | Kho vật tư | — |

> Toàn bộ camera dùng chung dải LAN, không VLAN riêng.  
> NVR quản lý trực tiếp qua địa chỉ 192.168.1.21

---

## VII. Ghi chú vận hành
- Sao lưu cấu hình định kỳ `/system backup save name=auto_backup`
- Giữ file xuất `/export file=router-export`
- Kiểm tra tốc độ cổng ether1 và bridge
- Đặt IP tĩnh cho server, camera, AP
- Không bật VLAN để giảm phức tạp, tuy nhiên nên tách VLAN Camera sau này để bảo mật hơn

---

## VIII. Lịch sử cập nhật
| Ngày | Người thực hiện | Nội dung |
|------|------------------|-----------|
| 2025-11-04 | Hiển | Cập nhật network config lên file .md |
| 2025-05-10 | Hiển | Đi điện - lan VP - thay router chính Mikrotik + sw Ruijie |
| 2025-04-10 | Hiển | Lắp thêm AP 7660E - wifi6 |
--  dfjh|êur

---

## IX. Mẹo mở rộng thêm:
- Dùng block YAML ở đầu file:
  ```yaml
  ---
  title: Network Configuration
  updated: 2025-11-05
  author: Hien Nguyen
  tags: [it, network, vlan, mikrotik, ruijie]
  ---