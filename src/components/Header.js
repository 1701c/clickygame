import React from "react";

const Header = props => (
  <table style={tableStyle}>
  <tbody>
  <tr>
      <td style={tdStyle}>{props.children}</td>
      <td style={tdStyle}>Click Item to Begin</td>
      <td style={tdStyle}>Score: {props.score} Highscore: {props.highscore}</td>
      </tr></tbody>
  </table>
);

const tableStyle = {
  width: "100%",
  fontSize: "3rem",
  // color: '#CC0000',
  backgroundColor: '#CC0000',
  marginBottom: '10px',
  display: 'inlineBlock'
}

const tdStyle = {
  // display: 'inline',
  textAlign: 'center',
  width: '33.3%'
}

export default Header;
