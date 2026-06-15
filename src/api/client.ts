export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
  }
}

const fallbackBaseUrl = "http://localhost:4000";

export const apiBaseUrl =
  process.env.EXPO_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? fallbackBaseUrl;

type RequestOptions = RequestInit & {
  token?: string | null;
};

type ApiErrorPayload = {
  message?: string;
  issues?: Array<{
    path?: string;
    message?: string;
  }>;
};

function formatApiError(payload: ApiErrorPayload) {
  const firstIssue = payload.issues?.find((issue) => issue.message);

  if (firstIssue?.message) {
    const field = firstIssue.path ? `${firstIssue.path}: ` : "";
    return `${field}${firstIssue.message}`;
  }

  return payload.message ?? "Request failed";
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}) {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  if (options.token) {
    headers.set("Authorization", `Bearer ${options.token}`);
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers
  });

  if (response.status === 204) {
    return undefined as T;
  }

  const payload = (await response.json().catch(() => ({}))) as ApiErrorPayload;

  if (!response.ok) {
    throw new ApiError(response.status, formatApiError(payload));
  }

  return payload as T;
}
