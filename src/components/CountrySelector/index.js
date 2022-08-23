import { useState } from "react";
import { useQuery } from "@apollo/client";
import Select from "../select";
import { ALL_COUNTRIES } from "../../queries/getAllCountries.gql";

const CountrySelector = () => {
  const { loading, error, data = {} } = useQuery(ALL_COUNTRIES); //read more here : https://www.apollographql.com/docs/react/data/queries
  const [selectedCountryCode, setSelectedCountryCode] = useState();
  const handleCountrySelection = (e) => setSelectedCountryCode(e.target.value);

  if (error) return <p>Error :(</p>;
  const { countries = [] } = data;

  return (
    <div className="App">
      <header className="App-header">
        <Select onChange={handleCountrySelection} data={countries} label="Select a Country" id="country_select">
          {loading && <option>Loading...</option>}
          <option>Please Select</option>
          {countries.map((country, key) => (
            <option key={key} value={country.code}>
              {country.name}
            </option>
          ))}
        </Select>
        {selectedCountryCode && <p style={{ fontSize: 14 }}>You selected {selectedCountryCode}</p>}
      </header>
    </div>
  );
};

export default CountrySelector;
