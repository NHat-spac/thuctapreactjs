import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>DakSystem</h3>
          <p>Giải pháp công nghệ toàn diện</p>
          <p>Điện thoại: 0112312312</p>
          <p>Email: contact@daksystem.com</p>
          <p>Địa chỉ: 123 Đường Công Nghệ, TP. Buôn Ma Thuột, Đắk Lắk</p>
        </div>
        <div className="footer-section">
          <h4>Về DakSystem</h4>
          <ul>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Điều khoản</li>
            <li>Bảo mật</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Công cụ</h4>
          <ul>
            <li>Tạo CV xin việc</li>
            <li>Rút gọn liên kết</li>
            <li>Clip-path Maker</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Công ty TNHH DakSystem</h4>
          <p>Mã số thuế: 123456789</p>
          <p>Ngày thành lập: 01/01/2020</p>
          <p>
            Lĩnh vực hoạt động: Công nghệ thông tin, giải pháp phần mềm. Chúng
            tôi tập trung phát triển các sản phẩm mang lại giá trị cho doanh
            nghiệp và cộng đồng.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 DakSystem. Đồng hành cùng doanh nghiệp Việt Nam</p>
        <div className="social-icons">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-tiktok"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
