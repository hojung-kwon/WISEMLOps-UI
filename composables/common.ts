/* 페이징 */
export const pageSize = ref(10);
export const noItemText = ref("No Item");
export const pagenationView = (pageSize: number, items: any[]) => {
  return pageSize && pageSize !== 0
    ? Math.ceil(items.length / pageSize)
    : items.length;
};

export const hasNamespace = [
  "/notebooks",
  "/experiments",
  "/pipelines",
  "/runs",
  "/jobs",
  "/cluster/services",
  "/cluster/pods",
  "/cluster/deploys",
];

export const isAuthenticated = () => {
  let login = sessionStorage.getItem("username");
  if (login === "admin") {
    return true;
  } else {
    return false;
  }
};
