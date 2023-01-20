import React from "react";
import "./Content.css";
import RowData from "../../constants/url/URl";
import Row from "../row/row";

export default function Content() {
  return (
    <div className="content-wrapper">
      {RowData.map((el) => {
        // console.log(el);
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
}
