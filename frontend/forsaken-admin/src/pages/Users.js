import React, { useState, useEffect } from "react";
import axios from "axios";
// import img0 from "../assets/images/profile pictures/0.jpg";
// import img1 from "../assets/images/profile pictures/1.jpg";
// import img2 from "../assets/images/profile pictures/2.jpg";
// import img3 from "../assets/images/profile pictures/3.jpg";
// import img4 from "../assets/images/profile pictures/4.jpg";
// import img5 from "../assets/images/profile pictures/5.jpg";
// import img6 from "../assets/images/profile pictures/6.jpg";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const array = [];
    await axios
      .get("http://127.0.0.1:8000/api/getAllUsers")
      .then((response) => {
        for (var i = 0; i < response.data.length; i++) {
          array.push(response["data"][i]);
        }
        setData(array);
        console.log(array);
      });
  }

  return (
    <div className="users">
      <div className="locations">
        <h1>Users</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profile Picture</th>
            <th>Followers</th>
            <th>Followings</th>
            <th>Posts</th>
          </tr>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <img className="prof-img-container" src={data.profile_pic} />
                </td>
                <td>{data.followers.length}</td>
                <td>{data.followings.length}</td>
                <td>{data.posts.length}</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>1</td>
            <td>Pablo Sreih</td>
            <td>
              <img className="prof-img-container" />
            </td>
            <td>3</td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vladimir Mawla</td>
            <td>
              <img className="prof-img-container" />
            </td>
            <td>0</td>
            <td>4</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Alaa Al Tawil</td>
            <td>
              <img className="prof-img-container" />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mohammad Jaffal</td>
            <td>
              <img className="prof-img-container" />
            </td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Jad Khalil</td>
            <td>
              <img className="prof-img-container" />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Candy Sbeih</td>
            <td>
              <img className="prof-img-container" />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Hanady Nehme</td>
            <td>
              <img className="prof-img-container" />
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr> */}
        </table>
      </div>
    </div>
  );
}

export default Users;
