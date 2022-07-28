import React from "react";
import img0 from "../assets/images/profile pictures/0.jfif";
import img1 from "../assets/images/profile pictures/1.jpg";
import img2 from "../assets/images/profile pictures/2.jpg";
import img3 from "../assets/images/profile pictures/3.jpg";
import img4 from "../assets/images/profile pictures/4.jpg";
import img5 from "../assets/images/profile pictures/5.jpg";
import img6 from "../assets/images/profile pictures/6.jpg";

function Users() {
  return (
    <div className="users">
      <div className="locations">
        <h1>Users</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Profile Picture</th>
            <th>Followers</th>
            <th>Followings</th>
            <th>Posts</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Pablo Sreih</td>
            <td>
              <img className="prof-img-container" src={img0} />
            </td>
            <td>3</td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vladimir Mawla</td>
            <td>
              <img className="prof-img-container" src={img1} />
            </td>
            <td>0</td>
            <td>4</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Alaa Al Tawil</td>
            <td>
              <img className="prof-img-container" src={img2} />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mohammad Jaffal</td>
            <td>
              <img className="prof-img-container" src={img3} />
            </td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Jad Khalil</td>
            <td>
              <img className="prof-img-container" src={img4} />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Candy Sbeih</td>
            <td>
              <img className="prof-img-container" src={img5} />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Hanady Nehme</td>
            <td>
              <img className="prof-img-container" src={img6} />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Users;
