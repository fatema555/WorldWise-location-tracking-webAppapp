import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
// export default function AppLayout() {
//   return (
//     <div>
//       <h1>App Layout works</h1>
//     </div>
//   );
// }
