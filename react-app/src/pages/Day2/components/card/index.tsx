import styles from './card.module.scss';

const Card = ({ children, className, title }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.card + (className ? ` ${className}` : '')}>
      {title &&
        <div className="mx-10 mt-14 mb-6 text-3xl font-bold">{title}</div>
      }
      {children}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export { Card };
