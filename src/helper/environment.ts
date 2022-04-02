const envs: Record<string, string | undefined> = {
  SERVER_PORT: process.env.SERVER_PORT,
};

export type Stage = 'local' | 'dev' | 'test' | 'prod';

export function getStage(): Stage {
  return getEnv('NODE_ENV') as Stage;
}

export function isStage(stage: Stage): boolean {
  return getStage() === stage;
}

export function getEnv(name: string, required?: true): string;
export function getEnv(name: string, required: false): string | undefined;
export function getEnv(name: string, required = true): string | undefined {
  const v = envs[name] || process.env[name];

  if (required && !v) {
    throw new Error(`Missing environment variable ${name}`);
  }

  return v;
}
