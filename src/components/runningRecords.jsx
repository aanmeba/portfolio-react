import React, { useEffect, useState } from "react";
import { Li, FlexUl, Spinner } from "./StyledComponents";
import displayRunningData from "./atoms/displayRunningData";

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
        .getAccessToken()
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

  const mappingString = ["last 4 weeks", "this year", "in total"];

  return (
    <>
      <FlexUl>
        {loading ? (
          <>
            <Spinner></Spinner> Loading...
          </>
        ) : (
          <>
            {Object.keys(runRecord).map((record, index, arr) =>
              index !== arr.length - 1 ? (
                <React.Fragment key={record}>
                  <Li>
                    {displayRunningData(
                      runRecord[record],
                      `km ${mappingString[index]}`
                    )}
                  </Li>
                  <Li>|</Li>
                </React.Fragment>
              ) : (
                <Li key={record}>
                  {displayRunningData(
                    runRecord[record],
                    `km ${mappingString[index]}`
                  )}
                </Li>
              )
            )}
          </>
        )}
      </FlexUl>
    </>
  );
};

export default RunningRecords;
