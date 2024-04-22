export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_CsgPenFb.mjs').then(n => n.i);

export { page };
