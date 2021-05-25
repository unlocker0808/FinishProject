/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import TableNews from "./TableNews";
import MainNews from "./MainNews";
import SubNews from "./SubNews";
class VietNam extends Component {
  render() {
    return (
      <div>
        <section
          className="text-center download-section content-section"
          id="vietnam"
        >
          <div>
            <div>
              <div class="container">
                <div>
                  <h1 class="main_title">Thông tin dịch covid-19 trONG nước</h1>
                </div>
                <div className="nguon-tin">
                  <p className="text-left">
                    Nguồn tin tức:{" "}
                    <a href="https://ncov.moh.gov.vn/" target="_blank">
                      <span className="src-ncv">ncov.moh.gov.vn</span>
                      <br />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                class="container-xl border rounded-0 shadow"
                data-aos="fade-up"
                data-aos-duration={700}
              >
                <div className="row justify-content-center align-items-center padding-space">
                  <TableNews
                    kind="text-danger infection-number"
                    title="TỔNG SỐ CA NHIỄM"
                    numbers="3.869"
                  />
                  <TableNews
                    kind="text-warning infection-number"
                    title="ĐANG NHIỄM"
                    numbers="1.161"
                  />
                  <TableNews
                    kind="text-success infection-number"
                    title="KHỎI"
                    numbers="2.668"
                  />
                  <TableNews
                    kind="text-dark infection-number"
                    title="TỬ VONG"
                    numbers="36"
                  />
                </div>
              </div>
            </div>

            <div class="padding-space">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 col-lg-8 border-right-blue">
                    <div class="first_row_news">
                      <h2>Tin Tức trong ngày</h2>
                    </div>
                    <MainNews
                      link="#"
                      title="Bắc Ninh có 460 ca mắc COVID-19, nhiều cán bộ y tế kiệt sức."
                      time="(Chủ nhật, 23/05/2021 11:35)"
                      paths="assets/img/bacninh460ca.jpg"
                      nameImg="bac-ninh-co-460-ca-mac-covid"
                      details="Tính đến sáng 23/5, tỉnh Bắc Ninh có 460 ca mắc COVID-19, số F1,F2 rà soát được lên đến hơn 34.000 trường hợp."
                    />
                    <MainNews
                      link="#"
                      title="Hòa Bình lập 3 đoàn kiểm tra giám sát khu cách ly."
                      time="(Thứ bảy, 15/05/2021, 21:25)"
                      paths="assets/img/tiem-vac-xin-o-huyen-Da-Bac.jpg"
                      nameImg="tiem-vac-xin-o-huyen-Da-Bac"
                      details="Sở Y tế tỉnh Hòa Bình đã thành lập 3 đoàn Kiểm tra để tiến hành kiểm tra các điểm cách ly tập trung và các Bệnh viện, Trung tâm y tế trên địa bàn tỉnh từ ngày 11-15/5/2021."
                    />
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <div class="first_row_news">
                      <h2>Tin Đọc Nhiều</h2>
                    </div>
                    <SubNews
                      link="#"
                      paths="assets/img/hadico.jpg"
                      nameImg="hadico"
                      title="Cách chức Bí thư Đảng ủy, chính quyền với giám đốc Hacinco vì vi phạm nghiêm trọng công tác phòng, chống dịch."
                      time="Thứ bảy, 15/05/2021, 20:48"
                    />
                    <SubNews
                      link="#"
                      paths="assets/img/chivienbacgiang.jpeg"
                      nameImg="chi-vien-bac-giang"
                      title="Bộ Y tế cử đoàn chuyên gia xét nghiệm chi viện Bắc Giang."
                      time="Thứ bảy, 15/05/2021, 20:42"
                    />
                    <SubNews
                      link="#"
                      paths="assets/img/1817882942181646030757512277294535780616063n-1620531894104713740913.webp"
                      nameImg="bat-giam-3-doi-tuong-trung-quoc"
                      title='"Bắt giam 3 đối tượng giúp nhóm người Trung Quốc" cư trú trái phép tại việt nam.'
                      time="Thứ Năm, 13-05-2021, 16:15"
                    />
                    <SubNews
                      link="#"
                      paths="assets/img/9571587330154064618588707004330754779906048o-15889047856451501926427.jpg"
                      nameImg="bien-hai-phong-thanh-khu-cach-ly"
                      title='"Biến" phòng cách ly thành phòng đẻ để cứu hai sản phụ.'
                      time="Thứ Năm, 13-05-2021, 16:15"
                    />
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-outline-info">
                Trang trước
              </button>
              <button type="button" class="btn btn-outline-info">
                Trang sau
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default VietNam;
