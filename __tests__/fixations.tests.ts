import { pool } from "@/lib/db";
import { mock_user } from "@/mock_data";
import { getFixations, getFixationTags } from "@/utils/fixations.utils";

jest.mock('@/lib/db', () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe("getFixations", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return fixations given a userID with fixations", async () => {
    const mockedData = mock_user.fixations;
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: mockedData.length, rows: mockedData });
    const result = await getFixations("1")
    expect(result).toEqual(mockedData);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM fixations WHERE id=$1", [1]);
  })

  it("should return an empty array given a userID without fixations", async () => {
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: 0, rows: [] });
    const result = await getFixations("1");
    expect(result).toEqual([]);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM fixations WHERE id=$1", [1]);
  })

  it("should throw an error if the database call fails", async () => {
    (pool.query as jest.Mock).mockRejectedValueOnce(new Error());
    await expect(getFixations("1")).rejects.toThrow();
  })
})

describe("getFixationTags", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return fixation tags given a userID with fixation tags", async () => {
    const mockedData = mock_user.profileTags;
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: mockedData.length, rows: mockedData });
    const result = await getFixationTags("1")
    expect(result).toEqual(mockedData);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM fixationtags WHERE id=$1", [1]);
  })

  it("should return an empty array given a userID without fixations", async () => {
    (pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: 0, rows: [] });
    const result = await getFixationTags("1");
    expect(result).toEqual([]);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM fixationtags WHERE id=$1", [1]);
  })

  it("should throw an error if the database call fails", async () => {
    (pool.query as jest.Mock).mockRejectedValueOnce(new Error());
    await expect(getFixations("1")).rejects.toThrow();
  })
})