import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <div className={styles.bg}>
        <Image
          className={styles.img1}
          src="/image/about.png"
          objectFit="cover"
          layout="fill"
          alt=""
        />
        <div className={styles.text}></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.wrapper}>
        <Image
          className={styles.star}
          src="/image/donate.jpg"
          height={"500"}
          width={"500"}
          alt=""
        />
        <h3 className={styles.new}>
          The <i>Helping Hands</i> is a software solution for a nonprofit
          organization. It manages the charitable donations and also the donor
          base. Such a system includes features such as electronic fund
          transfer, donation management, fundraising, donor management, and
          event management.
        </h3>
      </div>
    </div>
  );
};

export default about;
