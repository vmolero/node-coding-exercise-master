### `node-coding-exercise-master` exercise

In order to run the exercise: (>= node 14)

```
$ npm i // install Jest for running tests
$ npm run go // runs the exercise
```

### Tests

```
$ npm test
```

## Remove duplicates command

The implemented solution assumes the following:

* The duplicity is only decided by checking the `key` attribute for both scene/views and object/fields
* Only duplicates within the same scope are removed.
* There is only one level of fields (views) inside objects (scenes). If seen sublevels, but it's too late now.
* It uses recursion but there is room for more code optimization, since `cleanObjects` and `cleanScenes` can be written in one function accepting params.
* The input file and are hardcoded filenames

### Progress in 2 hours time

* It took me a while to understand the requirements and to browse through the mocked data to find duplicates, so i could create a solution (some assumptions were made and explained above)

* It took me two hours to have the functionality working and the tests passing as it is now. Some optimizations i have left out because of the time.

### Optimizations
* Refactor clean function to be one only method
* Implement looking for nested "fields" ("views")