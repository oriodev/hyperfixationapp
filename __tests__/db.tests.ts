import { emailExists, getUserId, usernameExists } from "../utils/db.utils";

describe("emailExists", () => {
  it("should return the correct result for email which doesn't exist", async () => {
    const userExists = await emailExists("notarealemail@email.com");
    expect(userExists).toBeFalsy();
  });

  it("should return the correct result for email which does exist", async () => {
    const userExists = await emailExists("ypbettles@gmail.com");
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
    const userExists = await usernameExists("yasbettles");
    expect(userExists).toBeTruthy();
  });

  it("should throw an error if no email is provided", async () => {
    await expect(usernameExists(undefined)).rejects.toThrow(
      "No username provided."
    );
  });
});

describe("getUserId", () => {
  it("should return the correct user id for an email we know to exist", async () => {
    const userId = await getUserId("ypbettles@gmail.com");
    expect(userId).toBe("1");
  });
});
