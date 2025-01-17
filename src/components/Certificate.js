import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./Certificate.css";

const Certificate = () => {
  const certificateRef = useRef(null);
  const overlayRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    date: new Date().toLocaleDateString(),
    issuer: "DakSystem",
  });
  const [showForm, setShowForm] = useState(true); // Trạng thái để kiểm soát việc ẩn/hiện form

  // Hàm xử lý thay đổi giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Hàm tải chứng chỉ PDF
  const downloadCertificate = async () => {
    overlayRef.current.classList.add("show");

    const element = certificateRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a4");
    pdf.addImage(imgData, "PNG", 10, 10, 280, 190);
    pdf.save("certificate.pdf");

    overlayRef.current.classList.remove("show");
  };

  // Hàm hiển thị chứng chỉ khi đã nhập đủ thông tin
  const handleShowCertificate = () => {
    if (formData.name && formData.course && formData.date && formData.issuer) {
      setShowForm(false); // Ẩn form khi người dùng bấm "Hiển thị chứng chỉ"
    } else {
      alert("Vui lòng nhập đầy đủ thông tin.");
    }
  };

  return (
    <div>
      {/* Lớp phủ mờ */}
      <div ref={overlayRef} className="overlay"></div>

      {/* Form để nhập thông tin, ẩn đi khi người dùng đã nhập đủ */}
      {showForm && (
        <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Nhập thông tin chứng chỉ</h3>
          <label>
            Tên người nhận:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập tên người nhận"
              style={{ margin: "5px 0", padding: "5px", width: "100%" }}
            />
          </label>
          <br />
          <label>
            Tên khóa học:{" "}
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Nhập tên khóa học"
              style={{ margin: "5px 0", padding: "5px", width: "100%" }}
            />
          </label>
          <br />
          <label>
            Ngày cấp:{" "}
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Nhập ngày cấp"
              style={{ margin: "5px 0", padding: "5px", width: "100%" }}
            />
          </label>
          <br />
          <label>
            Người cấp:{" "}
            <input
              type="text"
              name="issuer"
              value={formData.issuer}
              onChange={handleChange}
              placeholder="Nhập tên người cấp"
              style={{ margin: "5px 0", padding: "5px", width: "100%" }}
            />
          </label>

          {/* Nút để hiển thị chứng chỉ */}
          <button onClick={handleShowCertificate} style={{ marginTop: "20px", padding: "10px 20px" }}>
            Hiển thị chứng chỉ
          </button>
        </div>
      )}

      {/* Phần hiển thị chứng chỉ, chỉ hiển thị khi đã nhập đầy đủ thông tin */}
      {!showForm && (
        <div ref={certificateRef} className="certificate">
          <h1>Chứng nhận hoàn thành</h1>
          <p>Chứng nhận rằng</p>
          <h2>{formData.name || "Nguyễn Văn A"}</h2>
          <p>đã hoàn thành khóa học</p>
          <h3>{formData.course || "HTML CSS từ Zero đến Hero"}</h3>
          <p>Vào ngày: {formData.date || new Date().toLocaleDateString()}</p>
          <div className="signature">
            <p>Người cấp</p>
            <h4>{formData.issuer || "DakSystem"}</h4>
          </div>
          {/* Nút tải chứng chỉ */}
          <button onClick={downloadCertificate} style={{ marginTop: "20px", padding: "10px 20px" }}>
            Tải chứng chỉ
          </button>
        </div>
      )}
    </div>
  );
};

export default Certificate;
