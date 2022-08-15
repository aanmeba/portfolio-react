import React, { useEffect, useState } from "react";
import { Li, FlexUl, Spinner } from "./StyledComponents";

const RunningRecords = ({ strava }) => {
  const [loading, setLoading] = useState(true);
  const [runRecord, setRunRecord] = useState({
    lastFourWeek: 0,
    thisYear: 0,
    total: 0,
  });
  const [expires, setExpires] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (expires === null || expires > Date.now()) {
      strava
        .getAccessToken() //
        .then((data) => {
          setExpires(data.expires_at);
          setAccessToken(data.access_token);
          return data.access_token;
        })
        .then((token) => strava.getRecord(token))
        .then((data) => {
          setRunRecord({
            lastFourWeek: data.recent_run_totals.distance,
            thisYear: data.ytd_run_totals.distance,
            total: data.all_run_totals.distance,
          });
          setLoading(false);
        });
    } else {
      strava.getRecord(accessToken).then((data) => {
        setRunRecord({
          lastFourWeek: data.recent_run_totals.distance,
          thisYear: data.ytd_run_totals.distance,
          total: data.all_run_totals.distance,
        });
        setLoading(false);
      });
    }
  }, [accessToken, expires, strava]);

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
