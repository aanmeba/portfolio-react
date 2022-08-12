import React, { useEffect, useState } from "react";
import { getRecord } from "../service/strava";
import { Li, FlexUl, Spinner } from "./StyledComponents";

const RunningRecords = () => {
  const [loading, setLoading] = useState(true);
  const [runRecord, setRunRecord] = useState({
    lastFourWeek: 0,
    thisYear: 0,
    total: 0,
  });

  useEffect(() => {
    getRecord().then((data) => {
      setRunRecord({
        lastFourWeek: data.recent_run_totals.distance,
        thisYear: data.ytd_run_totals.distance,
        total: data.all_run_totals.distance,
      });
      setLoading(false);
    });
  }, []);

  return (
    <>
      <FlexUl>
        <Li>
          ✨{" "}
          {loading ? (
            <Spinner></Spinner>
          ) : (
            (runRecord.lastFourWeek / 1000).toFixed(2)
          )}{" "}
          km last 4 weeks
        </Li>
        <Li>
          ✨{" "}
          {loading ? (
            <Spinner></Spinner>
          ) : (
            (runRecord.thisYear / 1000).toFixed(2)
          )}{" "}
          km this year
        </Li>
        <Li>
          ✨{" "}
          {loading ? <Spinner></Spinner> : (runRecord.total / 1000).toFixed(2)}{" "}
          km in total
        </Li>
      </FlexUl>
    </>
  );
};

export default RunningRecords;
