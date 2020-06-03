import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import './App.css';
import Header from './component/header';

const datanews = [
  {
    section: "HỎI CHUYÊN GIA",
    picture: {
      link: require("../src/picture/image 2.png"),
      name: "learn",
    },
    title:
      "Xét nghiệm chẩn đoán viêm gan C là hoạt động được khuyến khích và vô cùng cần thiết.",
    description:
      "Một lượng nhỏ chất béo và dầu có vai trò rất quan trọng trong việc dự trữ năng lượng, bảo vệ các mô của cơ thể và vận chuyển vitamin. Tuy nhiên, quá nhiều chất béo lại gây ra tình trạng tích tụ mỡ trong gan,",
  },
  {
    section: "NHẬN XÉT KHÁCH HÀNG",
    picture: {
      link: require("../src/picture/adult-bowl-cute-daylight-1153370 1.png"),
      name: "picture",
    },
    title: "Viêm gan C kiêng ăn gì? Thực phẩm và thuốc nên tránh",
    description:
      "Một chế độ ăn uống không khoa học, kém hợp lý có thể khiến bệnh nhân viêm gan C chậm hồi phục và tăng nguy cơ tổn thương gan nặng hơn. Do đó, người bệnh cần đặc biệt lưu ý khi lựa chọn thực phẩm tiêu thụ hàng ngày.",
  },
  {
    section: "TIN TỨC",
    picture: {
      link: require("../src/picture/adult-bowl-cute-daylight-1153370 2.png"),
      name: "picture1",
    },
    title:
      "Viêm gan C thường không có biểu hiện rõ ràng vào các giai đoạn đầu của bệnh. D..",
    description: "",
  },
  {
    section: "TIN TỨC",
    picture: {
      link: require("../src/picture/adult-bowl-cute-daylight-1153370 3.png"),
      name: "picture2",
    },
    title: "Xét nghiệm chẩn đoán viêm gan C là hoạt động được khuyến khích và vô cùng cần thiết.",
    description: "",
  },
  {
    section: "TIN TỨC",
    picture: {
      link: require("../src/picture/adult-bowl-cute-daylight-1153370 4.png"),
      name: "picture3",
    },
    title: "Viêm gan C là căn bệnh có thể lây lan qua đường máu, đường tình dục và mẹ truyền sang con.",
    description: "",
  },
];

const datalist = [
  {
    picture: {
      link: require("./picture/image 3.png"),
      name: "picture",
    },
    title: "Symbolic Mathematics Finally Yields to Neural Networks",
    description:
      "Researchers found picky eating to be a stable trait throughout ages 4 to 9. They reported that the eating habit appears to be associated",
  },
  {
    picture: {
      link: require("./picture/image 4.png"),
      name: "picture",
    },
    title: "Egg Laying or Live Birth: How Evolution Chooses ",
    description:
      "Discoveries that transcend boundaries are among the greatest delights of scientific research, but such leaps are often overlooked because they",
  },
  {
    picture: {
      link: require("./picture/image 5.png"),
      name: "picture",
    },
    title: "Inside Deep Undersea Rocks, Life Thrives Without the Sun",
    description:
      "I understood: Scientists must specialize to succeed. Biologists studying microglia don’t tend to read papers about brain waves, and brain",
  },
  {
    picture: {
      link: require("./picture/image 6.png"),
      name: "picture",
    },
    title: "Spreading the Word on a Possible Alzheimer’s Treatment",
    description:
      "Today, brain waves are a vital part of neuroscience research and medical diagnosis, though doctors have never manipulated them",
  },
];

