const { cleanArrayDuplicates } = require("./removeDuplicatesHelper");

function cleanScenes(versionScenes) {
  if (!versionScenes) {
    return undefined;
  }
  if (versionScenes.length === 0) {
    return [];
  }
  const cleanedVersionSceneViews = versionScenes.map((versionScene) => {
    const sceneViews = versionScene.views;
    if (!sceneViews) {
      return undefined;
    }
    if (sceneViews.length === 0) {
      return [];
    }
    const versionSceneOutput = { ...versionScene };
    const cleanedViews = cleanArrayDuplicates(sceneViews);
    if (cleanedViews) {
      versionSceneOutput.views = cleanedViews;
    }
    return versionSceneOutput;
  });

  return cleanArrayDuplicates(cleanedVersionSceneViews);
}

function cleanObjects(versionObjects) {
  if (!versionObjects) {
    return undefined;
  }
  if (versionObjects.length === 0) {
    return [];
  }
  const cleanedVersionObjectFields = versionObjects.map((versionObject) => {
    const objectFields = versionObject.fields;
    if (!objectFields) {
      return undefined;
    }
    if (objectFields.length === 0) {
      return [];
    }
    const versionObjectOutput = { ...versionObject };
    const cleanedFields = cleanArrayDuplicates(objectFields);
    if (cleanedFields) {
      versionObjectOutput.fields = cleanedFields;
    }
    return versionObjectOutput;
  });

  return cleanArrayDuplicates(cleanedVersionObjectFields);
}

class RemoveDuplicatesCommand {
  exec(input) {
    const output = { ...input };
    output.versions = input.versions.map((version) => {
      const versionObjects = version.objects;
      const versionScenes = version.scenes;

      const versionOutput = { ...version };
      const cleanedObjects = cleanObjects(versionObjects);
      const cleanedScenes = cleanScenes(versionScenes);
      if (cleanedObjects) {
        versionOutput.objects = cleanedObjects;
      }
      if (cleanedScenes) {
        versionOutput.scenes = cleanedScenes;
      }

      return versionOutput;
    });

    return output;
  }
}

module.exports = RemoveDuplicatesCommand;
