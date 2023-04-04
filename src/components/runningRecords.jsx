import React, { useEffect, useState } from "react";
import { FlexUl, Spinner } from "./StyledComponents";
import DisplayRunningData from "./atoms/displayRunningData";
import AddBarRight from "./atoms/addBarRight";

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
    <FlexUl>
      {loading ? (
        <>
          <Spinner></Spinner> Loading...
        </>
      ) : (
        <>
          {AddBarRight(
            Array.from(
              Object.keys(runRecord).map((record, index) => {
                const runningData = DisplayRunningData(
                  runRecord[record],
                  `km ${mappingString[index]}`
                );

                return runningData;
              })
            )
          )}
        </>
      )}
    </FlexUl>
  );
};

export default RunningRecords;
