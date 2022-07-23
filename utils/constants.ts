export const dbUrl =  Deno.env.get('POSTGRESURL')

export const baseUrl = Deno.env.get('DOMAIN') || "http://localhost"

export const ssoIntegrationConfig = {
    /*
     * URL to the SSO Dashboard API for both the login and token API. For local dev,
     * use the string "https://sso.recaptime.eu.org/auth/cw-api-localdev". Gitpod and
     * Codespaces users might need to use an seperate endpoint based on their usage.
     * Request one at https://sso.recaptime.eu.org/request-endpoint with your own
     * Auth0 tenant URL and client ID-secret combination.
     */
    url: Deno.env.get('SSO_INTEGRATION_ENDPOINT'),
    /*
     * Auth0 client ID for use with SSO integration endpoint API calls. It should
     * match the client ID registered on our database.
     */
    clientId: Deno.env.get('SSO_INTEGRATION_CLIENTID'),
    /*
     * Auth0 client secret for use with SSO integration endpoint API calls. It should
     * match the client secret registered on our database.
     */
    clientSecret: Deno.env.get('SSO_INTEGRATION_CLIENTSECRET'),
    /* used on state handling between Auth0 and SSO Dashboard. */
    redirectUrl: baseUrl + "/login/callback"
}

export const BASE58_ALPHABET =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
export const MIN_LEN = 3;
export const MAX_LEN = 12;
