import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdStar, MdStarOutline } from 'react-icons/md';
import Price from './Price.jsx'

function GasStation({ stations, toggleFavorite, favoriteIDs, fuelValue }) {
  return (
    <GasStationList role="list">
      {stations
        .filter(station => station.fuelPrices[fuelValue] !== null)
        .map(station => {
          const fuelPrice = station.fuelPrices[fuelValue].price;
          return (
            <GasStationItem className="ListItems" key={station.id}>
              <CustomLink to={`/${station.id}`}>
                <PriceWrapper><Price price={fuelPrice}/></PriceWrapper>
                <Name>
                  {station.brand === null
                    ? station.name.length > 14
                      ? `${station.name.substring(0, 14)}...`
                      : station.name
                    : station.brand}
                </Name>
                <Street>
                  {station.address.street} {station.address.houseNumber}
                </Street>
                <Adress>
                  {station.address.postalCode} {station.address.city}
                </Adress>
              </CustomLink>
              <FavoriteStarWrapper>
                {favoriteIDs?.includes(station.id) ? (
                  <ActiveStar onClick={() => toggleFavorite(station.id)} />
                ) : (
                  <InactiveStar onClick={() => toggleFavorite(station.id)} />
                )}
              </FavoriteStarWrapper>
            </GasStationItem>
          );
        })}
    </GasStationList>
  );
}

const GasStationList = styled.ul`
  display: flex;
  margin-bottom: 7rem;
  flex-direction: column;
  gap: 10px;
  width: 80vw;
  max-width: 768px;
`;

const GasStationItem = styled.li`
  position: relative;
  list-style: none;
`;

const CustomLink = styled(Link)`
  display: grid;
  width: 100%;
  grid-template-columns: 0.1fr 1fr 0.25fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    '. gasStationName . '
    'price street . '
    '. adress . ';
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 0.25rem;
  padding: 1rem;
  text-decoration: none;
  color: #000000;
`;

const PriceWrapper = styled.p`
  grid-area: price;
  align-self: center;
  margin-right: 1em;
  font-size: 1.5rem;
`;

const Name = styled.p`
  grid-area: gasStationName;
  align-self: center;
`;

const Street = styled.p`
  grid-area: street;
  font-size: 0.75rem;
  align-self: end;
`;

const Adress = styled.p`
  grid-area: adress;
  font-size: 0.75rem;
`;

const FavoriteStarWrapper = styled.div`
  position: absolute;
  top: calc(50% - 1rem);
  right: 5%;
`;

const ActiveStar = styled(MdStar)`
  font-size: 2rem;
  color: #0367b4;
`;

const InactiveStar = styled(MdStarOutline)`
  font-size: 2rem;
  color: #2196f3;
`;

export default GasStation;
