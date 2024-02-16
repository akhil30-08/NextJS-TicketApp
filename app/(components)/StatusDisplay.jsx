const StatusDisplay = ({ status }) => {
  const colorAdd = (status) => {
    let color = 'bg-slate-700';

    switch (status.toLowerCase()) {
      case 'done':
        color = 'bg-green-200';
        return color;

      case 'started':
        color = 'bg-yellow-200';
        return color;

      case 'not started':
        color = 'bg-red-200';
        return color;
    }

    return color;
  };

  return (
    <div
      className={`rounded-full max-sm:w-16 break-words max-sm:mt-2 px-2 py-1 text-xs font-semibold text-gray-700 ${colorAdd(
        status
      )}`}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
