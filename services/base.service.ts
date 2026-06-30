export abstract class BaseService {
  protected readonly serviceName: string;

  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  protected logError(action: string, error: unknown): void {
    if (process.env.NODE_ENV === "development") {
      console.error(`[${this.serviceName}] ${action}`, error);
    }
  }
}
