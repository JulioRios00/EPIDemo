export interface VideosResponse {
  videos: string[];
}

export interface QueryError {
  message: string;
  statusCode: number;
}

export interface QueryState<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: QueryError | null;
}
