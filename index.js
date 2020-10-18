"use strict";

const tasks = [];

function todo(task) {
  tasks.push({ name: task, state: false });
}

function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair.state;
}

function isNotDone(taskAndIsDonePair) {
  return !isDone(taskAndIsDonePair);
}

function list() {
  return tasks.filter(isNotDone).map((t) => t.name);
}

function done(task) {
  const indexFound = tasks.findIndex((t) => t.name === task);
  if (indexFound !== -1) {
    tasks[indexFound].state = true;
  }
}

function donelist() {
  return tasks.filter(isDone).map((t) => t.name);
}

function del(task) {
  const indexFound = tasks.findIndex((t) => t.name === task);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
  }
}

module.exports = { todo, list, done, donelist, del };
