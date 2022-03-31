import { FC } from 'react';
import { useIntl } from 'react-intl';
import styles from './cc-by-sa.module.scss';

/**
 * CCBySA component
 *
 * Render a CC BY SA svg icon.
 */
const CCBySA: FC = () => {
  const intl = useIntl();

  return (
    <svg
      className={styles.icon}
      viewBox="0 0 211.99811 63.999996"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {intl.formatMessage({
          defaultMessage: 'CC BY SA',
          description: 'CCBySA: icon title',
          id: 'cl7YNU',
        })}
      </title>
      <path d="m 175.53911,15.829498 c 0,-3.008 1.485,-4.514 4.458,-4.514 2.973,0 4.457,1.504 4.457,4.514 0,2.971 -1.486,4.457 -4.457,4.457 -2.971,0 -4.458,-1.486 -4.458,-4.457 z" />
      <path d="m 188.62611,24.057498 v 13.085 h -3.656 v 15.542 h -9.944 v -15.541 h -3.656 v -13.086 c 0,-0.572 0.2,-1.057 0.599,-1.457 0.401,-0.399 0.887,-0.6 1.457,-0.6 h 13.144 c 0.533,0 1.01,0.2 1.428,0.6 0.417,0.4 0.628,0.886 0.628,1.457 z" />
      <path d="m 179.94147,-1.9073486e-6 c -8.839,0 -16.34167,3.0848125073486 -22.51367,9.2578125073486 -6.285,6.4000004 -9.42969,13.9811874 -9.42969,22.7421874 0,8.762 3.14469,16.284312 9.42969,22.570312 6.361,6.286 13.86467,9.429688 22.51367,9.429688 8.799,0 16.43611,-3.181922 22.91211,-9.544922 6.096,-5.98 9.14453,-13.464078 9.14453,-22.455078 0,-8.952 -3.10646,-16.532188 -9.31446,-22.7421874 -6.172,-6.172 -13.75418,-9.2578125073486 -22.74218,-9.2578125073486 z M 180.05475,5.7714825 c 7.238,0 13.40967,2.55225 18.51367,7.6562495 5.103,5.106 7.65625,11.294313 7.65625,18.570313 0,7.391 -2.51397,13.50575 -7.54297,18.34375 -5.295,5.221 -11.50591,7.828125 -18.6289,7.828125 -7.162,0 -13.33268,-2.589484 -18.51368,-7.771484 -5.18,-5.178001 -7.76953,-11.310485 -7.76953,-18.396485 0,-7.047 2.60813,-13.238266 7.82813,-18.572265 5.029,-5.1040004 11.18103,-7.6582035 18.45703,-7.6582035 z" />
      <path d="m 91.998554,27.114498 c 0.609,-3.924 2.189,-6.962 4.742,-9.114 2.552,-2.152 5.655996,-3.228 9.313996,-3.228 5.027,0 9.029,1.62 12,4.856 2.971,3.238 4.457,7.391 4.457,12.457 0,4.915 -1.543,9 -4.627,12.256 -3.088,3.256 -7.086,4.886 -12.002,4.886 -3.619,0 -6.742996,-1.085 -9.370996,-3.257 -2.629,-2.172 -4.209,-5.257 -4.743,-9.257 h 8.059 c 0.189996,3.886 2.532996,5.829 7.028996,5.829 2.246,0 4.057,-0.972 5.428,-2.914 1.373,-1.942 2.059,-4.534 2.059,-7.771 0,-3.391 -0.629,-5.971 -1.885,-7.743 -1.258,-1.771 -3.066,-2.657 -5.43,-2.657 -4.268,0 -6.667,1.885 -7.199996,5.656 h 2.342996 l -6.341996,6.343 -6.343,-6.343 z" />
      <path d="m 105.94241,-1.8610229e-6 c -8.799996,0 -16.304676,3.1054062610229 -22.513666,9.3164061610229 -6.285,6.3999997 -9.42969,13.9625467 -9.42969,22.6855467 0,8.763 3.14469,16.28336 9.42969,22.568359 6.361,6.286001 13.86467,9.429688 22.513666,9.429688 8.836,0 16.47511,-3.162328 22.91211,-9.486328 6.096,-6.057 9.14453,-13.559672 9.14453,-22.513672 0,-8.952 -3.10646,-16.513547 -9.31446,-22.6855468 -6.211,-6.21 -13.79118,-9.3144530610229 -22.74218,-9.3144530610229 z M 106.05569,5.7714825 c 7.275,0 13.44667,2.5698437 18.51367,7.7148435 5.103,5.028 7.65625,11.200672 7.65625,18.513672 0,7.353 -2.51397,13.46775 -7.54297,18.34375 -5.295,5.219 -11.50591,7.828125 -18.6289,7.828125 -7.161996,0 -13.332676,-2.589484 -18.513676,-7.771484 -5.18,-5.143 -7.76953,-11.275391 -7.76953,-18.400391 0,-7.046 2.60813,-13.217672 7.82813,-18.513672 5.029,-5.1429998 11.18103,-7.7148435 18.457026,-7.7148435 z" />
      <path d="M 31.942383,5.9265138e-7 C 23.066111,5.9265138e-7 15.579851,3.1065496 9.484666,9.3147376 6.399571,12.400832 4.046856,15.896269 2.427808,19.801386 0.80876,23.706506 0,27.771846 0,32.000976 c 0,4.26713 0.800415,8.32413 2.400463,12.17225 1.600051,3.84811 3.933123,7.30532 7.000216,10.37141 3.067093,3.06609 6.534587,5.40951 10.400708,7.02756 3.867116,1.62105 7.914819,2.4278 12.142946,2.4278 4.22813,0 8.32441,-0.8171 12.28553,-2.45515 3.96313,-1.63805 7.50614,-4.00301 10.62923,-7.0881 3.0081,-2.93309 5.28529,-6.31477 6.82834,-10.14289 1.54104,-3.82712 2.31257,-7.93174 2.31257,-12.31288 0,-4.34313 -0.78277,-8.44771 -2.34382,-12.31483 C 60.094133,15.82003 57.808593,12.380471 54.800503,9.3713796 48.515313,3.1241896 40.893653,5.9265136e-7 31.942383,5.9265138e-7 Z M 32.057623,5.7716626 c 7.23822,0 13.42863,2.571923 18.57478,7.7150794 2.47408,2.478074 4.35948,5.297144 5.65252,8.459244 1.29504,3.16209 1.94342,6.51384 1.94342,10.05694 0,7.35423 -2.49445,13.46816 -7.4846,18.34432 -2.59208,2.51407 -5.49406,4.43661 -8.71316,5.77166 -3.2231,1.33404 -6.54486,1.9981 -9.97296,1.9981 -3.467107,0 -6.782568,-0.65672 -9.943661,-1.97076 -3.164098,-1.31604 -5.999858,-3.21894 -8.513933,-5.71502 -2.515077,-2.49507 -4.447918,-5.33279 -5.800959,-8.51588 -1.354042,-3.1791 -2.029358,-6.48331 -2.029358,-9.91242 0,-3.4671 0.675316,-6.79186 2.029358,-9.97295 1.352043,-3.1811 3.285882,-6.046798 5.800959,-8.599875 4.991151,-5.1041594 11.14337,-7.6584384 18.457594,-7.6584384 z" />
      <path d="m 50.114533,26.687816 -4.22913,2.22907 c -0.45702,-0.95103 -1.02003,-1.61905 -1.68605,-2.00006 -0.66802,-0.38001 -1.30704,-0.57102 -1.91406,-0.57102 -2.85709,0 -4.28713,1.88506 -4.28713,5.65717 0,1.71406 0.363,3.0841 1.08603,4.11313 0.72302,1.02903 1.78906,1.54405 3.2011,1.54405 1.86506,0 3.1801,-0.91503 3.94112,-2.74309 l 4.00012,2.00007 c -0.87502,1.56304 -2.05706,2.79108 -3.54111,3.68611 -1.48604,0.89602 -3.10509,1.34304 -4.85715,1.34304 -2.89608,0 -5.20915,-0.87503 -6.94121,-2.62908 -1.73605,-1.75205 -2.60207,-4.19013 -2.60207,-7.31323 0,-3.04809 0.88502,-5.46616 2.65808,-7.25722 1.77005,-1.79005 4.00812,-2.68608 6.7132,-2.68608 3.96212,-0.002 6.78321,1.54105 8.45826,4.62714 z" />
      <path d="m 31.656963,26.687816 -4.287128,2.22907 c -0.458013,-0.95103 -1.019029,-1.61905 -1.685048,-2.00006 -0.667024,-0.38001 -1.286042,-0.57102 -1.858057,-0.57102 -2.856087,0 -4.28613,1.88506 -4.28613,5.65717 0,1.71406 0.362014,3.0841 1.085029,4.11313 0.724025,1.02903 1.791056,1.54405 3.201101,1.54405 1.867057,0 3.181095,-0.91503 3.944118,-2.74309 l 3.942125,2.00007 c -0.83803,1.56304 -2.000065,2.79108 -3.486111,3.68611 -1.484043,0.89602 -3.123093,1.34304 -4.914149,1.34304 -2.857088,0 -5.163158,-0.87503 -6.915212,-2.62908 -1.752053,-1.75205 -2.62808,-4.19013 -2.62808,-7.31323 0,-3.04809 0.886028,-5.46616 2.657081,-7.25722 1.771054,-1.79005 4.009125,-2.68608 6.715205,-2.68608 3.963122,-0.002 6.800209,1.54105 8.515256,4.62714 z" />
    </svg>
  );
};

export default CCBySA;
