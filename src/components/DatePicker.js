import { useState } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const DatePicker = () => {
  const [ state, setState ] = useState( {
    from: undefined,
      to: undefined
  })

  const isEqualDates = (date1, date2) => date1 && date2 && new Date(date1).getTime() === new Date(date2).getTime();

  const handleDayClick = (day, { disabled }) => {
    if (disabled) return;

    let from = state.from;
    let to = state.to;

    if (isEqualDates(state.from, day)) {
      from = undefined;
    } else if (isEqualDates(state.to, day)) {
      to = undefined;
    } else if (!state.from) {
      from = day;
    } else {
      to = day;
    }

    setState(state => ({
        ...state,
        from,
        to,
    }));
  }


    const text =
        state.from && state.to
        ? `Selected days: ${state.from.toLocaleDateString()} - ${state.to.toLocaleDateString()}.`
        : 'Please select range of days.'
    return (
      <div>
        <DayPicker
          onDayClick={handleDayClick}
          modifiers={state}
          disabledDays={{
            before: state.from,
            after: state.to
          }}
        />
        <p>{text}</p>
      </div>
    )
};

export default DatePicker;
