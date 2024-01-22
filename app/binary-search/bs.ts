export const bs = (
  array: Array<number>,
  start: number,
  end: number,
  target: number
): number => {
  console.log(array, start, end);
  if (start > end) {
    return -1;
  }

  let mid: number = start + (end - start) / 2;
  mid = Number.parseInt(mid);

  if (array[mid] === target) {
    return mid;
  }

  if (array[mid] > target) {
    end = mid - 1;
    return bs(array, start, end, target);
  } else {
    start = mid + 1;
    return bs(array, start, end, target);
  }
};
