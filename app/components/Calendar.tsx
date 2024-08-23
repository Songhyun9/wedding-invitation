import React from 'react';
import { cn } from '../utils';

const Calendar: React.FC = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dates = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, null, null],
  ];

  return (
    <div className="mt-10 mb-16">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center pb-10">Calendar</p>
      <div className="flex flex-col items-center">
        <p className="font_gowun_dodum text-center mb-10 text-black font-semibold">2024년 10월 26일 토요일 오후 12시</p>
        <table className="border-collapse w-[355px] font_gowun_dodum ">
          <thead>
            <tr>
              {days.map((day, index) => (
                <th key={day} className={`p-2 text-center ${index === 0 ? 'text-[#d099a1]' : ''}`}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dates.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((date, dateIndex) => (
                  <td
                    key={`${weekIndex}-${dateIndex}`}
                    className={cn('p-2.5 py-5 text-center', {
                      'text-[#d099a1] relative': dateIndex === 0,
                    })}
                    // className={`p-2 text-center relative
                    //   ${date === 22 ? 'cal-heart text-white' : ''}
                    //   ${dateIndex === 0 ? 'text-[#d099a1]' : ''}
                    // `}
                  >
                    <span
                      className={cn('relative z-10', {
                        'text-white': date === 26,
                      })}
                    >
                      {date}
                    </span>
                    {date === 26 && (
                      <div className="w-9 h-8 absolute mt-[-30px] ml-[-3px]">
                        <div className="cal-heart w-full h-full" />
                      </div>
                    )}
                    {date === 26 && (
                      <div className="text-xs mt-1 ml-[-10px] absolute z-10 text-[#d099a1]">오후 12:00</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
