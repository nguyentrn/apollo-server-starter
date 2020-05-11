import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar JSON

  type Items {
    items: [Item]
    summary: JSON
  }

  type Property {
    owner: Int
    name: String
    value: String
    kind: String
    unit: String
    display_name: String
    description: String
    category: String
    min: String
    max: String
    avg: String
    percent_no: Int
    votes: Float
    wilsons: String
  }

  type Item {
    id: String!
    name: String
    type: String
    rating_1: Int
    rating_2: Int
    rating_3: Int
    rating_4: Int
    rating_5: Int
    rating_6: Int
    rating: JSON
    properties: [Property]
    url: String
    updated_at: String
    thumbnail_img: String
    large_img: String
  }

  type Query {
    items: [JSON]
    # item(id: Int, type: String!): Item
    # summary(type: String!): JSON
  }
`;

export default typeDefs;
