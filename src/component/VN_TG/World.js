/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import MainNews from "./MainNews";
import SubNews from './SubNews';
import TableNews from './TableNews';

class World extends Component {
  render() {
    return (
      <section
        className="text-center download-section content-section"
        id="vietnam"
      >
                        <p className="back-to-top1">Thế giới</p>

        <div>
          <div>
            <div class="container">
              <div>
                <h1 class="main_title">
                  Thông tin dịch covid-19 trên thế giới
                </h1>
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
                  numbers="167.114.915"
                />
                <TableNews
                  kind="text-warning infection-number"
                  title="ĐANG NHIỄM"
                  numbers="15.583.288"
                />
                <TableNews
                  kind="text-success infection-number"
                  title="KHỎI"
                  numbers="148.061.344"
                />
                <TableNews
                  kind="text-dark infection-number"
                  title="TỬ VONG"
                  numbers="3.470.283"
                />
              </div>
            </div>
          </div>

          <div class="padding-space">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-lg-8 border-right-blue">
                  <div class="first_row_news">
                    <h2>Tin nóng</h2>
                  </div>
                  <MainNews
                    link="#"
                    title="Thế giới ghi nhận tổng hơn 167 triệu ca mắc Covid-19"
                    time="Chủ Nhật, 23-05-2021, 07:13"
                    paths="assets/img/world-mainnew-2.jpeg"
                    details="Theo số liệu trang Worldometers.info, tính đến 7 giờ ngày 23-5 (giờ Việt Nam), toàn thế giới ghi nhận hơn 167,02 triệu ca nhiễm Covid-19, trong đó có hơn 147,97 triệu ca đã hồi phục và 3.467.879 ca tử vong. Trong 24 giờ qua, thế giới ghi nhận hơn 557 nghìn ca nhiễm Covid-19, số ca tử vong ở mức hơn 10.300 ca."
                  />
                  <MainNews
                    link="#"
                    title="Pháp điều tra các trường hợp máu khó đông hiếm gặp sau tiêm vaccine Covid-19"
                    time="Thứ Bảy, 22-05-2021, 15:05"
                    paths="assets/img/world-mainnews-2.jpg"
                    details="Ngày 21-5, Cơ quan Quản lý dược phẩm Pháp (ANSM) cho biết, đang điều tra về ba trường hợp mắc chứng rối loạn ảnh hưởng đến khả năng máu khó đông hiếm gặp đã được báo cáo ở những người được tiêm vaccine Covid-19 của Pfizer-BioNTech."
                  />

                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="first_row_news">
                    <h2>tin mới</h2>
                  </div>
                  <SubNews
                    link="#"
                    paths="assets/img/world-subnews-1.jpg"
                    title="Thái Lan phát hiện một số ổ dịch Covid-19 hơn nghìn người nhiễm"
                    time="Thứ Bảy, 22-05-2021, 11:33"
                  />
                  <SubNews
                    link="#"
                    paths="assets/img/world-subnews-2.jpg"
                    title="Nguy cơ bùng phát làn sóng dịch bệnh mới ở châu Phi"
                    time="Chủ Nhật, 23-05-2021, 03:39"
                  />
                  <SubNews
                    link="#"
                    paths="assets/img/world-subnews-3.jpg"
                    title="Châu Âu thảo luận về chứng nhận tiêm vắc-xin"
                    time="Thứ Bảy, 22-05-2021, 02:39"
                  />
                  <SubNews
                    link="#"
                    paths="assets/img/cam-1620895691942.jpg"
                    title="Một bệnh nhân Nepal tại Campuchia tử vong do Covid-19"
                    time="Thứ Năm, 13-05-2021, 15:46"
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
    );
  }
}

export default World;
