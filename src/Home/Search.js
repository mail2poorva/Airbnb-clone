import React, { useState } from "react";
import "./CSS/Search.css";
import "../../node_modules/react-date-range/dist/styles.css";
import "../../node_modules/react-date-range/dist/theme/default.css";
import "../../node_modules/react-date-range/dist/defaultRanges";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

// DATE PICKER COMPONENT
function Search() {
  const history = useHistory();

  const [startDate, setstartDate] = useState(new Date());

  const [endDate, setendDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button variant="outlined" onClick={() => history.push("/search")}>
        Search Airbnb
      </Button>
    </div>
  );
}

export default Search;
