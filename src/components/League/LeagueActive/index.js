import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { CardDetails } from "components/Details/styles";

const LeagueActive = () => {
  const { myLeague } = useSelector(({ league }) => league);
  return (
    <>
      <CardDetails>
        {myLeague.species && (
          <>
            <div className="row">
              <p className="name">Species</p>
            </div>
            <hr />
            {myLeague.species.map((p, i) => (
              <Fragment key={i}>
                <p className="title">{p.name}</p>
              </Fragment>
            ))}
          </>
        )}
        {myLeague.people && (
          <>
            <div className="row">
              <p className="name">People</p>
            </div>
            <hr />
            {myLeague.people.map((p, i) => (
              <Fragment key={i}>
                <p className="title">{p.name}</p>
              </Fragment>
            ))}
          </>
        )}
        {myLeague.planets && (
          <>
            <div className="row">
              <p className="name">Planets</p>
            </div>
            <hr />
            {myLeague.planets.map((p, i) => (
              <Fragment key={i}>
                <p className="title">{p.name}</p>
              </Fragment>
            ))}
          </>
        )}
        {myLeague.starships && (
          <>
            <div className="row">
              <p className="name">Starships</p>
            </div>
            <hr />
            {myLeague.starships.map((p, i) => (
              <Fragment key={i}>
                <p className="title">{p.name}</p>
              </Fragment>
            ))}
          </>
        )}
      </CardDetails>
    </>
  );
};

export default LeagueActive;
