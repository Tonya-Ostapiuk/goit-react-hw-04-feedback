import propTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <>
    <h2 className={css.title}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};