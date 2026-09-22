/**
 * Version of the published legal notices.
 *
 * It exists so the date rendered on the policy pages and the version recorded with a person's
 * consent cannot drift apart: a consent record that points at "the privacy policy" without
 * saying which one is worth very little later. Update this whenever either notice changes, and
 * the wizard will start stamping the new version on new consents.
 *
 * Kept as an ISO date because that is what the backend stores; PRIVACY_POLICY_DISPLAY is the
 * same date written the way the pages show it.
 */
export const PRIVACY_POLICY_VERSION = '2026-08-07'
export const PRIVACY_POLICY_DISPLAY = '7 de Agosto de 2026'
