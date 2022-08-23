import { gql } from "@apollo/client";
export const ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      phone
      name
      native
      currency
      capital
      emoji
      emojiU
      code
    }
  }
`;
