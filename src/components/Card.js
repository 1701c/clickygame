import React from "react";

const Card = props => (
  <div style={cardStyle} onClick={() => props.cardClicked(props.id)}>
    <div style={imgContainerStyle}>
      <img style={imgStyle} alt={props.name} src={props.image} />
    </div>
  </div>
);

const cardStyle = {
  height: "275px",
  width: "275px",
  float: "left"
}

const imgContainerStyle = {
  height: "100%",
  overflow: "hidden",
  textAlign: "center",
  backgroundImage: "url('https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807')",
  backgroundSize: "100%"
}

const imgStyle  = {
  display: "block",
    margin: "auto",
    paddingTop: "30px",
  width: "75%"
}

export default Card;