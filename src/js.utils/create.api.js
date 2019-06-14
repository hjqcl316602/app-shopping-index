
import createAPIComponent from './create.api.component.js'

export default function createPlugin (Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, arguments);
  const name = Component.name;
  //const pureName = name.replace(/^cube-/i, '');
  const createName = `$${ Strings.hump(`create-${name}`)}`;
  Vue.prototype[createName] = api.create;
  Component.$create = api.create;
  return api
}
