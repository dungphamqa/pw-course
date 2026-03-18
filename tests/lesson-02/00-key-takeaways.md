## 1. Version control system
- Định nghĩa: Hệ thống quản lý phiên bản
- Loại:
    - Local: lưu máy cá nhân
    - Centralize: lưu máy chủ tập trung
    - Distributed: lưu nhiều máy khác nhau -> phổ biến hiện nay (vd: Git)

## 2.Git
### 2.1 Three states
Gồm 3 phân vùng:
- Working directory: các file mới or các file có thay đổi
- STG Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản để chuẩn bị commit)
- Repository: các commit

(*) Note thêm:
- format code: mac (option + shift + F), window ( alt + shift + F)

### 2.2 Git Cấu hình
- Cấu hình toàn bộ repo ở máy
-> chạy lệnh
    - git config --global user.name `<tên>`
    - git config --global user.email `<email>`

- Cấu hình mỗi repo 1 tên: set thông tin riêng trong từng repo (đứng tại terminal của repo đó)
-> chạy lệnh
    - git config user.name `<tên>`
    - git config user.email `<email>`

- git status: xem trạng thái file
    - màu xanh: vùng stg
    - mày đỏ: vùng working directory

- git log: xem ds các phiên bản (dùng "q" để quay lại terminal)

- commit convention: 
dùng commit sau: `<type> : <sort-description>`.

    -> trong đó:
    - type:
        - chore: sửa nhỏ lẻ, chính tả, xoá file...
        - feat: thêm tính năng mới, TC mới
        - fix: sửa lỗi 1 TC trước
    - sort-description: mô tả ngắn gon (<50 kí tự>)

### 2.3 Simple workflow
- Không dùng global config: git init > git config > git add > git commit > git push
- Dùng global config: git init > git add > git commit > git push


## 3. JavaScript
### 3.1 Định nghĩa:
- là 1 ngôn nguữ lập trình
- giúp trình duyệt hoạt động mượt hơn
- chạy được do brower engine (Edge: Chaka, firefox: Spider Monkey, chorme: V8)

-> Trên máy tính không có brower engine -> Cài NodeJs để hỗ trợ

### 3.2 Biến, Hằng
- Biến.

    -> Khai báo: `<Từ khoá>` `<Tên biến>` = `<Giá trị>`.

    -> Từ khoá: `var/ let`
    - vd: var Name = "Dung Pham"; 
     let  isLovePlayWright = true;
     - Sự khác nhau của var/let : var cho khai báo lại, let thì không. var có phạm vi global, let có phạm vi trong 1 block -> Nên dùng let để tránh khai báo trùng biến

- Hằng.

    -> Khai báo: `<Từ khoá>` `<Tên hằng>` = `<Giá trị>`.

    -> Từ khoá: `const`

- vd: const slogan = "PlayWright mai dinh mai dinh"; 

-> Phân biệt `Biến`, `Hằng`
- Biến có thể thay đổi
- Hằng không thể thay đổi
- Mặc định luôn luôn dùng Hằng, chỉ dùng Biến khi có ý định thay đổi


### 3.3 Kiểu dữ liệu - Data type
- Kiểu nguyên thuỷ (Primitive type)
    - number: không phân biệt int/float (số nguyên, số thực, vô hạn, NaN)
    - string: chuỗi kí tự : " ", ' ', ``
    - Boolen: Giá trị logic true/false
    - Undefined
    - Null
    - Symbol
    - BigInt

- Kiểu tham chiếu (Reference type)
    - Object

-> Cách để biết biến có kiểu dữ liệu nào: đọc code or sd hàm `<typeof>` `<variable>`

### 3.4 Toán tử - so sánh
- so sánh bằng: 
    - `==` so sánh và chuyển kiểu dữ liệu
    - `===' so sánh giá trị và không chuyển kiểu dữ liệu
- só sánh không bằng: `!=`
- So sánh lớn hơn, nhỏ hơn `>, <, >=, =<`

### 3.5 Toán tử - logic
- `||`
- `&&`

### 3.6 Toán tử - 1 ngôi
- Chỉ cần 1 toán hạng để thực hiện
- Có 2 loại:
    - prefix: `++x, --x` ; tăng trước trả về sau
    - postfix: `x++, x--`: trả về trước, tăng sau

### 3.7 Toán tử - toán học
`+, -, x, :`

### 3.8 Câu điều kiện
- if
- if - else
- if - else - if
- stwich - case

### 3.9 Vòng lặp
- for (i)
- for (of)
- for (each)
- for (in)
- while
- do - while




