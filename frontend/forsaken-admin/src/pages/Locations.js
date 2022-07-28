import React from "react";

function Locations() {
  return (
    <div className="locations">
      <h1>Locations</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Location Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Average Rating</th>
          <th>Average EMF</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Ain Saoufar Train Station</td>
          <td>33.80</td>
          <td>35.70</td>
          <td>4.0</td>
          <td>60</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bhamdoun Synagogue</td>
          <td>33.80</td>
          <td>35.66</td>
          <td>4.5</td>
          <td>80</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Qasr Bechara Khoury</td>
          <td>33.88</td>
          <td>35.49</td>
          <td>3.9</td>
          <td>70</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Kassouf Hotel</td>
          <td>33.90</td>
          <td>35.71</td>
          <td>4.7</td>
          <td>120</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Amrieh Hotel</td>
          <td>33.91</td>
          <td>35.66</td>
          <td>4.9</td>
          <td>230</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Abandoned Aquarium</td>
          <td>34.25</td>
          <td>35.65</td>
          <td>3.6</td>
          <td>68</td>
        </tr>
        <tr>
          <td>7</td>
          <td>McMagic</td>
          <td>33.95</td>
          <td>35.60</td>
          <td>3.9</td>
          <td>83</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Donna Maria</td>
          <td>33.80</td>
          <td>35.69</td>
          <td>4.2</td>
          <td>56</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Kfar Aamay</td>
          <td>33.76</td>
          <td>35.59</td>
          <td>4.4</td>
          <td>90</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Grand Hotel Aaley</td>
          <td>33.80</td>
          <td>35.59</td>
          <td>4.7</td>
          <td>130</td>
        </tr>
      </table>
    </div>
  );
}

export default Locations;
