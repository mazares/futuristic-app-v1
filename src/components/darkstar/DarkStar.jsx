import "./DarkStar.css";

export default function DarkStar() {
  return (
    <div className="dark-star">
      <div className="hexes">
        <div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
        </div>

        <div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
        </div>

        <div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
        </div>

        <div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
        </div>
      </div>

      <div className="sphere">
        <div className="latitudes">
          <div className="latitude-1"></div>
          <div className="latitude-2"></div>
          <div className="latitude-3"></div>
          <div className="latitude-4"></div>
          <div className="latitude-5"></div>
          <div className="latitude-6"></div>
        </div>

        <div className="longitudes">
          <div className="longitude-1"></div>
          <div className="longitude-2"></div>
          <div className="longitude-3"></div>
          <div className="longitude-4"></div>
          <div className="longitude-5"></div>
          <div className="longitude-6"></div>
        </div>
      </div>
    </div>
  );
}
