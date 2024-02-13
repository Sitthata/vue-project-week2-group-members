
const totalPages = (itemCount: number, itemPerPage: number) => {
  return Math.ceil(itemCount / itemPerPage);
};

export default totalPages