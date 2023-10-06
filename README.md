### `node-coding-exercise-master` exercise

In order to run the exercise: (>= node 14)

```
$ npm i // install Jest for running tests
$ npm run go // runs the exercise
```

As described in exercise, the cleaned json can be found at:
```
./clean_application.json
```

### Run tests

```
$ npm test
```

## Remove duplicates command

The implemented solution assumes the following:

* The duplicity is only decided by checking the `key` attribute for both scene/views and object/fields
* Only duplicates within the same scope are removed.
* There is only one level of fields (or views) inside objects (or scenes). If seen sublevels, but it's too late now.
* The input file and are hardcoded filenames

### Progress in 2 hours time

* It took me a while to understand the requirements and to browse through the mocked data to find duplicates, so i could create a solution (some assumptions were made and explained above)

* It took me two hours to have the functionality working and the tests passing as it is now. Some optimizations i have left out because of the time.

* The implementations uses a recursive function to filter out duplicates element is an array by `key` within the object and scene attributes.

### Optimizations
* Refactor the `cleanObjects` and `cleanScenes` functions in one function accepting params.
* Implement removal for nested "fields/views" ("fields/views inside other fields/views and so on")