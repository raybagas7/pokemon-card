'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request';

interface PokemonList {
  id: string;
  name: string;
}

interface Gen3Species {
  gen3_species: PokemonList[];
}

export default function Home() {
  const queryClient = new QueryClient();
  const graphQLClient = new GraphQLClient(
    'https://beta.pokeapi.co/graphql/v1beta'
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: async (): Promise<Gen3Species> => {
      return await graphQLClient.request(gql`
        query samplePokeAPIquery {
          gen3_species: pokemon_v2_pokemonspecies(
            where: {}
            order_by: { id: asc }
          ) {
            id
            name
          }
        }
      `);
    },
  });

  console.log(data);

  if (isLoading) {
    return <p className="animate-bounce">LOADING</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-4xl">Hi</h1>
      <div className="w-full border">
        {data?.gen3_species.map((pokemon: any) => (
          <div key={pokemon.id}>{pokemon.name}</div>
        ))}
      </div>
    </main>
  );
}
