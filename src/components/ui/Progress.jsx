import PropTypes from 'prop-types';

export function Progress({ value, max = 100 }) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number
};