const datavideo = [
  {
    picture: {
      link: require("./picture/image 7.png"),
      name: "thumbnail-video",
    },
    title: "Ronald Rivest on Building Better Elections",
    time: "2:46",
  },
  {
    picture: {
      link: require("./picture/image 8.png"),
      name: "thumbnail-video",
    },
    title: "Scarlett Howard on the Lessons of Teaching Bees Math",
    time: "2:46",
  },
  {
    picture: {
      link: require("./picture/image 9.png"),
      name: "thumbnail-video",
    },
    title: "Scarlett Howard on the Lessons of Teaching Bees Math",
    time: "2:46",
  },
  {
    picture: {
      link: require("./picture/image 10.png"),
      name: "thumbnail-video",
    },
    title: "Scarlett Howard on the Lessons of Teaching Bees Math",
    time: "2:46",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="slide">
          <div className="slide-background-picture">
            <img src={require("./picture/Subtract.png")} alt="picture" />
          </div>
          <div className="slide-title">
            <p>Chương trình tư vấn sức khỏe các bệnh lý về gan</p>
          </div>
          <div className="slide-select">
            <div className="background-select"></div>
            <div className="background2-select"></div>
            <div className="line-select"></div>
            <div className="calendar-select">
              <img
                src={require("./picture/Group.png")}
                alt="icon-calendar"
                className="icon-calendar"
              />
              <div className="date">
                <p>June 27- July 8,2018</p>
              </div>
            </div>
            <div className="conversation">
              <img
                src={require("./picture/Group (1).png")}
                alt="icon-conversation"
                className="icon-conversation"
              />
              <div className="name-select">
                <p>PGS.TS Nguyễn Xuân Thành</p>
              </div>
            </div>
            <div className="bottom-select">
              <div className="bottom-border"></div>
              <div className="bottom-text">
                <p>Tìm hiểu thêm</p>
              </div>
            </div>
          </div>
          <div className="slide-section">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="circle-4"></div>
            <div className="circle-5"></div>
          </div>
          <div className="slide-picture-drug">
            <img src={require("./picture/livolin 1.png")} alt="picture drug" />
          </div>
        </div>
        <div className="news">
          <div
            className="news-1"
            style={{
              display: "flex",
              textDecoration: "none",
            }}
          >
            <div className="news-section">{datanews[0].section}</div>
            <div className="news-picture">
              <img
                src={datanews[0].picture.link}
                alt={datanews[0].picture.name}
              />
            </div>
            <div className="news-title">{datanews[0].title}</div>
            <div className="news-description">{datanews[0].description}</div>
          </div>
          <div
            className="news-2"
            style={{
              display: "flex",
              textDecoration: "none",
            }}
          >
            <div className="news-section">{datanews[1].section}</div>
            <div className="news-picture">
              <img
                src={datanews[1].picture.link}
                alt={datanews[1].picture.name}
              />
            </div>
            <div className="news-title">{datanews[1].title}</div>
            <div className="news-description">{datanews[1].description}</div>
          </div>
          {/* <div className="line-news"></div> */}
          <div
            className="news-3"
            style={{
              display: "flex",
              textDecoration: "none",
            }}
          >
            <div className="news-section-name">{datanews[2].section}</div>
            <div
              className="news-list"
              style={{
                display: "flex",
                textDecoration: "column",
              }}
            >
              <div className="list-1">
                <img
                  src={datanews[2].picture.link}
                  alt={datanews[2].picture.name}
                  className="picture1"
                />
                <div className="news-title-1">
                  <p>{datanews[2].title}</p>
                </div>
              </div>
              <div className="list-2">
                <img
                  src={datanews[3].picture.link}
                  alt={datanews[3].picture.name}
                  className="picture2"
                />
                <div className="news-title-2">
                  <p>{datanews[3].title}</p>
                </div>
              </div>
              <div className="list-3">
                <img
                  src={datanews[4].picture.link}
                  alt={datanews[4].picture.name}
                  className="picture3"
                />
                <div className="news-title-3">
                  <p>{datanews[4].title}</p>
                </div>
              </div>
              <div className="see-more">
                <div className="text-see-more">
                  <p>Xem thêm</p>
                </div>
                <img
                  src={require("./picture/Polygon 1.png")}
                  alt="polygon"
                  className="icon-see-more"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="news-3"
          style={{
            display: "flex",
            textDecoration: "none",
          }}
        >
          <div className="news-section-name-3">CẨM NANG GAN KHỎE</div>
          <div
            className="news-list-2"
            style={{
              display: "flex",
              textDecoration: "row",
            }}
          >
            <div className="list-news-3-1">
              <img
                src={datalist[0].picture.link}
                alt={datalist[0].picture.name}
                className="list-news-3-1-picture"
              />
              <div className="list-news-3-1-title">
                <p>{datalist[0].title}</p>
              </div>
              <div className="list-news-3-1-description">
                <p>{datalist[0].description}</p>
              </div>
            </div>
            <div className="list-news-3-2">
              <img
                src={datalist[1].picture.link}
                alt={datalist[1].picture.name}
                className="list-news-3-1-picture"
              />
              <div className="list-news-3-1-title">
                <p>{datalist[1].title}</p>
              </div>
              <div className="list-news-3-1-description">
                <p>{datalist[1].description}</p>
              </div>
            </div>
            <div className="list-news-3-3">
              <img
                src={datalist[2].picture.link}
                alt={datalist[2].picture.name}
                className="list-news-3-1-picture"
              />
              <div className="list-news-3-1-title">
                <p>{datalist[2].title}</p>
              </div>
              <div className="list-news-3-1-description">
                <p>{datalist[2].description}</p>
              </div>
            </div>
            <div className="list-news-3-4">
              <img
                src={datalist[3].picture.link}
                alt={datalist[3].picture.name}
                className="list-news-3-1-picture"
              />
              <div className="list-news-3-1-title">
                <p>{datalist[3].title}</p>
              </div>
              <div className="list-news-3-1-description">
                <p>{datalist[3].description}</p>
              </div>
            </div>
          </div>
          <div
            className="video"
            style={{
              display: "flex",
              textDecoration: "none",
            }}
          >
            <div className="video-section-name">CHIA SẺ TỪ CHUYÊN GIA</div>
            <div
              className="list-video"
              style={{
                display: "flex",
                textDecoration: "row",
              }}
            >
              <div className="video-1">
                <div className="thumbnail-1">
                  <img
                    src={require("./picture/bottom-play (1).png")}
                    alt="bottom-play"
                    className="bottom-play"
                  />
                  <img
                    src={datavideo[0].picture.link}
                    alt={datavideo[0].picture.name}
                    className="thumbnail-video-1"
                  />
                </div>
                <div className="title-video-1">
                  <p>{datavideo[0].title}</p>
                </div>
                <div className="timer-1">
                  <img
                    src={require("./picture/clock.png")}
                    alt="clock"
                    className="clock-1"
                  />
                  <div className="time-1">
                    <p>{datavideo[0].time}</p>
                  </div>
                </div>
              </div>

              <div className="video-2">
                <div className="thumbnail-2">
                  <img
                    src={require("./picture/bottom-play (2).png")}
                    alt="bottom-play"
                    className="bottom-play-2"
                  />
                  <img
                    src={datavideo[1].picture.link}
                    alt={datavideo[1].picture.name}
                    className="thumbnail-video-2"
                  />
                </div>
                <div className="title-video-2">
                  <p>{datavideo[1].title}</p>
                </div>
                <div className="timer-2">
                  <img
                    src={require("./picture/clock.png")}
                    alt="clock"
                    className="clock-2"
                  />
                  <div className="time-2">
                    <p>{datavideo[1].time}</p>
                  </div>
                </div>
              </div>

              <div className="video-3">
                <div className="thumbnail-3">
                  <img
                    src={require("./picture/bottom-play (3).png")}
                    alt="bottom-play"
                    className="bottom-play-3"
                  />
                  <img
                    src={datavideo[2].picture.link}
                    alt={datavideo[2].picture.name}
                    className="thumbnail-video-3"
                  />
                </div>
                <div className="title-video-3">
                  <p>{datavideo[2].title}</p>
                </div>
                <div className="timer-3">
                  <img
                    src={require("./picture/clock.png")}
                    alt="clock"
                    className="clock-3"
                  />
                  <div className="time-3">
                    <p>{datavideo[2].time}</p>
                  </div>
                </div>
              </div>

              <div className="video-4">
                <div className="thumbnail-4">
                  <img
                    src={require("./picture/bottom-play (4).png")}
                    alt="bottom-play"
                    className="bottom-play-4"
                  />
                  <img
                    src={datavideo[3].picture.link}
                    alt={datavideo[3].picture.name}
                    className="thumbnail-video-4"
                  />
                </div>
                <div className="title-video-4">
                  <p>{datavideo[3].title}</p>
                </div>
                <div className="timer-4">
                  <img
                    src={require("./picture/clock.png")}
                    alt="clock"
                    className="clock-4"
                  />
                  <div className="time-4">
                    <p>{datavideo[3].time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer"
          style={{ display: "flex", flexDirection: "non" }}
        >
          <img
            src={require("./picture/image 1.png")}
            alt="logo"
            className="logo-footer"
          />
          <div className="icon-contact">
            <img
              src={require("./picture/twittter.png")}
              alt="logo-twitter"
              className="logo-twitter"
            />
            <img
              src={require("./picture/facebook.png")}
              alt="logo-facebook"
              className="logo-facebook"
            />
            <img
              src={require("./picture/instagram.png")}
              alt="logo-instagram"
              className="logo-instagram"
            />
            <img
              src={require("./picture/linkedin.png")}
              alt="logo-linkedin"
              className="logo-linkedin"
            />
          </div>
          <div className="VPDD">VPĐD MEGA LIFESCIENCES PUBLIC COMPANY LIMITED TẠI TP.HCM</div>
          <div className="diachi">
            <img
              src={require("./picture/Group 2.png")}
              alt="icon"
              className="icon-diadiem"
            />
            <div className="diadiem">Tầng 5 Toà nhà Etown 1, 364 Cộng Hoà, Quận Tân Bình, TP.HCM</div>
          </div>
          <div className="telephone">
            <img
              src={require("./picture/Group 3.png")}
              alt="icon"
              className="icon-sdt"
            />
            <div className="sdt">84-28-38 123 166</div>
          </div>
          <div className="mail">
            <img
              src={require("./picture/Group 145.png")}
              alt="icon"
              className="icon-mail"
            />
            <div className="email">Megavietnam@megawecare.com</div>
          </div>
          <div className="text">
            <div className="giay-phep">GIẤY PHÉP QUẢNG CÁO</div>
            <div className="so-giay">Số giấy phép: 79-03724-01</div>
            <div className="so-giay-xac">Số giấy xác nhận quảng cáo thuốc</div>
            <div className="thong-tin">THÔNG TIN HỖ TRỢ</div>
            <div className="dieu-khoan">Điều khoản sử dụng</div>
            <div className="quy-trinh">Quy trình đăng tải thông tin</div>
            <div className="chinh-sach">Chính sách bảo mật</div>
          </div>
          <div className="line-footer"></div>
          <div className="inter">Inter LIVOLIN FORTE 2020 - 2028 | Privacy Policy | Responsible Disclosure</div>
          <div className="background-footer"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
