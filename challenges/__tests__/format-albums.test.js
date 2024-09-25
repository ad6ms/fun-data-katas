const formatAlbums = require("../format-albums");

describe("formatAlbums", () => {
  test("check that the function returns an array", () => {
    expect(Array.isArray(formatAlbums([]))).toBe(true);
  });
  test("check that the function returns the object with correct data when passed two variables", () => {
    const albums = [
      { name: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
      { name: "High Voltage", artist: "AC/DC", releaseYear: 1975 },
    ];
    const artistIdReference = {
      "Taylor Swift": 9923,
      "AC/DC": 324,
    };
    const actual = formatAlbums(albums, artistIdReference);
    expect(actual).toEqual([
      { name: "Lover", artistId: 9923, releaseYear: 2019 },
      { name: "High Voltage", artistId: 324, releaseYear: 1975 },
    ]);
  });
  test("check that the function is not manipulating the input data", () => {
    const albums = [
      { name: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
      { name: "High Voltage", artist: "AC/DC", releaseYear: 1975 },
    ];
    const artistIdReference = {
      "Taylor Swift": 9923,
      "AC/DC": 324,
    };
    const actual = formatAlbums(albums, artistIdReference);
    expect(actual).not.toBe(albums);
  });
});
