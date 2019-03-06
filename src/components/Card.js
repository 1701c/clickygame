import React from "react";

const Card = props => (
  <div style={cardStyle} onClick={() => props.clickCount(props.id)}>
    <div style={imgContainerStyle}>
      <img style={imgStyle} alt={props.name} src={props.image} />
    </div>
  </div>
);

const cardStyle = {
  // background: "#fff",
  // borderRadius: "10px",
  height: "275px",
  // margin: "1rem",
  // position: "relative",
  width: "275px",
  // boxShadow: "0 3px 6px #999, 0 3px 6px #999",
  // textAlign: "center",
  float: "left"
}

const imgContainerStyle = {
  height: "100%",
  overflow: "hidden",
  textAlign: "center",
  
    // marginRight: "auto",
  backgroundImage: "url('https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807')",
  backgroundSize: "100%"
  // background: "#6CADDC"
}

const imgStyle  = {
  display: "block",
    margin: "auto",
    paddingTop: "30px",
  width: "75%"
}

export default Card;