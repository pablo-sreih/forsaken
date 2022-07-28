import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import image from "../assets/images/bg.jpg";
import image1 from "../assets/images/abandoned places/1.jpg";

function Posts() {
  return (
    <div className="posts">
      <table>
        <tr>
          <th className="first-tr">ID</th>
          <th>Picture</th>
          <th>User</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <img src={image} />
          </td>
          <td>Pablo Sreih</td>
          <td>
            <button className="check">
              <BsIcons.BsCheckLg />
            </button>
            <button className="close">
              <GrIcons.GrClose />
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <img src={image1} />
          </td>
          <td>Vladimir Mawla</td>
          <td>
            <button className="check">
              <BsIcons.BsCheckLg />
            </button>
            <button className="close">
              <GrIcons.GrClose />
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>ahgsjh</td>
          <td>Alaa Al Tawil</td>
          <td>
            <button className="check">
              <BsIcons.BsCheckLg />
            </button>
            <button className="close">
              <GrIcons.GrClose />
            </button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>ahgsjh</td>
          <td>Charbel Daoud</td>
          <td>
            <button className="check">
              <BsIcons.BsCheckLg />
            </button>
            <button className="close">
              <GrIcons.GrClose />
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Posts;
