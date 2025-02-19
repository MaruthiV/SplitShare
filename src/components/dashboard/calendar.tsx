interface DayInput {
  date: number;
  inCurrentMonth: boolean;
  }

const DateRow: React.FC<{ key: number; days: DayInput[] }> = ({ key, days }) => {
  return (
    <div className="flex h-1/6 flex-row text-xs" key={key}>
      {days.map((day: DayInput, index: number) => (
        <p
          key={index}
          className={`flex-1 items-center border-[0.25px] border-black p-[1%] text-center ${
            day.inCurrentMonth ? "" : "text-gray-400"
          }`}
        >
          {day.date}
        </p>
      ))}
    </div>
  );
};

const Calendar = () => {
  const Months: string[] = 
  ["January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"]

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDaysForRow = (startIndex: number) => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = startIndex + i;
      if (day >= 1 && day <= daysInMonth) {
        days.push({
          date: day,
          inCurrentMonth: true,
        });
      } else if (day > daysInMonth) {
        days.push({
          date: day - daysInMonth,
          inCurrentMonth: false,
        });
      } else {
        const daysInPrevMonth = getDaysInMonth(
          currentYear,
          currentMonth - 1 < 0 ? 11 : currentMonth - 1
        );
        days.push({
          date: daysInPrevMonth + day,
          inCurrentMonth: false,
        });
      }
    }

    return days;
  };

  const weeks = [];
  let startIndex = 1 - firstDayOfWeek;

  while (startIndex <= getDaysInMonth(currentYear, currentMonth)) {
    weeks.push(getDaysForRow(startIndex));
    startIndex += 7;
  }

  return (
    <div className="mb-[2%] mt-[0.5%] flex h-full w-full flex-col">
      <p className="ml-[12%] flex text-xs">
        {Months[currentMonth]} {currentYear}
      </p>
      <div className="ml-[10%] mt-[1%] h-full w-[80%]">
        <div className="h-2/7 flex flex-row items-center text-xs">
          <p className="border-1 flex-1 items-center border-b border-black text-center">
            Mo
          </p>
          <p className="border-1 flex-1 items-center border-b border-black text-center">
            Tu
          </p>
          <p className="border-1 flex-1 items-center border-b border-black text-center">
            We
          </p>
          <p className="border-1 flex-1 items-center border-b border-black text-center">
            Th
          </p>
          <p className="border-1 flex-1 items-center border-b border-black text-center">
            Fr
          </p>
          <p className="border-1 flex-1 items-center border-b border-black text-center">
            Sa
          </p>
          <p className="border-1 flex-1 items-center border-b border-black text-center">
            Su
          </p>
        </div>
        {weeks.map((week, index) => (
          <DateRow key={index} days={week} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
