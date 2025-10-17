export const GET_EPISODES = gql`
  query getEpisodes($page: int, $filter: FilterEpisode) {
    episodes(page: $page, filer: $filter) {
      info {
        pages
        naext
        prev
        count
      }

      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
