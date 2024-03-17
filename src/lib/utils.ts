import { useQuery } from '@tanstack/react-query';
import { type ClassValue, clsx } from 'clsx';
import { GraphQLClient, gql } from 'graphql-request';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
