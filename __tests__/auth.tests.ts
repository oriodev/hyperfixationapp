import { emailExists, usernameExists } from "@/utils/auth.utils";

describe("emailExists", () => {
  it("should return the correct result for email which doesn't exist", async () => {
    const userExists = await emailExists("notarealemail@email.com");
    expect(userExists).toBeFalsy();
  });

  it("should return the correct result for email which does exist", async () => {
    const userExists = await emailExists("cas@bby.com");
    expect(userExists).toBeTruthy();
  });

  it("should throw an error if no email is provided", async () => {
    await expect(emailExists(undefined)).rejects.toThrow("No email provided.");
  });
});

describe("usernameExists", () => {
  it("should return the correct result for username which doesn't exist", async () => {
    const userExists = await usernameExists("notarealusername");
    expect(userExists).toBeFalsy();
  });

  it("should return the correct result for username which does exist", async () => {
    const userExists = await usernameExists("casbby");
    expect(userExists).toBeTruthy();
  });

  it("should throw an error if no email is provided", async () => {
    await expect(usernameExists(undefined)).rejects.toThrow(
      "No username provided."
    );
  });
});

