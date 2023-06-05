import johnwick from "../../src/assets/johnwick.jpg"

export default function Carrusel() {
  return (
    <div className="slider">
      <ul>
        <li>
          <img
            src={johnwick}
            alt=""
          />
        </li>
        <li>
          <img
            src="http://youghaltennisclub.ie/wp-content/uploads/2014/06/Tennis-Wallpaper-High-Definition-700x300.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="http://welltechnically.com/wp-content/uploads/2013/08/android-wallpapers-700x300.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="http://welltechnically.com/wp-content/uploads/2013/09/android-widescreen-wallpaper-14165-hd-wallpapers-700x300.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
}
