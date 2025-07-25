export default function Spinner({ size = 5, color = 'white' }) {
  const sizeMap = {
    4: 'h-4 w-4',
    5: 'h-5 w-5',
    6: 'h-6 w-6',
    8: 'h-8 w-8',
  };
  const colorMap = {
    white: 'text-white',
    blue: 'text-blue-600',
    green: 'text-green-500',
    red: 'text-red-500',
  };

  const sizeClass = sizeMap[size] || 'h-5 w-5';
  const colorClass = colorMap[color] || 'text-white';

  return (
    <svg
      className={`animate-spin ${sizeClass} ${colorClass}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}