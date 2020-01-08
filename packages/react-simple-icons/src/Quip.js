import React from 'react';
import PropTypes from 'prop-types';

const Quip = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.154 22.154H12a10.06 10.06 0 01-7.4-3.201C2.66 16.89 1.69 14.19 1.868 11.35c.315-5.091 4.39-9.168 9.482-9.484.22-.014.44-.02.657-.02A10.058 10.059 0 0118.952 4.6a10.058 10.059 0 013.202 7.4zm-1.938-18.9C17.778.963 14.59-.186 11.236.024 5.218.399.398 5.219.024 11.237c-.207 3.353.94 6.543 3.231 8.98A12.047 12.048 0 0012 24h11.077c.51 0 .923-.413.923-.922V12a12.047 12.048 0 00-3.784-8.745m-4.062 11.976H7.846a.923.923 0 000 1.846h8.308a.923.923 0 000-1.846M7.846 8.77h8.308a.923.923 0 000-1.847H7.846a.923.923 0 000 1.847m-2.769 2.308a.923.923 0 000 1.845h13.846a.923.923 0 000-1.846H5.077Z" />
    </svg>
  );
};

Quip.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Quip.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Quip;