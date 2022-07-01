export const queries = {
  ADD_VERIFICATION_PARAMS: (params, userId, url) => `
      INSERT INTO "verification-parameters" ("params", "url", "userId")
      VALUES ('${params}', '${url}', '${userId}');
  `,
};
