import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { CardDetails } from "components/Details/styles";
import { ActionActivatedEdit, ActionDeleteLeague } from "actions";
import Loading from "components/Loading";
import { ContainerLeague, Button } from "./styles";
import PeopleSelect from "./PeopleSelect";
import SpeciesSelect from "./SpeciesSelect";
import PlanetsSelect from "./PlanetsSelect";
import StarshipsSelect from "./StarshipsSelect";
import LeagueActive from "./LeagueActive";

const ContainerButtons = styled.div`
  width: 40%;
  display: flex;
`;

const ButtonActions = styled(Button)`
  flex-basis: 40%;
  width: 100%;
  background-color: ${props => props.color};
`;

const League = ({ people, planets, species, starships }) => {
  const { leagueComplete, myLeague, myLeagueActive, loading } = useSelector(
    ({ league }) => league
  );

  const dispatch = useDispatch();

  const {
    peopleActive,
    planetsActive,
    speciesActive,
    starshipsActive,
  } = myLeagueActive;

  if (loading) {
    return <Loading loading={true} />;
  }
  return (
    <ContainerLeague>
      <h1 className="title">Create or edit your Galactic League!</h1>
      {leagueComplete && (
        <ContainerButtons>
          {leagueComplete && (
            <ButtonActions onClick={() => dispatch(ActionActivatedEdit())}>
              Editar
            </ButtonActions>
          )}
          <ButtonActions
            color="red"
            onClick={() => dispatch(ActionDeleteLeague())}
          >
            Eliminar
          </ButtonActions>
        </ContainerButtons>
      )}
      <div className="cards">
        {!leagueComplete && (
          <CardDetails>
            {speciesActive && (
              <SpeciesSelect
                className="row"
                classNameTitle="name"
                species={species}
              />
            )}
            {peopleActive && (
              <PeopleSelect
                className="row"
                classNameTitle="name"
                people={people}
              />
            )}
            {planetsActive && (
              <PlanetsSelect
                className="row"
                classNameTitle="name"
                planets={planets}
              />
            )}
            {starshipsActive && (
              <StarshipsSelect
                className="row"
                classNameTitle="name"
                starships={starships}
              />
            )}
          </CardDetails>
        )}
        {myLeague && <LeagueActive />}
      </div>
    </ContainerLeague>
  );
};

League.propTypes = {
  people: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  species: PropTypes.array.isRequired,
  starships: PropTypes.array.isRequired,
};
League.defaultProps = {
  people: [],
  planets: [],
  species: [],
  starships: [],
};

export default League;
