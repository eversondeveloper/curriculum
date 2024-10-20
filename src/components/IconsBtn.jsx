/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import styles from "../styles/IconsBtn.module.css";

export default function IconBtn(props) {
  const [corIcon, setCorIcon] = useState("#e2e2e2");

  useEffect(() => {
    if (props.corBtn == 1) {
      setCorIcon("#e2e2e2");
    } else if (props.corBtn == 2) {
      setCorIcon("#232323");
    }
  });

  const youtubeIcon = () => {
    return (
      <svg
        className={styles.icons}
        fill={corIcon}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 500 500"
      >
        <path d="M427.81,53.61H72.18C32.38,53.61,0,85.99,0,125.79v248.41c0,39.8,32.38,72.19,72.18,72.19h355.63c39.8,0,72.19-32.38,72.19-72.19V125.79c0-39.8-32.38-72.19-72.19-72.19ZM322.67,258.15l-125.75,62.21c-4.93,2.67-21.68-.9-21.68-6.51v-127.7c0-5.68,16.89-9.24,21.82-6.43l120.37,65.49c5.05,2.87,10.34,10.18,5.24,12.94Z" />
      </svg>
    );
  };

  const emailIcon = () => {
    return (
      <svg
        className={styles.icons}
        fill={corIcon}
        data-name="Camada 1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 500 500"
      >
        <path d="M427.81,53.61H72.18C32.38,53.61,0,85.99,0,125.79v248.41c0,39.8,32.38,72.19,72.18,72.19h355.63c39.8,0,72.19-32.38,72.19-72.19V125.79c0-39.8-32.38-72.19-72.19-72.19ZM427.81,88.11c2.95,0,5.82.38,8.58,1.02l-150.03,170.24c-9.2,10.43-22.45,16.42-36.35,16.42s-27.16-5.98-36.35-16.42L63.62,89.13c2.76-.64,5.62-1.02,8.57-1.02h355.63ZM465.49,374.21c0,20.78-16.9,37.68-37.68,37.68H72.18c-20.78,0-37.68-16.9-37.68-37.68V125.79c0-5.05,1.02-9.87,2.83-14.28l150.43,170.68c15.74,17.86,38.43,28.1,62.24,28.1s46.49-10.24,62.24-28.1l150.42-170.68c1.81,4.4,2.83,9.22,2.83,14.27v248.41Z" />
      </svg>
    );
  };

  const githubIcon = () => {
    return (
      <svg
        className={styles.icons}
        fill={corIcon}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 500 500"
      >
        <path d="M0,240.15c1.26-9.14,2.34-18.3,3.8-27.4,5.75-35.74,19.45-68.31,39.89-98.05,30.92-45,72.38-76.51,123.7-94.81,34.83-12.42,70.85-15.92,107.65-12.48,45.84,4.3,87.08,20.48,123.9,47.86,44.79,33.31,75.08,76.98,91.03,130.43,10.24,34.31,12.45,69.4,7.51,104.79-9.73,69.82-44.39,125.05-99.93,167.52-20.15,15.4-42.82,26.42-66.82,34.62-11.01,3.76-18.47-1.52-18.52-13.12-.09-21.64.03-43.28-.05-64.92-.04-10.78-.64-21.59-5.34-31.49-2.75-5.79-6.57-11.06-9.93-16.61,9.11-1.7,19.03-2.96,28.64-5.44,25.46-6.57,48.27-17.86,63.72-40.21,11.24-16.26,16.45-34.89,18.74-54.3,1.74-14.72,2.25-29.5-.59-44.21-3.15-16.34-10.2-30.78-21.13-43.27-1.98-2.26-2.31-4.12-1.34-6.91,7.19-20.56,4.41-40.68-3.21-60.46-.47-1.22-2.53-2.37-3.98-2.57-8.69-1.23-16.91,1.22-24.53,4.82-12.61,5.94-24.79,12.78-37.28,18.98-2.23,1.11-5.31,1.8-7.63,1.22-38.97-9.74-77.86-9.75-116.82.04-2.3.58-5.55-.07-7.59-1.36-15.87-10.1-32.62-18.16-50.86-22.96-.31-.08-.62-.21-.94-.27-11.66-2.46-13.73-1.15-17.08,10.31-5.19,17.76-6.12,35.45.09,53.21.5,1.43.04,3.92-.95,5.05-20.97,23.84-25.72,52.05-22.86,82.52,1.68,17.83,5.89,34.88,13.88,50.94,11.26,22.61,30.31,36.42,53.36,44.4,13.7,4.74,28.35,6.72,42.57,9.94.75.17,1.52.25,1.64.27-3.64,6.62-7.39,13.15-10.82,19.84-1.16,2.27-2.04,4.92-2.14,7.44-.21,5.27-2.98,7.65-7.75,8.94-15.83,4.28-31.53,7.05-46.67-2.24-7.95-4.88-13.87-11.71-18.55-19.68-7.2-12.26-17.3-21.25-30.96-25.29-5.06-1.5-10.82-1.09-16.22-.77-3.29.19-4.36,2.87-2.14,5.65,2.21,2.76,4.41,5.93,7.36,7.64,13.41,7.77,20.94,20.09,26.96,33.64,3.44,7.74,6.67,15.46,13.22,21.34,10.5,9.43,23.17,12.99,36.74,13.6,11.77.53,23.58.11,36.13.11,0,7.08-.03,15.33.01,23.59.03,6.35.24,12.69.22,19.03-.03,11.7-7.74,17.36-18.81,13.59-36.94-12.58-69.45-32.42-96.7-60.41-26.42-27.14-46.62-58.3-59.07-94.27-7.06-20.39-11.16-41.37-12.79-62.86C.62,273.24.26,271.34,0,269.44c0-9.76,0-19.53,0-29.29Z" />
      </svg>
    );
  };

  const linkedinIcon = () => {
    return (
      <svg
        className={styles.icons}
        fill={corIcon}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 500 500"
      >
        <path d="M8.25,166.18h103.74v333.25H8.25V166.18ZM60.14.58c33.18,0,60.06,26.92,60.06,60.02s-26.88,60.1-60.06,60.1S0,93.75,0,60.6,26.88.58,60.14.58M176.99,499.42h103.53v-164.84c0-43.46,8.22-85.55,62.14-85.55s53.83,49.7,53.83,88.37v162.02h103.51v-182.77c0-89.75-19.34-158.72-124.21-158.72-50.44,0-84.23,27.6-98.09,53.83h-1.35v-45.59h-99.36v333.25Z" />
      </svg>
    );
  };

  const whatsappIcon = () => {
    return (
      <svg
        className={styles.icons}
        fill={corIcon}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 500 500"
      >
        <path d="M.01,499.59l32.19-129.09C11.69,333.5.9,292.03.9,249.95.9,112.35,112.84.41,250.44.41s249.54,111.95,249.54,249.54-111.95,249.55-249.54,249.55c-41.31,0-82.1-10.43-118.62-30.24L.01,499.59ZM138.58,418.61l8.56,5.1c31.41,18.71,67.13,28.61,103.31,28.61,111.59,0,202.37-90.78,202.37-202.38S362.03,47.58,250.44,47.58,48.07,138.36,48.07,249.95c0,36.85,10.24,73.13,29.6,104.93l5.25,8.62-16.18,69.4,71.85-14.28Z" />
        <path d="M343.27,284.65c-10.27-6.14-23.64-13-35.74-8.05-9.28,3.8-15.21,18.33-21.22,25.75-3.09,3.81-6.77,4.4-11.51,2.49-34.85-13.88-61.55-37.14-80.78-69.2-3.26-4.98-2.67-8.91,1.25-13.53,5.81-6.84,13.1-14.6,14.68-23.82,1.57-9.21-2.75-19.99-6.56-28.2-4.87-10.49-10.31-25.44-20.82-31.38-9.66-5.46-22.38-2.4-30.98,4.61-14.85,12.09-22.02,31.04-21.8,49.82.06,5.34.72,10.66,1.96,15.81,3,12.39,8.72,23.95,15.17,34.96,4.86,8.29,10.14,16.34,15.83,24.08,18.64,25.32,41.83,47.32,68.68,63.77,13.42,8.22,27.87,15.42,42.83,20.37,16.78,5.54,31.73,11.32,49.85,7.87,18.97-3.6,37.68-15.34,45.21-33.63,2.23-5.41,3.34-11.44,2.1-17.16-2.58-11.82-18.58-18.85-28.14-24.56Z" />
      </svg>
    );
  };

  return (
    <div className={styles.iconscase} style={{ width: `${props.tamCase}%` }}>
      <div className={styles.iconsbtn}>
        <a
          target="_blank"
          href="mailto:eversonsilvadeveloper@gmail.com"
          className={styles.linksicons}
        >
          {emailIcon(1)}
        </a>
      </div>
      <div className={styles.iconsbtn} style={{ display: "none" }}>
        <a
          target="_blank"
          href="https://wa.me/55321986332900"
          className={styles.linksicons}
        >
          {whatsappIcon(1)}
        </a>
      </div>
      <div className={styles.iconsbtn}>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UC2G6ZZilUH2UUCkox8KUuGw"
          className={styles.linksicons}
        >
          {youtubeIcon(2)}
        </a>
      </div>
      <div className={styles.iconsbtn}>
        <a
          target="_blank"
          href="https://github.com/Everson33rj"
          className={styles.linksicons}
        >
          {githubIcon(1)}
        </a>
      </div>
      <div className={styles.iconsbtn}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/everson-silva-53308327/"
          className={styles.linksicons}
        >
          {linkedinIcon(1)}
        </a>
      </div>
    </div>
  );
}
