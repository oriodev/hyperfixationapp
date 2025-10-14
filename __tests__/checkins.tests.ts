import { pool } from "@/lib/db";
import { mock_user } from "@/mock_data";
import { getCheckins } from "@/utils/checkins.utils";

jest.mock('@/lib/db', () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe("getCheckins", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return checkins given a userID with checkins", async () => {
    const mockCheckins = mock_user.checkins;
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: mockCheckins.length, rows: mockCheckins });
    const result = await getCheckins("1")
    expect(result).toEqual(mockCheckins);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM checkins WHERE id=$1", [1]);

    expect('1').toEqual('1');
  })

  it("should return an empty array given a userID without checkins", async () => {
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: 0, rows: [] });
    const result = await getCheckins("1");
    expect(result).toEqual([]);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM checkins WHERE id=$1", [1]);
  })

  it("should throw an error if the database call fails", async () => {
    (pool.query as jest.Mock).mockRejectedValueOnce(new Error());
    await expect(getCheckins("1")).rejects.toThrow();
  })
})
