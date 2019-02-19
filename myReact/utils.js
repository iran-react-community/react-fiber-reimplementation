export const HOST_COMPONENT = "host";
export const CLASS_COMPONENT = "class";
export const HOST_ROOT = "root";

export const PLACEMENT = 1;
export const DELETION = 2;
export const UPDATE = 3;

export const ENOUGH_TIME = 1;
export const TEXT = "TEXT";

export const updateQueue = [];
export let nextUnitOfWork = null;
export let pendingCommit = null;
