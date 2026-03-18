## 1. Git - Undo actions
- Restore file từ vùng STG -> Working directory : `git restore --staged <file_name>`
- Restore toàn bộ file từ vùng STG -> Working directory : `git restore --staged .`

- Reset commit từ vùng Repository -> working directory: `git reset HEAD ~ <N commit>` // N commit: là số lượng commit gần nhất


## 2. Git - Branch
- Định nghĩa: Git sử dụng nhánh để tạo ra các phiên bản riêng của code, tránh ảnh hưởng tới bản gốc
- Tạo branch: `git branch <tên nhánh)`
- Xem danh sách nhánh + hiện tại đang ở nhánh nào: `git branch`
    - Lưu ý 1: Phải có ít nhất 1 commit thì mới hiện danh sách nhánh
    - Lưu ý 2: Khi có danh sách nhánh, nhanh hiện tại đang ở sẽ có dấu `*` đằng trước
- Chuyển sang nhánh mới: `git checkout <tên nhánh>`
- Vừa tạo nhánh, vừa di chuyển sang nhánh mới: `git checkout -b <tên nhánh>`
- Xoá nhánh: `git branh -D <tên nhánh>`
    - Lưu ý: Phải đứng ở nhánh khác trước khi xoá nhánh hiện tại

-> Lưu ý: Luôn pull code về trước khi tạo nhánh mới

## 3. Git - Ignore file
- Định nghĩa: là 1 file cấu hình quan trọng trong Git, giúp bạn chỉ định những file và thư mục sẽ không được theo dõi bởi Git.

- Lý do: Trong dự án có nhiều file không cần quản lý
    - File tạm thời
    - Folder dependencies
    - File build
    - File cấu hình cá nhân
    - File nhạy cảm.....
- Cú pháp: Tạo file `.gitignore`
     - comment: #
     - Ignore file cụ thể: file.txt
     - Ignore thư mục: folder/.....

## 4. JavaScript
### 4.1 Convention ~ Quy tắc
- Ý nghĩa: Giúp code theo format chung, dễ nhìn. Người khác dễ đọc code
- Có nhiều lọại convention:
    - Đặt tên file
    - Đặt tên biến
    - Đặt tên commit.....
- Phổ biển:
    - snack_case: pham_thi_dung
    - kebab-case: pham-thi-dung -> trong lớp sẽ sd để `đặt tên file, tên folder`
    - camelCase: phamThiDung -> trong lớp sẽ sd để `đặt tên biến`
    - PascalCase: PhamThiDung -> trong lớp sẽ sd để `đặt tên class`
    - upper_case: PHAM_THI_DUNG


### 4.2 Console.log nâng cao
-> Các loại console.log:

- console.log ('Tôi là A');
- console.log ("Tôi là B");
- console.log (`$variable_name`);
- onsole.log ("Tôi tên là", + name, + " ");

### 4.2 Object
- Định nghĩa: Là 1 trong những kiểu dữ liệu quan trọng nhất trong JavaScipt, lưu trữ dữ liệu kiểu `key_value`. Dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến ỏ hằng số
- Cú pháp:
    - <key>: giống quy tắc đặt tên biến
    - <value>: có kiểu giống biến or 1 object khác

- Ví dụ khai báo.

    const myInfor ={
        name: "Dung",
        adrress: "Bac Ninh",
        age: "28",
        "address 2: 'Ha noi" // có dấu cách or kí tự đặc biệt
        isLoveCoding: true,
        codingClass: {
            name: "A",
            level: 1
        }
    }

- Ví dụ console.log (truy xuất thuộc tính bên trong object)
   -  console.log (myInfor.name) ~ console.log (myInfor["name"])
   - console.log (myInfor.codingClass.name) ~ console.log (myInfor.["codingClas"]["name"])

- Bổ sung:
    - Nếu object khai báo biên const -> vẫn cho phép thay đổi biến trong object 
    -> ví dụ: const codingClass: {
            name: "A",
            level: 1
        }
        codingClass.name ="NaN"
    - Thêm thuộc tính vào object dùng: odingClass.year = 21 or odingClass.["year"] = 21
    - Xoá thuộc tính: delete.codingClass.name


### 4.3 Array
- Khai báo mảng: `const arr = [n1,n2,n3...]` //n: các phần tử trong mảng
- Truy xuất mảng;
    - vd: console.log (arr[0]); -> In ra giá trị n1
    - Lưu ý: Độ dài mảng: length -> vd:console.log (arr.length); -> in ra 3
    - Lấy phần tử theo index: [0]~n1, [1]~n2 ....

- Bổ sung:
    - Thêm phần tử vào mảng: dùng hàm push -> arr.push(1);

### 4.4 Function
- Định nghĩa: đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ or 1 tính toán cụ thể
- Khai báo
    function <tênHam>(n1,n2...){
        // code
    }

(*) Bổ sung:
- Sửa message commit: `git commit --amend -m"mgs"` // amend: sửa commit gần nhất
- Thêm file vào commit: 
    - `git add <tên file>`
    - `git commit --amend --no-edit`











