import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import image from "../assets/images/abandoned places/4.jpg";
import image1 from "../assets/images/abandoned places/1.jpg";
import image2 from "../assets/images/abandoned places/7.jpg";
import image3 from "../assets/images/abandoned places/10.jpg";

function Posts() {
  return (
    <div className="posts">
      <h1>Pending Posts</h1>
      <table>
        <tr>
          <th className="first-tr">ID</th>
          <th>Picture</th>
          <th>User</th>
        </tr>
        <tr>
          <td>13</td>
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
          <td>17</td>
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
          <td>19</td>
          <td>
            <img src={image2} />
          </td>
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
          <td>20</td>
          <td>
            <img src={image3} />
          </td>
          <td>Mohammad Jaffal</td>
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
