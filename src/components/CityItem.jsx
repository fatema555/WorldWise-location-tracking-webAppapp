import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
// import { convertToEmoji } from "./Form";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  // console.log(city);
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          {emoji && emoji.length === 2 ? (
            <img
              src={`https://flagcdn.com/${emoji.toLowerCase()}.svg`}
              alt={emoji}
              width="22"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          ) : (
            emoji
          )}
        </span>
        {/* <span className={styles.emoji}>
          {emoji && emoji.length === 2 ? convertToEmoji(emoji) : emoji}
        </span> */}
        {/* <span className={styles.emoji}>
          {emoji && emoji.length === 2 ? (
            <img
              src={`https://flagcdn.com/24x18/${emoji.toLowerCase()}.png`}
              alt={emoji}
              style={{
                width: "20px",
                height: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          ) : (
            emoji
          )}
        </span> */}
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

// function convertToEmoji(countryCode) {
//   if (!countryCode || countryCode.length > 2) return countryCode;
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   console.log("Country Code:", countryCode);
//   return String.fromCodePoint(...codePoints);
// }
