const { removeDuplicatesByKeyName } = require("./removeDuplicatesHelper");

describe("How fields and object duplicates are removed from an input object", () => {
  it ("should remove duplicates by key", () => {
    const fields = [
      {
        key: "key1",
        _id: "12345",
      },
      {
        key: "key2",
        _id: "67890",
      },
      {
        key: "key1",
        _id: "67895",
      },
    ];

    const output = removeDuplicatesByKeyName(fields);

    expect(output).toEqual([
      {
        key: "key1",
        _id: "12345",
      },
      {
        key: "key2",
        _id: "67890",
      },
    ]);
  });

  it("should remove duplicates by key", () => {
    const fields = [
      {
        key: "key1",
        _id: "12345",
      },
      {
        key: "key2",
        _id: "67890",
      },
      {
        key: "key1",
        _id: "67890",
      },
    ];

    const output = removeDuplicatesByKeyName(fields, '_id');

    expect(output).toEqual([
      {
        key: "key1",
        _id: "12345",
      },
      {
        key: "key2",
        _id: "67890",
      },
    ]);
  });
});
