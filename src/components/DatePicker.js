import DayPicker, { DateUtils } from "react-day-picker";
import { connect } from "react-redux";
import "react-day-picker/lib/style.css";

import { changeDateRange } from "../ac";
import { dateRangeSelector } from "../selectors";

const DateRange = ({ changeDateRange, range }) => {
  const { from, to } = range;
  const handleDayClick = day => {
    changeDateRange(DateUtils.addDayToRange(day, range));
  };
  const selectedRange =
    from && to && `${from.toDateString()} - ${to.toDateString()}`;

  return (
    <div className="date-range">
      <DayPicker
        onDayClick={handleDayClick}
        selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
      />
      {selectedRange}
    </div>
  );
};

export default connect(
  state => ({
    range: dateRangeSelector(state)
  }),
  { changeDateRange }
)(DateRange);
