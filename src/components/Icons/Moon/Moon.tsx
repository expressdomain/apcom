import { useIntl } from 'react-intl';
import styles from './Moon.module.scss';

const MoonIcon = () => {
  const intl = useIntl();

  return (
    <svg
      className={styles.moon}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        {intl.formatMessage({
          defaultMessage: 'Dark theme',
          description: 'Icons: Moon icon (dark theme)',
          id: 'ode0YK',
        })}
      </title>
      <path d="M 51.077315,1.9893942 A 43.319985,43.319985 0 0 1 72.840039,39.563145 43.319985,43.319985 0 0 1 29.520053,82.88313 43.319985,43.319985 0 0 1 5.4309911,75.569042 48.132997,48.132997 0 0 0 46.126047,98 48.132997,48.132997 0 0 0 94.260004,49.867002 48.132997,48.132997 0 0 0 51.077315,1.9893942 Z" />
    </svg>
  );
};

export default MoonIcon;
