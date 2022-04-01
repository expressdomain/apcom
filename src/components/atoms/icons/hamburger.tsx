import { FC } from 'react';
import styles from './hamburger.module.scss';

type HamburgerProps = {
  isActive: boolean;
};

/**
 * Hamburger component
 *
 * Render a Hamburger icon.
 */
const Hamburger: FC<HamburgerProps> = ({ isActive }) => {
  const stateClass = isActive ? `${styles['icon--active']}` : '';
  const iconClasses = `${styles.icon} ${stateClass}`;

  return <span className={iconClasses}></span>;
};

export default Hamburger;
