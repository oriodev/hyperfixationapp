import { pool } from "@/lib/db";
import { mock_user } from "@/mock_data";
import { getPinnedInfodumps } from "@/utils/infodumps.utils";

jest.mock('@/lib/db', () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe("getPinnedInfodumps", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return pinned infodumps given a userID with pinned infodumps", async () => {
    const mockedData = mock_user.pinnedInfodumps;
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: mockedData.length, rows: mockedData });
    const result = await getPinnedInfodumps("1")
    expect(result).toEqual(mockedData);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM infodumps WHERE id=$1 AND pinned", [1]);
  })

  it("should return an empty array given a userID without pinned infodumps", async () => {
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: 0, rows: [] });
    const result = await getPinnedInfodumps("1");
    expect(result).toEqual([]);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM infodumps WHERE id=$1 AND pinned", [1]);
  })

  it("should throw an error if the database call fails", async () => {
    (pool.query as jest.Mock).mockRejectedValueOnce(new Error());
    await expect(getPinnedInfodumps("1")).rejects.toThrow();
  })
})
