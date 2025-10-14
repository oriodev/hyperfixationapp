import { getUserId } from "@/utils/user.utils";

describe("getUserId", () => {
  it("should return the correct user id for an email we know to exist", async () => {
    const userId = await getUserId("cas@bby.com");
    expect(userId).toBe("1");
  });

  it("should not return the same value if given two different (existing) emails", async () => {
    const firstId = await getUserId("cas@bby.com");
    const secondId = await getUserId("luca@bear.com");
    const match = firstId === secondId;
    expect(match).toBeFalsy();
  });

  it("should consistently return the same id for the same email", async () => {
    const email: string = "cas@bby.com";
    const userId: string = await getUserId(email);
    expect(await getUserId(email)).toBe(userId);
  })
});
