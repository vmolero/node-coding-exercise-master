const RemoveDuplicatesCommand = require("./RemoveDuplicatesCommand");

describe("How fields and object duplicates are removed from an input object", () => {
  let command = null;
  beforeAll(() => {
    command = new RemoveDuplicatesCommand();
  });
  it("should remove an object field", () => {
    const input = {
      versions: [
        {
          objects: [
            {
              fields: [
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
                  _id: "4693",
                },
              ],
            },
          ],
        },
      ],
    };
    const output = command.exec(input);

    expect(output).toEqual({
      versions: [
        {
          objects: [
            {
              fields: [
                {
                  key: "key1",
                  _id: "12345",
                },
                {
                  key: "key2",
                  _id: "67890",
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it("should remove an object field and a scene view", () => {
    const input = {
      versions: [
        {
          objects: [
            {
              fields: [
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
                  _id: "4693",
                },
              ],
            },
          ],
          scenes: [
            {
              views: [
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
                  _id: "4693",
                },
              ],
            },
          ],
        },
      ],
    };
    const output = command.exec(input);

    expect(output).toEqual({
      versions: [
        {
          objects: [
            {
              fields: [
                {
                  key: "key1",
                  _id: "12345",
                },
                {
                  key: "key2",
                  _id: "67890",
                },
              ],
            },
          ],
          scenes: [
            {
              views: [
                {
                  key: "key1",
                  _id: "12345",
                },
                {
                  key: "key2",
                  _id: "67890",
                },
              ],
            },
          ],
        },
      ],
    });
  });
  it("should remove an object, and object field and a scene view", () => {
    const input = {
      versions: [
        {
          objects: [
            {
              fields: [
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
                  _id: "4693",
                },
              ],
              key: "object-1",
            },
            {
              fields: [
                {
                  key: "key8",
                  _id: "12345",
                },
                {
                  key: "key9",
                  _id: "67890",
                },
                {
                  key: "key10",
                  _id: "4693",
                },
              ],
              key: "object-2",
            },
            {
              fields: [
                {
                  key: "key4",
                  _id: "12345",
                },
                {
                  key: "key5",
                  _id: "67890",
                },
                {
                  key: "key6",
                  _id: "4693",
                },
              ],
              key: "object-1",
            },
          ],
          scenes: [
            {
              views: [
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
                  _id: "4693",
                },
              ],
            },
          ],
        },
      ],
    };
    const output = command.exec(input);

    expect(output).toEqual({
      versions: [
        {
          objects: [
            {
              fields: [
                {
                  key: "key1",
                  _id: "12345",
                },
                {
                  key: "key2",
                  _id: "67890",
                }
              ],
              key: "object-1",
            },
            {
              fields: [
                {
                  key: "key8",
                  _id: "12345",
                },
                {
                  key: "key9",
                  _id: "67890",
                },
                {
                  key: "key10",
                  _id: "4693",
                },
              ],
              key: "object-2",
            }
          ],
          scenes: [
            {
              views: [
                {
                  key: "key1",
                  _id: "12345",
                },
                {
                  key: "key2",
                  _id: "67890",
                },
              ],
            },
          ],
        },
      ],
    });
  });
  it("should remove an object, an scene, an object field and a scene view", () => {
    const input = {
      versions: [
        {
          objects: [
            {
              fields: [
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
                  _id: "4693",
                },
              ],
              key: "object-1",
            },
            {
              fields: [
                {
                  key: "key8",
                  _id: "12345",
                },
                {
                  key: "key9",
                  _id: "67890",
                },
                {
                  key: "key10",
                  _id: "4693",
                },
              ],
              key: "object-2",
            },
            {
              fields: [
                {
                  key: "key4",
                  _id: "12345",
                },
                {
                  key: "key5",
                  _id: "67890",
                },
                {
                  key: "key6",
                  _id: "4693",
                },
              ],
              key: "object-1",
            },
          ],
          scenes: [
            {
              key: "scene-1",
              views: [
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
                  _id: "4693",
                },
              ],
            },
            {
              key: "scene-1",
              views: [
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
                  _id: "4693",
                },
              ],
            },
            {
              key: "scene-2",
              views: [
                {
                  key: "key4",
                  _id: "12345",
                },
                {
                  key: "key4",
                  _id: "67890",
                },
                {
                  key: "key4",
                  _id: "4693",
                },
              ],
            },
          ],
        },
      ],
    };
    const output = command.exec(input);

    expect(output).toEqual({
      versions: [
        {
          objects: [
            {
              fields: [
                {
                  key: "key1",
                  _id: "12345",
                },
                {
                  key: "key2",
                  _id: "67890",
                },
              ],
              key: "object-1",
            },
            {
              fields: [
                {
                  key: "key8",
                  _id: "12345",
                },
                {
                  key: "key9",
                  _id: "67890",
                },
                {
                  key: "key10",
                  _id: "4693",
                },
              ],
              key: "object-2",
            }
          ],
          scenes: [
            {
              key: "scene-1",
              views: [
                {
                  key: "key1",
                  _id: "12345",
                },
                {
                  key: "key2",
                  _id: "67890",
                }
              ],
            },
            {
              key: "scene-2",
              views: [
                {
                  key: "key4",
                  _id: "12345",
                }
              ],
            },
          ],
        },
      ],
    });
  });
});
