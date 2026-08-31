export type NetworkConfig = {
  serverUrl: string
  port: number
}; // define parameters serverURL and port in network

export type EnvironmentConfig = {
  environment: "dev" | "prod"
  timeout: number
}; // define parameters environment and timeout in environemnt

export type AppConfig = NetworkConfig & EnvironmentConfig;

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  const defaults: AppConfig = {
    serverUrl: "http://localhost",
    port: 8080,
    environment: "dev",
    timeout: 3000
  };
  return {...defaults,
    ...userOverrides
  };
} // define the defaults that are in place allow the user to make changes and overrride defaults.
