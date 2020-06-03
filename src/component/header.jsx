import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const datamenu = ["Về Livolin", "Cẩm nang gan", "Câu hỏi thường gặp", "Trải nghiệm", "Tin tức", "Diễn đàn", "Về chúng tôi"];

export default class Header extends React.Component{
    render (){
        return (
          <div
            className="Header"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link to="/">
              <img
                src={require("../picture/image 1.png")}
                alt="logo"
                className="logo"
              />
            </Link>
            <div
              className="section-menu"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }} className="zero">
                {datamenu[0]}
              </Link>
              <Link to="/" style={{ textDecoration: "none" }} className="one">
                {datamenu[1]}
              </Link>
              <Link to="/" style={{ textDecoration: "none" }} className="two">
                {datamenu[2]}
              </Link>
              <Link to="/" style={{ textDecoration: "none" }} className="three">
                {datamenu[3]}
              </Link>
              <Link to="/" style={{ textDecoration: "none" }} className="four">
                {datamenu[4]}
              </Link>
              <Link to="/" style={{ textDecoration: "none" }} className="five">
                {datamenu[5]}
              </Link>
              <Link to="/" style={{ textDecoration: "none" }} className="six">
                {datamenu[6]}
              </Link>
            </div>
            <div className="line-search"></div>
            <div className="search">
              <img
                src={require("../picture/search.png")}
                alt="icon-search"
                className="icon-search"
              />
              <div className="placeholder-search">
                <p>Tìm kiếm</p>
              </div>
            </div>
          </div>
        );
    }
}