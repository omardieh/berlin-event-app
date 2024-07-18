export interface IDbMiddleware {
  connectDB(): Promise<void>;
  closeDB(): Promise<void>;
}
